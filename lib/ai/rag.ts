import { QdrantClient } from '@qdrant/js-client-rest';
import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HF_TOKEN);

const qdrantClient = new QdrantClient({
  url: process.env.QDRANT_URL!,
  apiKey: process.env.QDRANT_API_KEY!,
});

/**
 * Generates an embedding for a given text using the Hugging Face Inference SDK.
 */
async function getEmbedding(text: string): Promise<number[]> {
  const result = await hf.featureExtraction({
    model: process.env.MODEL,
    inputs: text,
  });

  // HF feature-extraction returns a 2D array or 1D array depending on the model/setup
  // For BGE, we typically want the mean pooled vector.
  if (Array.isArray(result) && Array.isArray(result[0])) {
    // If it's a matrix, we take the mean of the token embeddings (simple mean pooling)
    const vectors = result as number[][];
    const dim = vectors[0].length;
    const meanVector = new Array(dim).fill(0);
    
    for (const vec of vectors) {
      for (let i = 0; i < dim; i++) {
        meanVector[i] += vec[i];
      }
    }
    
    return meanVector.map(v => v / vectors.length);
  }

  return result as number[];
}

/**
 * Retrieves the most relevant documents from Qdrant for a given user query.
 */
export async function retrieveContext(query: string, limit = 5) {
  try {
    const vector = await getEmbedding(query);
    
    const searchResult = await qdrantClient.search(process.env.COLLECTION!, {
      vector,
      limit,
      with_payload: true,
    });

    // Extract the text content and source from the payload. 
    // Assuming the payload has a 'text' or 'content' field, and a 'source' field.
    const documents = searchResult.map((hit) => {
      const content = hit.payload?.text || hit.payload?.content || 'No content available';
      const source = hit.payload?.source || 'Unknown Source';
      return `Source: ${source}\nContent: ${content}`;
    });

    return documents.join('\n\n---\n\n');
  } catch (error) {
    console.error('RAG Retrieval Error:', error);
    return ''; // Return empty string so the chat can still function without context
  }
}
