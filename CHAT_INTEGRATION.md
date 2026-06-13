# Micropass Steps - Chat Integration

## 🎯 Visão Geral

O Micropass agora tem um assistente AI integrado usando modelos gratuitos do OpenCode Zen.

## 📊 Modelos Disponíveis

| Modelo | Velocidade | Melhor Para | Custo |
|--------|------------|-------------|-------|
| **DeepSeek V4 Flash Free** | ⚡ Rápido | Coding, respostas rápidas | 🆓 Grátis |
| **MiMo v2.5 Free** | 🔄 Médio | Tarefas gerais | 🆓 Grátis |
| **Nemotron 3 Ultra Free** | 🔄 Médio | Reasoning complexo | 🆓 Grátis |
| **North Mini Code Free** | ⚡ Rápido | Geração de código | 🆓 Grátis |

## ⚙️ Configurações Otimizadas

Cada modelo tem parâmetros otimizados para o caso de uso:

```javascript
// DeepSeek V4 Flash Free
{
  temperature: 0.5,    // Determinístico para coding
  max_tokens: 2048,    // Respostas concisas
  top_p: 0.85          // Focado em qualidade
}

// MiMo v2.5 Free
{
  temperature: 0.7,    // Mais criativo
  max_tokens: 4096,    // Respostas mais longas
  top_p: 0.9           // Mais diversidade
}
```

## 🚀 Como Usar

### 1. Iniciar o Projeto
```bash
cd /home/ubuntu/projects/micropass-steps
npm install
npm run dev
```

### 2. Acessar o Chat
- URL: `http://localhost:5173/chat`
- Selecione o modelo no header
- Digite sua mensagem

### 3. Exemplos de Prompts
- "Quebrar tarefa em micro-passos"
- "Criar plano de foco para estudar"
- "Técnica Pomodoro para ADHD"
- "Motivação para começar a limpeza"

## 🔧 Arquitetura

```
src/
├── services/
│   └── api.js          # Serviço de API (OpenCode Zen)
├── screens/
│   └── Chat.jsx        # Interface do chat
└── components/         # Componentes reutilizáveis
```

### api.js
- `sendMessage()` - Envio síncrono
- `streamMessage()` - Streaming em tempo real
- `listFreeModels()` - Listar modelos gratuitos
- `FREE_MODELS` - Configurações dos modelos

### Chat.jsx
- Histórico de mensagens
- Seletor de modelos
- Loading state com animação
- Tratamento de erros
- Quick tips para ADHD

## 📈 Próximos Passos

1. **Persistência** - Salvar histórico em localStorage
2. **Exportar conversas** - PDF/Markdown
3. **Templates** - Prompts pré-definidos
4. **Integração** - Conectar com Checklist e MindMap

## 🐛 Troubleshooting

### Erro: "Failed to fetch"
- Verifique se a API key está correta
- Confirme se o endpoint está acessível

### Erro: "Rate limit exceeded"
- Aguarde alguns segundos
- Troque para outro modelo gratuito

### Resposta vazia
- Aumente `max_tokens` na configuração
- Verifique se o modelo está disponível

## 📚 Recursos

- [OpenCode Zen API Docs](https://opencode.ai/docs)
- [Micropass Repository](https://github.com/Iketx/micropass-steps)
- [Hermes Agent Docs](https://hermes-agent.nousresearch.com/docs)
