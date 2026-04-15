<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import AIChat from "@/components/AIChat.vue";
import { techAssets, type AssetFile } from "@/data/techAssets";

const route = useRoute();
const assetId = computed(() => route.params.id as string);

const currentAsset = computed(() => {
  return techAssets.find((asset) => asset.id === assetId.value) || null;
});

const handleStart = () => {
  if (currentAsset.value?.url) {
    window.open(currentAsset.value.url, "_blank");
  } else {
    alert(`正在打开 ${currentAsset.value?.name}...`);
  }
};

const getFileIcon = (type: string): string => {
  const iconMap: Record<string, string> = {
    pdf: "📄",
    doc: "📝",
    docx: "📝",
    xls: "📊",
    xlsx: "📊",
    ppt: "📽️",
    pptx: "📽️",
    image: "🖼️",
    video: "🎬",
    CAD: "📐",
    diagram: "🔲",
    zip: "📦",
    rar: "📦",
  };
  return iconMap[type] || "📁";
};

const viewFile = (file: AssetFile) => {
  if (file.type === "pdf" || file.type === "image" || file.type === "video") {
    window.open(file.url, "_blank");
  } else {
    alert(`预览功能暂不支持此文件类型：${file.type}`);
  }
};

const downloadFile = (file: AssetFile) => {
  const link = document.createElement("a");
  link.href = file.url;
  link.download = file.name;
  link.click();
};
</script>

<template>
  <div class="asset-detail-view">
    <div class="container">
      <div class="back-section">
        <RouterLink to="/tech-assets" class="back-link">
          <span class="back-icon">←</span>
          返回技术列表
        </RouterLink>
      </div>

      <div v-if="!currentAsset" class="not-found">
        <div class="not-found-icon">🔍</div>
        <h2 class="not-found-title">技术不存在</h2>
        <p class="not-found-desc">抱歉，您访问的技术不存在或已被删除</p>
        <RouterLink to="/tech-assets" class="btn btn-primary"> 返回技术列表 </RouterLink>
      </div>

      <div v-else class="asset-detail">
        <div class="asset-header">
          <div class="asset-icon-large">{{ currentAsset.icon }}</div>
          <div class="asset-info">
            <h1 class="asset-title">{{ currentAsset.name }}</h1>
            <span class="asset-category">{{ currentAsset.category }}</span>
          </div>
          <div class="asset-actions">
            <button class="btn btn-primary" @click="handleStart">
              查看详情
            </button>
          </div>
        </div>

        <div class="asset-description-section">
          <h2 class="section-title">技术简介</h2>
          <p class="asset-description">{{ currentAsset.description }}</p>
        </div>

        <div class="asset-tags-section">
          <h2 class="section-title">技术标签</h2>
          <div class="tags-list">
            <span v-for="tag in currentAsset.tags" :key="tag" class="asset-tag">
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="asset-features-section">
          <h2 class="section-title">功能特点</h2>
          <div class="features-list">
            <div v-for="(feature, index) in currentAsset.features" :key="index" class="feature-item">
              <div class="feature-number">{{ index + 1 }}</div>
              <div class="feature-content">{{ feature }}</div>
            </div>
          </div>
        </div>

        <div v-if="currentAsset.files?.length" class="asset-files-section">
          <h2 class="section-title">相关文档</h2>
          <div class="files-list">
            <div v-for="file in currentAsset.files" :key="file.id" class="file-item">
              <div class="file-icon">{{ getFileIcon(file.type) }}</div>
              <div class="file-info">
                <div class="file-name">{{ file.name }}</div>
                <div class="file-meta">
                  <span class="file-size">{{ file.size }}</span>
                  <span class="file-date">{{ file.uploadTime }}</span>
                </div>
              </div>
              <div class="file-actions">
                <button class="file-btn view-btn" @click="viewFile(file)">查看</button>
                <button class="file-btn download-btn" @click="downloadFile(file)">下载</button>
              </div>
            </div>
          </div>
        </div>

        <AIChat
          :title="`AI 问答 - ${currentAsset.name}`"
          :context-info="currentAsset.name"
          placeholder="输入您想了解的技术问题..."
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.asset-detail-view {
  padding: 32px 0;
  min-height: calc(100vh - var(--header-height) - 200px);
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
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

.asset-detail {
  max-width: 900px;
  margin: 0 auto;
}

.asset-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  margin-bottom: 24px;
}

.asset-icon-large {
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

.asset-info {
  flex: 1;
}

.asset-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.asset-category {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 4px 12px;
  border-radius: var(--border-radius-xs);
}

.asset-actions {
  display: flex;
  align-items: center;
}

.asset-description-section,
.asset-tags-section,
.asset-features-section {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 24px;
  margin-bottom: 16px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-border-secondary);
}

.asset-description {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin: 0;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.asset-tag {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 4px 12px;
  border-radius: var(--border-radius-xs);
}

.features-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: var(--color-bg-layout);
  border-radius: var(--border-radius-base);
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
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.btn {
  padding: 8px 20px;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--animation-duration-fast);
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
}

.asset-files-section {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 24px;
  margin-bottom: 16px;
}

.files-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--color-bg-layout);
  border-radius: var(--border-radius-base);
  transition: all var(--animation-duration-fast);
}

.file-item:hover {
  background: var(--color-bg-spotlight);
}

.file-icon {
  width: 40px;
  height: 40px;
  background: var(--color-bg-base);
  border-radius: var(--border-radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.file-info {
  flex: 1;
  min-width: 0;
}

.file-name {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-meta {
  display: flex;
  gap: 12px;
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.file-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.file-btn {
  padding: 6px 12px;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-xs);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--animation-duration-fast);
  border: 1px solid transparent;
}

.view-btn {
  background: var(--color-primary-bg);
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.view-btn:hover {
  background: var(--color-primary);
  color: #fff;
}

.download-btn {
  background: var(--color-bg-base);
  color: var(--color-text-secondary);
  border-color: var(--color-border-base);
}

.download-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .asset-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .asset-actions {
    width: 100%;
    justify-content: center;
  }

  .features-list {
    grid-template-columns: 1fr;
  }
}
</style>