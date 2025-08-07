"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Cpu, Zap, TrendingUp } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AI_MODELS, PROVIDER_NAMES } from '@/lib/models';
import { TokenCalculator } from '@/lib/tokenizers';
import { formatNumber, formatCurrency, cn } from '@/lib/utils';

export default function HomePage() {
  const [selectedProvider, setSelectedProvider] = useState<string>('openai');
  const [selectedModel, setSelectedModel] = useState<string>('gpt-4o-mini');
  const [inputText, setInputText] = useState<string>('');
  const [outputTokens, setOutputTokens] = useState<number>(0);
  
  const currentModel = useMemo(() => {
    const models = AI_MODELS[selectedProvider] || [];
    return models.find(model => model.id === selectedModel) || models[0];
  }, [selectedProvider, selectedModel]);

  const inputTokens = useMemo(() => {
    return TokenCalculator.calculateTokens(inputText, selectedProvider);
  }, [inputText, selectedProvider]);

  const costCalculation = useMemo(() => {
    if (!currentModel) return null;
    return TokenCalculator.calculateCost(
      inputTokens,
      outputTokens,
      currentModel.inputPrice,
      currentModel.outputPrice
    );
  }, [inputTokens, outputTokens, currentModel]);

  const handleProviderChange = (provider: string) => {
    setSelectedProvider(provider);
    const firstModel = AI_MODELS[provider]?.[0];
    if (firstModel) {
      setSelectedModel(firstModel.id);
    }
  };

  const allModels = useMemo(() => {
    return Object.values(AI_MODELS).flat();
  }, []);

  const topModels = useMemo(() => {
    return allModels
      .filter(model => !model.deprecated)
      .sort((a, b) => a.inputPrice - b.inputPrice)
      .slice(0, 6);
  }, [allModels]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full glass-strong neon-border">
              <Calculator className="h-8 w-8 text-cyan-400" />
            </div>
            <h1 className="text-5xl font-bold gradient-text">
              AI Token Calculator
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Calculate token usage and costs across all major AI providers. 
            Compare pricing, estimate costs, and optimize your AI usage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="xl:col-span-2 space-y-6"
          >
            {/* Controls */}
            <div className="glass-strong rounded-2xl p-6 neon-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    AI Provider
                  </label>
                  <Select value={selectedProvider} onValueChange={handleProviderChange}>
                    <SelectTrigger className="neon-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(PROVIDER_NAMES).map(([key, name]) => (
                        <SelectItem key={key} value={key}>
                          <div className="flex items-center gap-2">
                            <div className={cn(
                              "w-2 h-2 rounded-full",
                              key === 'openai' && "bg-green-400",
                              key === 'anthropic' && "bg-orange-400",
                              key === 'google' && "bg-blue-400",
                              key === 'xai' && "bg-purple-400"
                            )} />
                            {name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Model
                  </label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger className="neon-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {AI_MODELS[selectedProvider]?.map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          <div className="flex items-center justify-between w-full">
                            <span className={cn(model.deprecated && "text-slate-500")}>
                              {model.name}
                            </span>
                            {model.deprecated && (
                              <span className="text-xs text-orange-400 ml-2">Deprecated</span>
                            )}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Model Info */}
              {currentModel && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">
                      ${currentModel.inputPrice}
                    </div>
                    <div className="text-xs text-slate-400">per 1M input tokens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      ${currentModel.outputPrice}
                    </div>
                    <div className="text-xs text-slate-400">per 1M output tokens</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                      {formatNumber(currentModel.contextLength)}
                    </div>
                    <div className="text-xs text-slate-400">context length</div>
                  </div>
                </div>
              )}

              {/* Input Section */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Input Prompt
                  </label>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter your prompt here to calculate token usage and costs..."
                    className="w-full h-32 px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Expected Output Tokens
                  </label>
                  <input
                    type="number"
                    value={outputTokens}
                    onChange={(e) => setOutputTokens(Number(e.target.value) || 0)}
                    placeholder="0"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            {costCalculation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-strong rounded-2xl p-6 neon-border neon-glow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  <h3 className="text-2xl font-bold gradient-text">Cost Analysis</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                    <div className="text-3xl font-bold text-cyan-400">
                      {formatNumber(inputTokens)}
                    </div>
                    <div className="text-sm text-slate-400">Input Tokens</div>
                  </div>
                  
                  <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                    <div className="text-3xl font-bold text-purple-400">
                      {formatNumber(outputTokens)}
                    </div>
                    <div className="text-sm text-slate-400">Output Tokens</div>
                  </div>

                  <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                    <div className="text-3xl font-bold text-green-400">
                      {formatCurrency(costCalculation.estimatedInputCost)}
                    </div>
                    <div className="text-sm text-slate-400">Input Cost</div>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-400/30">
                    <div className="text-3xl font-bold text-white">
                      {formatCurrency(costCalculation.totalEstimatedCost)}
                    </div>
                    <div className="text-sm text-slate-300 font-medium">Total Cost</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Top Models */}
            <div className="glass-strong rounded-2xl p-6 neon-border">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Most Cost-Effective</h3>
              </div>
              <div className="space-y-3">
                {topModels.map((model) => (
                  <div
                    key={model.id}
                    className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg cursor-pointer hover:bg-slate-700/30 transition-colors"
                    onClick={() => {
                      setSelectedProvider(model.provider);
                      setSelectedModel(model.id);
                    }}
                  >
                    <div>
                      <div className="font-medium text-sm text-slate-200">
                        {model.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {PROVIDER_NAMES[model.provider]}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-cyan-400">
                        ${model.inputPrice}
                      </div>
                      <div className="text-xs text-slate-400">per 1M</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="glass-strong rounded-2xl p-6 neon-border">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-5 w-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Stats</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Total Models</span>
                  <span className="font-bold text-white">{allModels.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Providers</span>
                  <span className="font-bold text-white">{Object.keys(AI_MODELS).length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Cheapest Input</span>
                  <span className="font-bold text-green-400">$0.075/1M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Most Expensive</span>
                  <span className="font-bold text-red-400">$75.00/1M</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}