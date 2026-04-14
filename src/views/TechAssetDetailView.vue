<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import AIChat from "@/components/AIChat.vue";

const route = useRoute();
const assetId = computed(() => route.params.id as string);

interface Asset {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  tags: string[];
  features: string[];
  url?: string;
  files?: AssetFile[];
}

interface AssetFile {
  id: string;
  name: string;
  type: string;
  size: string;
  url: string;
  uploadTime: string;
}

const assets: Asset[] = [
  {
    id: "t1",
    name: "AI模型服务平台",
    description: "基于云原生的AI模型服务平台，提供模型训练、部署、推理等全生命周期管理",
    category: "AI平台",
    icon: "🤖",
    tags: ["模型训练", "模型部署", "在线推理", "AutoML"],
    features: [
      "模型训练：分布式训练与超参调优",
      "模型部署：一键部署与版本管理",
      "在线推理：高并发推理服务",
      "AutoML：自动化模型搜索",
    ],
    files: [
      { id: "tf1", name: "AI模型服务平台产品介绍.pdf", type: "pdf", size: "2.5MB", url: "#", uploadTime: "2024-03-15" },
      { id: "tf2", name: "API接口文档.docx", type: "doc", size: "1.8MB", url: "#", uploadTime: "2024-03-10" },
      { id: "tf3", name: "架构设计图.png", type: "image", size: "2.2MB", url: "#", uploadTime: "2024-03-08" },
    ],
  },
  {
    id: "t2",
    name: "数据中台",
    description: "企业级数据集成与管理平台，支持多源异构数据的采集、治理与服务化",
    category: "数据平台",
    icon: "🗄️",
    tags: ["数据集成", "数据治理", "数据服务", "数据血缘"],
    features: [
      "数据集成：多源异构数据快速接入",
      "数据治理：数据质量与标准化管理",
      "数据服务：API化数据输出",
      "数据血缘：全链路数据追溯",
    ],
    files: [
      { id: "tf4", name: "数据中台技术白皮书.pdf", type: "pdf", size: "3.8MB", url: "#", uploadTime: "2024-03-12" },
      { id: "tf5", name: "数据模型设计文档.vsd", type: "diagram", size: "4.5MB", url: "#", uploadTime: "2024-03-08" },
    ],
  },
  {
    id: "t3",
    name: "区块链服务平台",
    description: "企业级区块链技术平台，支持联盟链部署、智能合约开发与运维监控",
    category: "区块链",
    icon: "⛓️",
    tags: ["联盟链", "智能合约", "运维监控", "跨链互通"],
    features: [
      "联盟链：快速部署与节点管理",
      "智能合约：可视化开发与安全审计",
      "运维监控：链上交易实时监控",
      "跨链互通：多链跨链解决方案",
    ],
    files: [
      { id: "tf6", name: "区块链平台解决方案.pdf", type: "pdf", size: "2.9MB", url: "#", uploadTime: "2024-03-15" },
      { id: "tf7", name: "智能合约开发指南.docx", type: "doc", size: "1.5MB", url: "#", uploadTime: "2024-03-10" },
    ],
  },
  {
    id: "t4",
    name: "物联网平台",
    description: "海量物联网设备连接与管理平台，支持设备接入、数据采集与远程控制",
    category: "IoT平台",
    icon: "📡",
    tags: ["设备接入", "数据采集", "边缘计算", "规则引擎"],
    features: [
      "设备接入：多协议设备快速接入",
      "数据采集：实时数据采集与存储",
      "边缘计算：云边协同计算",
      "规则引擎：灵活的业务规则配置",
    ],
    files: [
      { id: "tf8", name: "物联网平台产品手册.pdf", type: "pdf", size: "3.2MB", url: "#", uploadTime: "2024-03-18" },
      { id: "tf9", name: "设备接入协议说明.docx", type: "doc", size: "1.2MB", url: "#", uploadTime: "2024-03-15" },
    ],
  },
  {
    id: "t5",
    name: "低代码开发平台",
    description: "可视化低代码开发平台，支持表单、流程、页面等快速构建",
    category: "开发工具",
    icon: "🧩",
    tags: ["可视化开发", "表单构建", "流程编排", "组件市场"],
    features: [
      "可视化开发：拖拽式页面构建",
      "表单构建：灵活的数据表单设计",
      "流程编排：业务流程可视化编排",
      "组件市场：丰富的组件生态",
    ],
    files: [
      { id: "tf10", name: "低代码平台使用指南.pdf", type: "pdf", size: "4.1MB", url: "#", uploadTime: "2024-03-20" },
      { id: "tf11", name: "组件开发规范.docx", type: "doc", size: "0.8MB", url: "#", uploadTime: "2024-03-18" },
    ],
  },
  {
    id: "t6",
    name: "安全合规平台",
    description: "全方位安全合规管理平台，提供身份认证、权限管理与安全审计",
    category: "安全平台",
    icon: "🔒",
    tags: ["身份认证", "权限管理", "安全审计", "数据加密"],
    features: [
      "身份认证：多因素认证与单点登录",
      "权限管理：细粒度权限控制",
      "安全审计：全方位操作审计",
      "数据加密：敏感数据加密保护",
    ],
    files: [
      { id: "tf12", name: "安全合规平台介绍.pdf", type: "pdf", size: "2.3MB", url: "#", uploadTime: "2024-03-22" },
      { id: "tf13", name: "安全架构设计文档.docx", type: "doc", size: "1.6MB", url: "#", uploadTime: "2024-03-20" },
    ],
  },
];

const currentAsset = computed(() => {
  return assets.find((asset) => asset.id === assetId.value) || null;
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