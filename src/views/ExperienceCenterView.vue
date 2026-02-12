<script setup lang="ts">
import { ref } from "vue";

const activeApp = ref("smart-customer-service");
const isSidebarVisible = ref(true);

const aiApps = [
  {
    id: "smart-customer-service",
    name: "智能客服",
    description: "基于大语言模型的智能客服系统，提供7x24小时在线服务",
    icon: "customer-service",
    url: "https://wxai.etransfar.com:9008/xqy?userId=028682",
  },
  {
    id: "smart-data-query",
    name: "智能问数",
    description: "自然语言查询商业数据，快速获取分析结果",
    icon: "data-query",
    url: "http://43.199.253.73/#/login",
  },
  {
    id: "ai-contract-review",
    name: "AI合同审核",
    description: "智能识别合同风险，提供专业审核建议",
    icon: "contract-review",
    url: "http://106.14.199.195:8079/",
  },
  {
    id: "price-calculation",
    name: "价格计算系统",
    description: "智能AI解决方案报价评估工具",
    icon: "price-calculation",
    url: "http://aytool.tech:8073/",
  },
  {
    id: "smart-ordering",
    name: "智能点餐",
    description: "大模型配置工具，提供便捷的点餐服务",
    icon: "smart-ordering",
    url: "http://124.221.144.17:1187/diancan",
  },
  {
    id: "ppt-generation",
    name: "PPT生成",
    description: "全智能AI一键生成PPT，快速创建演示文稿",
    icon: "ppt-generation",
    url: "https://www.aippt.cn/generate?from=home",
  },
];

const currentUrl = ref(aiApps[0]?.url || "");

function selectApp(appId: string) {
  activeApp.value = appId;
  const app = aiApps.find((a) => a.id === appId);
  if (app) {
    currentUrl.value = app.url;
  }
}

function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value;
}

function getIconPath(iconName: string) {
  const icons: Record<string, string> = {
    "customer-service":
      "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
    "data-query": "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    "contract-review":
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    "price-calculation":
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    "smart-ordering":
      "M18 8h1a4 4 0 0 1 0 8h-1M2 8h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2m4 6h6a2 2 0 0 0 2-2v-2m-8 0h8m-8 0v6m8-6v6",
    "ppt-generation":
      "M7 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7zm0-2h10V5H7v14zm3-10h4m-4 4h4m-4 4h2",
  };
  return icons[iconName] || "";
}
</script>

<template>
  <div class="experience-center">
    <div class="experience-layout" :class="{ 'sidebar-hidden': !isSidebarVisible }">
      <aside v-show="isSidebarVisible" class="app-sidebar">
        <div class="sidebar-header">
          <h2 class="sidebar-title">AI应用</h2>
          <p class="sidebar-subtitle">选择体验智能应用</p>
        </div>
        <div class="app-list">
          <button
            v-for="app in aiApps"
            :key="app.id"
            class="app-item"
            :class="{ 'is-active': activeApp === app.id }"
            @click="selectApp(app.id)"
          >
            <div class="app-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  :d="getIconPath(app.icon)"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="app-info">
              <span class="app-name">{{ app.name }}</span>
              <span class="app-desc">{{ app.description }}</span>
            </div>
          </button>
        </div>
      </aside>

      <main class="app-preview">
        <div class="preview-header">
          <div class="preview-title">
            <button
              class="sidebar-toggle"
              @click="toggleSidebar"
              :title="isSidebarVisible ? '隐藏侧边栏' : '显示侧边栏'"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <span class="title-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h3>{{ aiApps.find((a) => a.id === activeApp)?.name }}</h3>
          </div>
          <div class="preview-actions">
            <a :href="currentUrl" target="_blank" class="external-link">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 3h6v6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              新窗口打开
            </a>
          </div>
        </div>
        <div class="preview-content">
          <iframe
            :src="currentUrl"
            class="app-iframe"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
            "
            allowfullscreen
          ></iframe>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.experience-center {
  min-height: calc(100vh - var(--header-height));
  background: var(--color-bg-layout);
  padding: 24px 0;
}

.experience-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  height: calc(100vh - var(--header-height) - 48px);
  width: 100%;
  padding: 0 24px;
}

.experience-layout.sidebar-hidden {
  grid-template-columns: 1fr;
}

.app-sidebar {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid var(--color-border-secondary);
}

.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 4px 0;
}

.sidebar-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  margin: 0;
}

.app-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.app-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--border-radius-base);
  cursor: pointer;
  transition: all var(--animation-duration-fast);
  text-align: left;
}

.app-item:hover {
  background: var(--color-bg-spotlight);
  border-color: var(--color-border-secondary);
}

.app-item.is-active {
  background: var(--color-primary-bg);
  border-color: var(--color-primary-bg-hover);
}

.app-icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: var(--color-bg-layout);
  border-radius: var(--border-radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  transition: all var(--animation-duration-fast);
}

.app-item.is-active .app-icon {
  background: var(--color-primary);
  color: #fff;
}

.app-icon svg {
  width: 20px;
  height: 20px;
}

.app-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.app-name {
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-text-primary);
}

.app-item.is-active .app-name {
  color: var(--color-primary);
}

.app-desc {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  line-height: 1.4;
}

.app-preview {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border-secondary);
  background: var(--color-bg-base);
}

.preview-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sidebar-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  background: var(--color-bg-layout);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-base);
  cursor: pointer;
  transition: all var(--animation-duration-fast);
  color: var(--color-text-secondary);
}

.sidebar-toggle:hover {
  background: var(--color-bg-spotlight);
  color: var(--color-primary);
  border-color: var(--color-primary-bg-hover);
}

.sidebar-toggle svg {
  width: 18px;
  height: 18px;
}

.title-icon {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
}

.title-icon svg {
  width: 20px;
  height: 20px;
}

.preview-title h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.preview-actions {
  display: flex;
  gap: 12px;
}

.external-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--color-bg-layout);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all var(--animation-duration-fast);
}

.external-link svg {
  width: 14px;
  height: 14px;
}

.external-link:hover {
  background: var(--color-bg-spotlight);
  color: var(--color-primary);
  border-color: var(--color-primary-bg-hover);
}

.preview-content {
  flex: 1;
  overflow: hidden;
  background: var(--color-bg-layout);
}

.app-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 1024px) {
  .experience-layout {
    grid-template-columns: 240px 1fr;
  }
}

@media (max-width: 768px) {
  .experience-center {
    padding: 16px 0;
  }

  .experience-layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: auto;
    min-height: calc(100vh - var(--header-height) - 32px);
  }

  .experience-layout.sidebar-hidden {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  .app-sidebar {
    max-height: 300px;
  }

  .app-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 8px;
  }

  .preview-content {
    min-height: 500px;
  }

  .sidebar-toggle {
    display: none;
  }
}

@media (max-width: 480px) {
  .app-list {
    grid-template-columns: 1fr;
  }

  .preview-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
