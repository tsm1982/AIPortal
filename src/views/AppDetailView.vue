<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { applications } from "@/data/applications";

const route = useRoute();
const appId = computed(() => route.params.id as string);

const currentApp = computed(() => {
  return applications.find((app) => app.id === appId.value) || null;
});

const isLoading = ref(false);

const handleStart = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    if (currentApp.value?.url) {
      window.open(currentApp.value.url, "_blank");
    } else {
      alert(`正在启动 ${currentApp.value?.name}...`);
    }
  }, 0);
};

const goBack = () => {
  window.history.back();
};
</script>

<template>
  <div class="app-detail-view">
    <div class="container">
      <!-- 返回按钮 -->
      <div class="back-section">
        <a href="javascript:void(0)" class="back-link" @click="goBack">
          <span class="back-icon">←</span>
          返回应用列表
        </a>
      </div>

      <!-- 应用不存在 -->
      <div v-if="!currentApp" class="not-found">
        <div class="not-found-icon">🔍</div>
        <h2 class="not-found-title">应用不存在</h2>
        <p class="not-found-desc">抱歉，您访问的应用不存在或已被删除</p>
        <a href="javascript:void(0)" class="btn btn-primary" @click="goBack"> 返回应用列表 </a>
      </div>

      <!-- 应用详情 -->
      <div v-else class="app-detail">
        <!-- 头部信息 -->
        <div class="app-header">
          <div class="app-icon-large">{{ currentApp.icon }}</div>
          <div class="app-info">
            <h1 class="app-title">{{ currentApp.name }}</h1>
            <span class="app-category">{{ currentApp.category }}</span>
          </div>
          <div class="app-actions">
            <button class="btn btn-primary" @click="handleStart" :disabled="isLoading">
              {{ isLoading ? "启动中..." : "立即体验" }}
            </button>
          </div>
        </div>

        <!-- 应用描述 -->
        <div class="app-description-section">
          <h2 class="section-title">应用简介</h2>
          <p class="app-description">{{ currentApp.description }}</p>
        </div>

        <!-- 应用标签 -->
        <div class="app-tags-section">
          <h2 class="section-title">应用标签</h2>
          <div class="tags-list">
            <span v-for="tag in currentApp.tags" :key="tag" class="app-tag">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- 功能特点 -->
        <div class="app-features-section">
          <h2 class="section-title">功能特点</h2>
          <div class="features-list">
            <div v-for="(feature, index) in currentApp.features" :key="index" class="feature-item">
              <div class="feature-number">{{ index + 1 }}</div>
              <div class="feature-content">{{ feature }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-detail-view {
  padding: 32px 0;
  min-height: calc(100vh - var(--header-height) - 200px);
}

.back-section {
  margin-bottom: 24px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  padding: 6px 12px;
  border-radius: var(--border-radius-base);
  transition: all var(--animation-duration-fast);
}

.back-link:hover {
  color: var(--color-primary);
  background: var(--color-primary-bg);
}

.back-icon {
  font-size: 14px;
}

.not-found {
  text-align: center;
  padding: 60px 0;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
}

.not-found-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.not-found-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.not-found-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.app-detail {
  max-width: 900px;
  margin: 0 auto;
}

.app-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  margin-bottom: 24px;
}

.app-icon-large {
  width: 64px;
  height: 64px;
  background: var(--color-bg-layout);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  flex-shrink: 0;
}

.app-info {
  flex: 1;
}

.app-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.app-category {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 4px 12px;
  border-radius: var(--border-radius-xs);
}

.app-actions {
  display: flex;
  align-items: center;
}

.btn {
  padding: 10px 24px;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--animation-duration-fast) var(--ease-out);
  border: 1px solid transparent;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
}

.btn-primary:disabled {
  background: var(--color-text-quaternary);
  cursor: not-allowed;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 12px;
}

.app-description-section {
  background: var(--color-bg-base);
  padding: 20px;
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  margin-bottom: 24px;
}

.app-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin: 0;
}

.app-tags-section {
  background: var(--color-bg-base);
  padding: 20px;
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  margin-bottom: 24px;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.app-tag {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 4px 12px;
  border-radius: var(--border-radius-xs);
}

.app-features-section {
  background: var(--color-bg-base);
  padding: 20px;
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  margin-bottom: 24px;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.feature-number {
  width: 24px;
  height: 24px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xs);
  font-weight: 600;
  flex-shrink: 0;
}

.feature-content {
  flex: 1;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  padding-top: 2px;
}

.app-demo-section {
  background: var(--color-bg-base);
  padding: 20px;
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
}

.demo-container {
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-base);
  overflow: hidden;
}

.demo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: var(--color-bg-layout);
  border-bottom: 1px solid var(--color-border-secondary);
}

.demo-title {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-primary);
}

.demo-status {
  display: flex;
  align-items: center;
  gap: 6px;
}

.status-dot {
  width: 6px;
  height: 6px;
  background: var(--color-success);
  border-radius: 50%;
}

.status-text {
  font-size: var(--font-size-xs);
  color: var(--color-success);
}

.demo-content {
  padding: 20px 16px;
  min-height: 180px;
}

.demo-message {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.message-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.message-text {
  flex: 1;
}

.message-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  margin-bottom: 4px;
}

.message-body {
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  line-height: 1.6;
}

.demo-input-area {
  display: flex;
  gap: 8px;
}

.demo-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--color-border-base);
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  background: var(--color-bg-base);
  transition: all var(--animation-duration-fast);
}

.demo-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-bg);
}

.demo-send-btn {
  padding: 8px 20px;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: background var(--animation-duration-fast);
}

.demo-send-btn:hover {
  background: var(--color-primary-hover);
}

@media (max-width: 768px) {
  .app-detail-view {
    padding: 20px 0;
  }

  .app-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .app-actions {
    width: 100%;
  }

  .btn {
    width: 100%;
  }

  .demo-header {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }

  .demo-input-area {
    flex-direction: column;
  }

  .demo-send-btn {
    width: 100%;
  }
}
</style>
