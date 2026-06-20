import { customProvider, gateway } from "ai";
import { createOllama } from "ai-sdk-ollama";
import { isTestEnvironment } from "../constants";
import { titleModel } from "./models";

export const myProvider = isTestEnvironment
  ? (() => {
      const { chatModel, titleModel } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "title-model": titleModel,
        },
      });
    })()
  : null;

const ollamaProvider = createOllama({
  baseURL: process.env.OLLAMA_BASE_URL || "http://localhost:11434",
  headers: {
    Authorization: `Bearer ${process.env.OLLAMA_API_KEY}`,
  },
});

export function getLanguageModel(modelId: string) {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel(modelId);
  }

  // Use Ollama provider instead of the Vercel Gateway
  return ollamaProvider.languageModel(modelId);
}

export function getTitleModel() {
  if (isTestEnvironment && myProvider) {
    return myProvider.languageModel("title-model");
  }
  
  return ollamaProvider.languageModel(titleModel.id);
}
