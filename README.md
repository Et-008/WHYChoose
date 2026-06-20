<a href="https://chatbot.ai-sdk.dev/demo">
  <img alt="WHYChoose" src="app/(chat)/opengraph-image.png">
  <h1 align="center">WHYChoose</h1>
</a>

<p align="center">
    WHYChoose is a professional RAG-powered (Retrieval Augmented Generation) AI assistant built with Next.js and the AI SDK, specialized in querying internal knowledge bases to provide accurate, document-backed responses.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#architecture"><strong>Architecture</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy"><strong>Deploy</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a>
</p>
<br/>

## Features

- **RAG Integration**: Custom retrieval pipeline using Qdrant Vector DB and Hugging Face embeddings for context-aware responses.
- [Next.js](https://nextjs.org) App Router
  - Advanced routing for seamless navigation and performance
  - React Server Components (RSCs) and Server Actions for server-side rendering
- [AI SDK](https://ai-sdk.dev/docs/introduction)
  - Unified API for generating text and streaming responses
  - Seamless integration with Ollama for private/cloud LLM hosting
- [shadcn/ui](https://ui.shadcn.com)
  - Modern UI components with [Tailwind CSS](https://tailwindcss.com) and [Radix UI](https://radix-ui.com)
- Data Persistence
  - [Neon Serverless Postgres](https://vercel.com/marketplace/neon) for saving chat history and user data
  - [Vercel Blob](https://vercel.com/storage/blob) for efficient file storage
- [Auth.js](https://authjs.dev)
  - Simple and secure authentication

## Architecture

WHYChoose implements a state-of-the-art RAG pipeline:
1. **Embedding**: User queries are converted to vectors using the `BAAI/bge-small-en-v1.5` model via the Hugging Face Inference API.
2. **Retrieval**: Vectors are used to query a **Qdrant** vector database to find the most relevant insurance policy documents.
3. **Augmentation**: The retrieved documents are injected into the LLM system prompt as context.
4. **Generation**: The final response is generated using the **Ollama** provider (e.g., Gemma 4), ensuring a private and scalable inference layer.

## Model Providers

The project uses a flexible provider system configured in `lib/ai/providers.ts`. While it supports various gateways, the primary production engine is powered by **Ollama**.

### Environment Configuration

To run WHYChoose, you must provide the following keys in your `.env.local`:

- `OLLAMA_BASE_URL`: The URL of your cloud-hosted Ollama instance.
- `OLLAMA_API_KEY`: Authentication key for your Ollama instance.
- `QDRANT_URL` & `QDRANT_API_KEY`: Credentials for your Qdrant Cloud instance.
- `HF_TOKEN`: Hugging Face token for embedding generation.
- `COLLECTION`: The Qdrant collection name (e.g., `insurance_policies_search`).
- `MODEL`: The embedding model name (e.g., `BAAI/bge-small-en-v1.5`).

## Deploy

This project is optimized for deployment on **Netlify** or **Vercel**.

For Netlify deployments, a `netlify.toml` is included to handle serverless function timeouts and memory requirements necessary for AI streaming.

## Running locally

1. Install dependencies:
```bash
pnpm install
```

2. Setup environment variables in `.env.local` based on the provided examples.

3. Initialize database:
```bash
pnpm db:migrate
```

4. Start the development server:
```bash
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000).
