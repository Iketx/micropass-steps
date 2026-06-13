const API_KEY = import.meta.env.VITE_OPENCODE_ZEN_API_KEY || 'sk-aiztmgNLNM6NvNjEvX0T2eud79O3FhHlYVuXPxg4uUjrpn4oKM7LvEVebmvE1S38';
const BASE_URL = 'https://opencode.ai/zen/v1';

// Modelos gratuitos disponíveis
export const FREE_MODELS = {
  'deepseek-v4-flash-free': {
    name: 'DeepSeek V4 Flash',
    description: 'Rápido e eficiente para coding',
    speed: 'fast',
    bestFor: 'Coding, respostas rápidas'
  },
  'mimo-v2.5-free': {
    name: 'MiMo v2.5',
    description: 'Bom balance entre velocidade e qualidade',
    speed: 'medium',
    bestFor: 'Tarefas gerais'
  },
  'nemotron-3-ultra-free': {
    name: 'Nemotron 3 Ultra',
    description: 'Excelente reasoning',
    speed: 'medium',
    bestFor: 'Reasoning complexo'
  },
  'north-mini-code-free': {
    name: 'North Mini Code',
    description: 'Otimizado para código',
    speed: 'fast',
    bestFor: 'Geração de código'
  }
};

// Configurações otimizadas por modelo
const MODEL_CONFIGS = {
  'deepseek-v4-flash-free': {
    temperature: 0.5,
    max_tokens: 2048,
    top_p: 0.85
  },
  'mimo-v2.5-free': {
    temperature: 0.7,
    max_tokens: 4096,
    top_p: 0.9
  },
  'nemotron-3-ultra-free': {
    temperature: 0.6,
    max_tokens: 4096,
    top_p: 0.9
  },
  'north-mini-code-free': {
    temperature: 0.4,
    max_tokens: 2048,
    top_p: 0.85
  }
};

/**
 * Enviar mensagem para o modelo
 * @param {string} message - Mensagem do usuário
 * @param {string} model - ID do modelo
 * @param {Array} history - Histórico de mensagens
 * @returns {Promise<string>} Resposta do modelo
 */
export async function sendMessage(message, model = 'deepseek-v4-flash-free', history = []) {
  const config = MODEL_CONFIGS[model] || MODEL_CONFIGS['deepseek-v4-flash-free'];
  
  // Construir mensagens com histórico
  const messages = [
    {
      role: 'system',
      content: `Você é o Micropass Assistant, um AI coach focado em produtividade para pessoas com ADHD. 
      Seu objetivo é ajudar a quebrar tarefas complexas em micro-passos gerenciáveis.
      Seja conciso, motivacional e prático. Use emojis quando apropriado.
      Responda em português brasileiro.`
    },
    ...history.map(msg => ({
      role: msg.role,
      content: msg.content
    })),
    {
      role: 'user',
      content: message
    }
  ];

  try {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        temperature: config.temperature,
        max_tokens: config.max_tokens,
        top_p: config.top_p,
        stream: false
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Erro ao comunicar com a API');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
  }
}

/**
 * Stream de resposta (para respostas em tempo real)
 * @param {string} message - Mensagem do usuário
 * @param {string} model - ID do modelo
 * @param {Array} history - Histórico de mensagens
 * @param {Function} onChunk - Callback para cada chunk
 * @returns {Promise<void>}
 */
export async function streamMessage(message, model = 'deepseek-v4-flash-free', history = [], onChunk) {
  const config = MODEL_CONFIGS[model] || MODEL_CONFIGS['deepseek-v4-flash-free'];
  
  const messages = [
    {
      role: 'system',
      content: `Você é o Micropass Assistant, um AI coach focado em produtividade para pessoas com ADHD. 
      Seu objetivo é ajudar a quebrar tarefas complexas em micro-passos gerenciáveis.
      Seja conciso, motivacional e prático. Use emojis quando apropriado.
      Responda em português brasileiro.`
    },
    ...history.map(msg => ({
      role: msg.role,
      content: msg.content
    })),
    {
      role: 'user',
      content: message
    }
  ];

  try {
    const response = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        temperature: config.temperature,
        max_tokens: config.max_tokens,
        top_p: config.top_p,
        stream: true
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Erro ao comunicar com a API');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') return;

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices[0]?.delta?.content;
            if (content) {
              onChunk(content);
            }
          } catch (e) {
            // Ignorar linhas inválidas
          }
        }
      }
    }
  } catch (error) {
    console.error('Erro no stream:', error);
    throw error;
  }
}

/**
 * Listar modelos gratuitos disponíveis
 * @returns {Promise<Array>} Lista de modelos
 */
export async function listFreeModels() {
  try {
    const response = await fetch(`${BASE_URL}/models`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao listar modelos');
    }

    const data = await response.json();
    return data.data.filter(m => m.id.endsWith('-free'));
  } catch (error) {
    console.error('Erro ao listar modelos:', error);
    return [];
  }
}

export default {
  sendMessage,
  streamMessage,
  listFreeModels,
  FREE_MODELS
};
