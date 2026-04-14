<script setup lang="ts">
import { ref, nextTick } from "vue";

interface Props {
  title?: string;
  placeholder?: string;
  contextInfo?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "AI 智能问答",
  placeholder: "输入您想了解的问题...",
  contextInfo: "",
});

interface Message {
  id: number;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

const messages = ref<Message[]>([
  {
    id: 1,
    type: "ai",
    content: `您好！我是AI智能助手，基于当前资产信息为您提供问答服务。${
      props.contextInfo ? `当前上下文：${props.contextInfo}` : ""
    }\n\n您可以问我关于这个资产的任何问题，例如：\n• 功能特点是什么？\n• 适用场景有哪些？\n• 如何使用这个资产？\n• 技术架构是怎样的？`,
    timestamp: new Date(),
  },
]);

const inputText = ref("");
const isLoading = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

const sendMessage = async () => {
  const text = inputText.value.trim();
  if (!text || isLoading.value) return;

  messages.value.push({
    id: Date.now(),
    type: "user",
    content: text,
    timestamp: new Date(),
  });

  inputText.value = "";
  isLoading.value = true;
  scrollToBottom();

  setTimeout(() => {
    const aiResponse = generateAIResponse(text);
    messages.value.push({
      id: Date.now() + 1,
      type: "ai",
      content: aiResponse,
      timestamp: new Date(),
    });
    isLoading.value = false;
    scrollToBottom();
  }, 1000);
};

const generateAIResponse = (question: string): string => {
  const q = question.toLowerCase();

  if (q.includes("功能") || q.includes("特点") || q.includes("能力")) {
    return "这个资产的主要功能包括：\n\n1. **智能识别** - 采用先进的AI算法，能够精准识别各类场景需求\n2. **数据分析** - 支持多维度数据处理与分析，提供可视化报表\n3. **自动化流程** - 自动化处理重复性任务，提升工作效率\n4. **安全合规** - 内置多重安全机制，确保数据安全与合规性\n\n如果您想了解某个具体功能的详细信息，请告诉我。";
  }

  if (q.includes("场景") || q.includes("适用") || q.includes("用途")) {
    return "这个资产适用于多种业务场景：\n\n• **企业数字化转型** - 助力传统企业实现数字化升级\n• **智慧城市建设** - 支持城市管理和民生服务\n• **行业解决方案** - 针对特定行业提供定制化方案\n• **内部协同办公** - 提升团队协作效率\n\n您有具体的应用场景想了解吗？";
  }

  if (q.includes("使用") || q.includes("怎么") || q.includes("如何")) {
    return "使用这个资产的基本步骤如下：\n\n1. **账号注册** - 完成企业账号的注册与认证\n2. **资产申请** - 通过资产市场提交使用申请\n3. **权限配置** - 根据业务需求配置访问权限\n4. **开始使用** - 登录平台开始使用各项功能\n\n如果您遇到具体问题，可以联系技术支持获得帮助。";
  }

  if (q.includes("技术") || q.includes("架构") || q.includes("原理")) {
    return "这个资产采用先进的技术架构：\n\n• **前端框架** - Vue 3 + TypeScript\n• **后端服务** - 分布式微服务架构\n• **AI引擎** - 基于千问大模型，支持RAG技术\n• **数据存储** - 混合云部署，确保数据安全\n• **API接口** - RESTful API，支持二次开发\n\n您想深入了解哪个技术细节？";
  }

  if (q.includes("价格") || q.includes("费用") || q.includes("收费")) {
    return "关于费用说明：\n\n• **基础版** - 免费使用基本功能\n• **专业版** - 按月/年订阅，包含高级功能\n• **企业版** - 定制化报价，支持私有化部署\n• **免费试用** - 首次注册可享受免费试用期\n\n如需获取详细报价方案，请联系我们的商务团队。";
  }

  if (q.includes("联系") || q.includes("支持") || q.includes("帮助")) {
    return "获取帮助的方式：\n\n📧 **邮箱**: support@example.com\n📞 **电话**: 400-888-8888\n💬 **在线客服**: 工作日 9:00-18:00\n📖 **文档中心**: docs.example.com\n\n您也可以在资产详情页查看完整的使用文档。";
  }

  return `感谢您的提问！关于"${question}"这个问题，我可以提供以下信息：\n\n根据我们的知识库，这个资产的相关信息包括：\n\n• **核心优势** - 采用业界领先的AI技术，具有高性能、高可用性特点\n• **适用对象** - 适合需要进行数字化转型的各类企业\n• **使用要求** - 需要具备基本的网络环境和浏览器支持\n\n如果您需要更详细的信息，建议查看官方文档或联系技术支持。`;
};

const clearChat = () => {
  messages.value = [
    {
      id: Date.now(),
      type: "ai",
      content: `您好！我是AI智能助手，基于当前资产信息为您提供问答服务。${
        props.contextInfo ? `当前上下文：${props.contextInfo}` : ""
      }\n\n您可以问我关于这个资产的任何问题，例如：\n• 功能特点是什么？\n• 适用场景有哪些？\n• 如何使用这个资产？\n• 技术架构是怎样的？`,
      timestamp: new Date(),
    },
  ];
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
</script>

<template>
  <div class="ai-chat-container">
    <div class="chat-header">
      <div class="chat-title">
        <span class="chat-icon">💬</span>
        <span>{{ title }}</span>
      </div>
      <button class="clear-btn" @click="clearChat" title="清空对话">🗑️</button>
    </div>

    <div ref="messagesContainer" class="chat-messages">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="['message', message.type === 'user' ? 'user-message' : 'ai-message']"
      >
        <div class="message-avatar">
          {{ message.type === "user" ? "👤" : "🤖" }}
        </div>
        <div class="message-content">
          <div class="message-text">{{ message.content }}</div>
          <div class="message-time">{{ formatTime(message.timestamp) }}</div>
        </div>
      </div>

      <div v-if="isLoading" class="message ai-message">
        <div class="message-avatar">🤖</div>
        <div class="message-content">
          <div class="message-text loading">
            <span class="loading-dot">.</span>
            <span class="loading-dot">.</span>
            <span class="loading-dot">.</span>
          </div>
        </div>
      </div>
    </div>

    <div class="chat-input-area">
      <input
        v-model="inputText"
        type="text"
        :placeholder="placeholder"
        class="chat-input"
        @keyup.enter="sendMessage"
        :disabled="isLoading"
      />
      <button class="send-btn" @click="sendMessage" :disabled="isLoading || !inputText.trim()">
        发送
      </button>
    </div>
  </div>
</template>

<style scoped>
.ai-chat-container {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-top: 16px;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border-secondary);
  background: var(--color-bg-layout);
  border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
}

.chat-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
}

.chat-icon {
  font-size: 18px;
}

.clear-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: var(--border-radius-base);
  transition: background var(--animation-duration-fast);
}

.clear-btn:hover {
  background: var(--color-bg-spotlight);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message {
  display: flex;
  gap: 12px;
  max-width: 85%;
}

.user-message {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.ai-message {
  align-self: flex-start;
}

.message-avatar {
  width: 32px;
  height: 32px;
  background: var(--color-bg-layout);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.user-message .message-avatar {
  background: var(--color-primary-bg);
}

.message-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.message-text {
  padding: 10px 14px;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  color: var(--color-text-primary);
  white-space: pre-wrap;
  word-break: break-word;
}

.ai-message .message-text {
  background: var(--color-bg-layout);
  border-bottom-left-radius: 4px;
}

.user-message .message-text {
  background: var(--color-primary);
  color: #fff;
  border-bottom-right-radius: 4px;
}

.message-time {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  padding: 0 4px;
}

.user-message .message-time {
  text-align: right;
}

.loading {
  display: flex;
  gap: 4px;
  padding: 10px 14px;
}

.loading-dot {
  animation: bounce 1.4s infinite ease-in-out both;
  font-size: 20px;
  line-height: 1;
}

.loading-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.loading-dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

.chat-input-area {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid var(--color-border-secondary);
  background: var(--color-bg-layout);
  border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
}

.chat-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid var(--color-border-base);
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  background: var(--color-bg-base);
  transition: all var(--animation-duration-fast);
}

.chat-input::placeholder {
  color: var(--color-text-quaternary);
}

.chat-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-bg);
}

.send-btn {
  padding: 10px 20px;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--animation-duration-fast);
}

.send-btn:hover:not(:disabled) {
  background: var(--color-primary-hover);
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .ai-chat-container {
    height: 350px;
  }

  .message {
    max-width: 90%;
  }
}
</style>