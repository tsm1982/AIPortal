<script setup lang="ts">
import { ref } from "vue";
import AIChat from "./AIChat.vue";

interface Props {
  contextInfo?: string;
  chatTitle?: string;
}

withDefaults(defineProps<Props>(), {
  contextInfo: "",
  chatTitle: "AI 智能问答",
});

const isChatOpen = ref(false);

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;
};
</script>

<template>
  <div class="floating-service">
    <div v-if="isChatOpen" class="chat-popup">
      <AIChat :title="chatTitle" :context-info="contextInfo" />
    </div>
    <button class="service-btn" @click="toggleChat" :class="{ active: isChatOpen }">
      <span class="service-icon">{{ isChatOpen ? "✕" : "💬" }}</span>
      <span class="service-text">{{ isChatOpen ? "关闭" : "咨询客服" }}</span>
    </button>
  </div>
</template>

<style scoped>
.floating-service {
  position: fixed;
  bottom: 100px;
  right: 24px;
  z-index: 1000;
}

.chat-popup {
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 360px;
  height: 480px;
  border-radius: var(--border-radius-lg);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: var(--font-size-sm);
  font-weight: 500;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  transition: all var(--animation-duration-fast) var(--ease-out);
}

.service-btn:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.service-btn.active {
  background: #666;
}

.service-btn.active:hover {
  background: #555;
}

.service-icon {
  font-size: 18px;
}

.service-text {
  white-space: nowrap;
}
</style>
