// Client-side tokenizer implementations with fallbacks

export interface TokenResult {
  tokens: number;
  estimatedInputCost: number;
  estimatedOutputCost: number;
  totalEstimatedCost: number;
}

export class TokenCalculator {
  static calculateOpenAI(text: string): number {
    // OpenAI tokenizer estimation based on research
    // GPT models typically use ~4 chars per token for English text
    // More accurate estimation considering word boundaries and punctuation
    const words = text.split(/\s+/).filter(word => word.length > 0).length;
    const chars = text.length;
    
    // OpenAI models: ~0.75 tokens per word + 0.25 tokens per 4 chars
    return Math.ceil(words * 0.75 + chars * 0.25 / 4);
  }

  static calculateClaude(text: string): number {
    // Claude tokenizer estimation
    // Similar to OpenAI but slightly more efficient
    const words = text.split(/\s+/).filter(word => word.length > 0).length;
    const chars = text.length;
    
    // Claude models: ~0.7 tokens per word + char adjustment
    return Math.ceil(words * 0.7 + chars * 0.3 / 4);
  }

  static calculateGemini(text: string): number {
    // Gemini uses SentencePiece tokenizer
    // For now, using a more accurate estimation based on research
    // SentencePiece typically results in more tokens than GPT tokenizers
    const words = text.split(/\s+/).length;
    const characters = text.length;
    
    // Gemini tokenizer tends to create ~1.3 tokens per word on average
    // With additional tokens for punctuation and special characters
    return Math.ceil(words * 1.3 + characters * 0.05);
  }

  static calculateGrok(text: string): number {
    // Grok uses similar tokenization to OpenAI models
    const words = text.split(/\s+/).filter(word => word.length > 0).length;
    const chars = text.length;
    
    // Grok models: similar to OpenAI tokenization
    return Math.ceil(words * 0.75 + chars * 0.25 / 4);
  }

  static calculateTokens(text: string, provider: string): number {
    if (!text.trim()) return 0;

    switch (provider) {
      case 'openai':
        return this.calculateOpenAI(text);
      case 'anthropic':
        return this.calculateClaude(text);
      case 'google':
        return this.calculateGemini(text);
      case 'xai':
        return this.calculateGrok(text);
      default:
        return Math.ceil(text.length / 4);
    }
  }

  static calculateCost(
    inputTokens: number,
    outputTokens: number,
    inputPrice: number,
    outputPrice: number
  ): TokenResult {
    const estimatedInputCost = (inputTokens / 1000000) * inputPrice;
    const estimatedOutputCost = (outputTokens / 1000000) * outputPrice;
    const totalEstimatedCost = estimatedInputCost + estimatedOutputCost;

    return {
      tokens: inputTokens + outputTokens,
      estimatedInputCost,
      estimatedOutputCost,
      totalEstimatedCost,
    };
  }
}