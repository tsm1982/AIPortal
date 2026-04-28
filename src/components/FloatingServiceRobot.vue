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

const closeChat = () => {
  isChatOpen.value = false;
};
</script>

<template>
  <div class="floating-service">
    <div v-if="isChatOpen" class="chat-popup">
      <button class="popup-close-btn" @click="closeChat">✕</button>
      <AIChat :title="chatTitle" :context-info="contextInfo" />
    </div>
    <button v-if="!isChatOpen" class="service-btn" @click="isChatOpen = true">
      <span class="service-icon">💬</span>
      <span class="service-text"></span>
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

.popup-close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border: none;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background var(--animation-duration-fast);
}

.popup-close-btn:hover {
  background: rgba(0, 0, 0, 0.2);
}

.service-icon {
  font-size: 18px;
}

.service-text {
  white-space: nowrap;
}
</style>
