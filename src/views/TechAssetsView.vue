<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const searchQuery = ref("");
const selectedCategory = ref("all");

interface Asset {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  tags: string[];
  features: string[];
  url?: string;
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
  },
];

const categories = [
  { id: "all", name: "全部技术", icon: "⚙️" },
  { id: "AI平台", name: "AI平台", icon: "🤖" },
  { id: "数据平台", name: "数据平台", icon: "🗄️" },
  { id: "区块链", name: "区块链", icon: "⛓️" },
  { id: "IoT平台", name: "IoT平台", icon: "📡" },
  { id: "开发工具", name: "开发工具", icon: "🧩" },
  { id: "安全平台", name: "安全平台", icon: "🔒" },
];

const filteredAssets = computed(() => {
  return assets.filter((asset) => {
    const matchesSearch =
      !searchQuery.value ||
      asset.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      asset.description.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesCategory =
      selectedCategory.value === "all" || asset.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

const selectCategory = (categoryId: string) => {
  selectedCategory.value = categoryId;
};

const handleViewDetail = (assetId: string) => {
  router.push(`/tech-assets/${assetId}`);
};
</script>

<template>
  <div class="assets-view">
    <div class="content-layout">
      <aside class="sidebar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input v-model="searchQuery" type="text" placeholder="搜索技术" class="search-input" />
        </div>

        <nav class="category-nav">
          <div
            v-for="category in categories"
            :key="category.id"
            @click="selectCategory(category.id)"
            :class="['category-item', { active: selectedCategory === category.id }]"
          >
            <span class="category-icon">{{ category.icon }}</span>
            <span class="category-name">{{ category.name }}</span>
          </div>
        </nav>
      </aside>

      <main class="main-content">
        <div class="assets-grid">
          <div v-for="asset in filteredAssets" :key="asset.id" class="asset-card">
            <div class="asset-header">
              <div class="asset-icon">{{ asset.icon }}</div>
              <div class="asset-info">
                <h3 class="asset-name">{{ asset.name }}</h3>
                <span class="asset-category">{{ asset.category }}</span>
              </div>
            </div>

            <p class="asset-description">{{ asset.description }}</p>

            <div class="asset-tags">
              <span v-for="tag in asset.tags" :key="tag" class="asset-tag">
                {{ tag }}
              </span>
            </div>

            <div class="asset-actions">
              <button class="btn btn-primary" @click="handleViewDetail(asset.id)">查看详情</button>
            </div>
          </div>
        </div>

        <div v-if="filteredAssets.length === 0" class="empty-state">
          <div class="empty-icon">🔍</div>
          <p class="empty-text">没有找到相关技术</p>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.assets-view {
  padding: 32px 0;
  min-height: calc(100vh - var(--header-height) - 200px);
}

.content-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 24px;
  width: 100%;
  padding: 0 24px;
}

.sidebar {
  position: sticky;
  top: calc(var(--header-height) + 16px);
  align-self: start;
}

.search-box {
  position: relative;
  margin-bottom: 16px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: var(--color-text-tertiary);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 8px 12px 8px 36px;
  border: 1px solid var(--color-border-base);
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  background: var(--color-bg-base);
  transition: all var(--animation-duration-fast) var(--ease-out);
}

.search-input::placeholder {
  color: var(--color-text-quaternary);
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px var(--color-primary-bg);
}

.category-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 8px;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: var(--border-radius-base);
  cursor: pointer;
  transition: all var(--animation-duration-fast) var(--ease-out);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.category-item:hover {
  background: var(--color-bg-spotlight);
  color: var(--color-text-primary);
}

.category-item.active {
  background: var(--color-primary-bg);
  color: var(--color-primary);
  font-weight: 500;
}

.category-icon {
  font-size: 14px;
}

.category-name {
  flex: 1;
}

.main-content {
  min-height: 400px;
}

.page-header {
  margin-bottom: 24px;
}

.page-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.page-subtitle {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: 0;
}

.assets-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.asset-card {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 20px;
  transition: all var(--animation-duration-base) var(--ease-out);
  display: flex;
  flex-direction: column;
}

.asset-card:hover {
  box-shadow: var(--shadow-2);
  border-color: var(--color-primary-bg-hover);
  transform: translateY(-2px);
}

.asset-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.asset-icon {
  width: 40px;
  height: 40px;
  background: var(--color-bg-layout);
  border-radius: var(--border-radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.asset-info {
  flex: 1;
  min-width: 0;
}

.asset-name {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.asset-category {
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 2px 8px;
  border-radius: var(--border-radius-xs);
}

.asset-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
  flex: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.asset-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.asset-tag {
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 2px 8px;
  border-radius: var(--border-radius-xs);
}

.asset-actions {
  display: flex;
  gap: 8px;
}

.btn {
  padding: 6px 16px;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--animation-duration-fast) var(--ease-out);
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
}

.empty-state {
  text-align: center;
  padding: 60px 0;
  color: var(--color-text-tertiary);
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.empty-text {
  font-size: var(--font-size-sm);
  margin: 0;
}

@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
  }

  .category-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4px;
  }

  .category-item {
    padding: 6px 12px;
    background: transparent;
    border: 1px solid var(--color-border-base);
    border-radius: var(--border-radius-base);
  }

  .category-item:hover {
    border-color: var(--color-primary);
    background: transparent;
  }

  .category-item.active {
    background: var(--color-primary);
    color: #fff;
    border-color: var(--color-primary);
  }

  .assets-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .assets-view {
    padding: 20px 0;
  }

  .page-title {
    font-size: 24px;
  }

  .content-layout {
    gap: 16px;
  }

  .search-box {
    margin-bottom: 12px;
  }
}
</style>
