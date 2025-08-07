# 🤖 AI Token Calculator

A comprehensive, futuristic web application for calculating token usage and costs across all major AI providers. Compare pricing, estimate costs, and optimize your AI usage with real-time calculations.

## 🚀 **Live Demo**

**✨ [Try it now: https://ai-token-calculator-omega.vercel.app/](https://ai-token-calculator-omega.vercel.app/)**

---

## 📊 **Features**

### **🎯 Multi-Provider Support**
- **OpenAI**: GPT-4.1, GPT-4o, o3, o4-mini, GPT-3.5 Turbo (10 models)
- **Anthropic**: Claude 4.1, Sonnet 4, Haiku 3.5, Claude 3.x series (9 models) 
- **Google**: Gemini 2.5 Pro, Flash variants, Gemini 2.0 series (10 models)
- **xAI**: Grok 4, Grok 4 Heavy, Grok 3, legacy models (5 models)

### **💰 Real-Time Cost Analysis**
- **Client-side tokenization** - No API calls needed
- **Accurate pricing** - Updated with 2025 rates
- **Input/Output breakdown** - Separate cost calculation
- **Total cost estimation** - Complete project budgeting

### **🎨 Modern UI/UX**
- **Futuristic design** - Dark theme with neon accents
- **Glassmorphism effects** - Modern visual aesthetics  
- **Smooth animations** - Framer Motion powered
- **Responsive layout** - Works on all devices
- **Real-time updates** - Instant token counting

### **📈 Smart Recommendations**
- **Cost-effective models** - Find the best pricing
- **Provider comparison** - Side-by-side analysis
- **Usage statistics** - Comprehensive metrics
- **Model information** - Context limits and notes

---

## 🛠️ **Technology Stack**

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS 3.x with custom animations
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Tokenizers**: Multiple client-side libraries
- **Deployment**: Vercel

---

## 🏃‍♂️ **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm/yarn/pnpm

### **Installation**

```bash
# Clone the repository
git clone https://github.com/anirudhhgupta/ai-token-calculator.git

# Navigate to project directory
cd ai-token-calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### **Build for Production**

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 📋 **Supported Models & Pricing**

### **OpenAI Models** 
| Model | Input ($/1M) | Output ($/1M) | Context |
|-------|-------------|---------------|---------|
| GPT-4.1 nano | $0.10 | $0.25 | 1M |
| GPT-4o mini | $0.15 | $0.60 | 128K |
| GPT-4.1 | $2.50 | $10.00 | 1M |
| o3 | $15.00 | $60.00 | 200K |

### **Claude Models**
| Model | Input ($/1M) | Output ($/1M) | Context |
|-------|-------------|---------------|---------|
| Haiku 3.5 | $0.80 | $4.00 | 200K |
| Sonnet 3.5/4 | $3.00 | $15.00 | 200K |
| Opus 4.1 | $15.00 | $75.00 | 200K |

### **Google Gemini Models**
| Model | Input ($/1M) | Output ($/1M) | Context |
|-------|-------------|---------------|---------|
| 2.5 Flash-Lite | $0.075 | $0.30 | 1M |
| 2.0 Flash | $0.10 | $0.40 | 1M |
| 2.5 Pro | $2.50 | $15.00 | 2M |

### **xAI Grok Models**
| Model | Input ($/1M) | Output ($/1M) | Context |
|-------|-------------|---------------|---------|
| Grok 2 | $2.00 | $10.00 | 128K |
| Grok 4 | $3.00 | $15.00 | 128K |
| Grok 4 Heavy | $6.00 | $30.00 | 128K |

*45+ models total with complete 2025 pricing data*

---

## 🎯 **How to Use**

1. **Select Provider**: Choose from OpenAI, Anthropic, Google, or xAI
2. **Pick Model**: Select specific model from dropdown
3. **Enter Prompt**: Type your input text in the textarea
4. **Set Output Tokens**: Estimate expected response length
5. **View Results**: See real-time token count and cost breakdown
6. **Compare Options**: Use sidebar to find cost-effective alternatives

---

## 🔧 **Key Features**

### **Client-Side Processing**
- No API keys required
- No external API calls
- Complete privacy protection
- Instant calculations

### **Accurate Tokenization**
- Provider-specific algorithms
- OpenAI: BPE tokenization estimation
- Claude: Anthropic tokenizer approximation  
- Gemini: SentencePiece modeling
- Grok: GPT-compatible estimation

### **Cost Optimization**
- Real-time price comparison
- Most cost-effective recommendations
- Budget planning tools
- Usage analytics

---

## 📱 **Screenshots**

![AI Token Calculator Interface](https://ai-token-calculator-omega.vercel.app/screenshot.png)

*Futuristic interface with real-time token calculation and cost analysis*

---

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- **OpenAI** - GPT models and tokenization
- **Anthropic** - Claude models and API
- **Google** - Gemini models and documentation  
- **xAI** - Grok models and pricing
- **Vercel** - Deployment platform
- **Next.js** - React framework

---

## 🔗 **Links**

- **Live App**: [https://ai-token-calculator-omega.vercel.app/](https://ai-token-calculator-omega.vercel.app/)
- **Repository**: [https://github.com/anirudhhgupta/ai-token-calculator](https://github.com/anirudhhgupta/ai-token-calculator)
- **Issues**: [Report bugs or request features](https://github.com/anirudhhgupta/ai-token-calculator/issues)

---

**Made with ❤️ for the AI community**