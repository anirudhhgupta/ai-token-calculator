export interface AIModel {
  id: string;
  name: string;
  provider: 'openai' | 'anthropic' | 'google' | 'xai';
  inputPrice: number; // Price per million tokens
  outputPrice: number; // Price per million tokens
  contextLength: number; // Max context length
  notes?: string;
  deprecated?: boolean;
}

export const AI_MODELS: Record<string, AIModel[]> = {
  openai: [
    {
      id: 'gpt-4-1',
      name: 'GPT-4.1',
      provider: 'openai',
      inputPrice: 2.50,
      outputPrice: 10.00,
      contextLength: 1000000,
      notes: 'Flagship multimodal model'
    },
    {
      id: 'gpt-4-1-mini',
      name: 'GPT-4.1 mini',
      provider: 'openai',
      inputPrice: 0.15,
      outputPrice: 0.60,
      contextLength: 1000000,
      notes: 'Cost-efficient version'
    },
    {
      id: 'gpt-4-1-nano',
      name: 'GPT-4.1 nano',
      provider: 'openai',
      inputPrice: 0.10,
      outputPrice: 0.25,
      contextLength: 1000000,
      notes: 'Fastest & cheapest'
    },
    {
      id: 'gpt-4o',
      name: 'GPT-4o',
      provider: 'openai',
      inputPrice: 2.50,
      outputPrice: 10.00,
      contextLength: 128000,
      notes: 'Multimodal capabilities'
    },
    {
      id: 'gpt-4o-mini',
      name: 'GPT-4o mini',
      provider: 'openai',
      inputPrice: 0.15,
      outputPrice: 0.60,
      contextLength: 128000,
      notes: 'Most popular choice'
    },
    {
      id: 'gpt-4-5-preview',
      name: 'GPT-4.5 Preview',
      provider: 'openai',
      inputPrice: 75.00,
      outputPrice: 150.00,
      contextLength: 128000,
      notes: 'Premium model',
      deprecated: true
    },
    {
      id: 'o3',
      name: 'OpenAI o3',
      provider: 'openai',
      inputPrice: 15.00,
      outputPrice: 60.00,
      contextLength: 200000,
      notes: 'Advanced reasoning'
    },
    {
      id: 'o3-pro',
      name: 'OpenAI o3-pro',
      provider: 'openai',
      inputPrice: 30.00,
      outputPrice: 120.00,
      contextLength: 200000,
      notes: 'Extended reasoning'
    },
    {
      id: 'o4-mini',
      name: 'OpenAI o4-mini',
      provider: 'openai',
      inputPrice: 3.00,
      outputPrice: 12.00,
      contextLength: 200000,
      notes: 'Fast reasoning'
    },
    {
      id: 'gpt-3-5-turbo',
      name: 'GPT-3.5 Turbo',
      provider: 'openai',
      inputPrice: 0.50,
      outputPrice: 1.50,
      contextLength: 16000,
      notes: 'Legacy chat model'
    }
  ],
  anthropic: [
    {
      id: 'claude-opus-4-1',
      name: 'Claude Opus 4.1',
      provider: 'anthropic',
      inputPrice: 15.00,
      outputPrice: 75.00,
      contextLength: 200000,
      notes: 'Latest & most capable'
    },
    {
      id: 'claude-opus-4',
      name: 'Claude Opus 4',
      provider: 'anthropic',
      inputPrice: 15.00,
      outputPrice: 75.00,
      contextLength: 200000,
      notes: 'Best coding model'
    },
    {
      id: 'claude-sonnet-4',
      name: 'Claude Sonnet 4',
      provider: 'anthropic',
      inputPrice: 3.00,
      outputPrice: 15.00,
      contextLength: 200000,
      notes: 'High performance'
    },
    {
      id: 'claude-3-7-sonnet',
      name: 'Claude 3.7 Sonnet',
      provider: 'anthropic',
      inputPrice: 3.00,
      outputPrice: 15.00,
      contextLength: 200000,
      notes: 'Hybrid reasoning'
    },
    {
      id: 'claude-3-5-sonnet',
      name: 'Claude 3.5 Sonnet',
      provider: 'anthropic',
      inputPrice: 3.00,
      outputPrice: 15.00,
      contextLength: 200000,
      notes: 'Updated Oct 2024'
    },
    {
      id: 'claude-3-5-haiku',
      name: 'Claude 3.5 Haiku',
      provider: 'anthropic',
      inputPrice: 0.80,
      outputPrice: 4.00,
      contextLength: 200000,
      notes: 'Fast & efficient'
    },
    {
      id: 'claude-3-opus',
      name: 'Claude 3 Opus',
      provider: 'anthropic',
      inputPrice: 15.00,
      outputPrice: 75.00,
      contextLength: 200000,
      notes: 'Legacy flagship'
    },
    {
      id: 'claude-3-sonnet',
      name: 'Claude 3 Sonnet',
      provider: 'anthropic',
      inputPrice: 3.00,
      outputPrice: 15.00,
      contextLength: 200000,
      notes: 'Legacy balanced'
    },
    {
      id: 'claude-3-haiku',
      name: 'Claude 3 Haiku',
      provider: 'anthropic',
      inputPrice: 0.25,
      outputPrice: 1.25,
      contextLength: 200000,
      notes: 'Legacy fastest'
    }
  ],
  google: [
    {
      id: 'gemini-2-5-pro',
      name: 'Gemini 2.5 Pro',
      provider: 'google',
      inputPrice: 2.50,
      outputPrice: 15.00,
      contextLength: 2000000,
      notes: 'Most advanced thinking'
    },
    {
      id: 'gemini-2-5-flash',
      name: 'Gemini 2.5 Flash',
      provider: 'google',
      inputPrice: 0.30,
      outputPrice: 1.20,
      contextLength: 1000000,
      notes: 'Best price-performance'
    },
    {
      id: 'gemini-2-5-flash-lite',
      name: 'Gemini 2.5 Flash-Lite',
      provider: 'google',
      inputPrice: 0.075,
      outputPrice: 0.30,
      contextLength: 1000000,
      notes: 'Ultra cost-efficient'
    },
    {
      id: 'gemini-2-0-flash',
      name: 'Gemini 2.0 Flash',
      provider: 'google',
      inputPrice: 0.10,
      outputPrice: 0.40,
      contextLength: 1000000,
      notes: 'Next-gen features'
    },
    {
      id: 'gemini-2-0-flash-lite',
      name: 'Gemini 2.0 Flash-Lite',
      provider: 'google',
      inputPrice: 0.075,
      outputPrice: 0.30,
      contextLength: 1000000,
      notes: 'Improved 1.5 Flash'
    },
    {
      id: 'gemini-2-0-pro-exp',
      name: 'Gemini 2.0 Pro Experimental',
      provider: 'google',
      inputPrice: 2.50,
      outputPrice: 10.00,
      contextLength: 2000000,
      notes: 'Best coding'
    },
    {
      id: 'gemini-2-0-flash-live',
      name: 'Gemini 2.0 Flash Live',
      provider: 'google',
      inputPrice: 0.10,
      outputPrice: 0.40,
      contextLength: 1000000,
      notes: 'Audio/video chat'
    },
    {
      id: 'gemini-1-5-pro',
      name: 'Gemini 1.5 Pro',
      provider: 'google',
      inputPrice: 1.25,
      outputPrice: 5.00,
      contextLength: 2000000,
      notes: 'Legacy (limited availability)',
      deprecated: true
    },
    {
      id: 'gemini-1-5-flash',
      name: 'Gemini 1.5 Flash',
      provider: 'google',
      inputPrice: 0.075,
      outputPrice: 0.30,
      contextLength: 1000000,
      notes: 'Legacy (limited availability)',
      deprecated: true
    },
    {
      id: 'gemini-1-0-pro',
      name: 'Gemini 1.0 Pro',
      provider: 'google',
      inputPrice: 0.50,
      outputPrice: 1.50,
      contextLength: 32000,
      notes: 'Deprecated',
      deprecated: true
    }
  ],
  xai: [
    {
      id: 'grok-4',
      name: 'Grok 4',
      provider: 'xai',
      inputPrice: 3.00,
      outputPrice: 15.00,
      contextLength: 128000,
      notes: 'Most intelligent'
    },
    {
      id: 'grok-4-heavy',
      name: 'Grok 4 Heavy',
      provider: 'xai',
      inputPrice: 6.00,
      outputPrice: 30.00,
      contextLength: 128000,
      notes: 'Most powerful'
    },
    {
      id: 'grok-3',
      name: 'Grok 3',
      provider: 'xai',
      inputPrice: 3.00,
      outputPrice: 15.00,
      contextLength: 128000,
      notes: 'Flagship model'
    },
    {
      id: 'grok-2',
      name: 'Grok 2',
      provider: 'xai',
      inputPrice: 2.00,
      outputPrice: 10.00,
      contextLength: 128000,
      notes: 'Legacy model'
    },
    {
      id: 'grok-1',
      name: 'Grok 1',
      provider: 'xai',
      inputPrice: 2.00,
      outputPrice: 10.00,
      contextLength: 128000,
      notes: 'Original model'
    }
  ]
};

export const PROVIDER_NAMES = {
  openai: 'OpenAI',
  anthropic: 'Anthropic',
  google: 'Google',
  xai: 'xAI'
} as const;