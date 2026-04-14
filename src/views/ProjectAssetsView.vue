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
    id: "p1",
    name: "智慧社区项目",
    description: "基于AI技术打造的智慧社区管理平台，整合物业管理、安防监控、便民服务等功能",
    category: "智慧社区",
    icon: "🏘️",
    tags: ["智慧社区", "物业管理", "安防监控", "便民服务"],
    features: [
      "智能门禁：人脸识别与二维码扫描",
      "安防监控：24小时实时监控与异常报警",
      "报修管理：在线报修与进度跟踪",
      "便民服务：快递代收、洗衣预约等",
    ],
  },
  {
    id: "p2",
    name: "智慧园区项目",
    description: "面向产业园区的数字化管理解决方案，提供招商、运营、能源等多维度管理能力",
    category: "智慧园区",
    icon: "🏢",
    tags: ["智慧园区", "招商管理", "能源管理", "数字化运营"],
    features: [
      "招商管理：全流程数字化招商",
      "能源管理：智能节能与成本控制",
      "设施管理：设备监控与维护提醒",
      "数据分析：园区运营数据洞察",
    ],
  },
  {
    id: "p3",
    name: "智慧水务项目",
    description: "水务行业智能化管理平台，实现水质监测、管网管理、客户服务一体化",
    category: "智慧水务",
    icon: "💧",
    tags: ["智慧水务", "水质监测", "管网管理", "客户服务"],
    features: [
      "水质监测：实时水质数据采集与分析",
      "管网管理：GIS地图与管网维护",
      "客户服务：在线缴费与业务办理",
      "数据分析：用水趋势与预测",
    ],
  },
  {
    id: "p4",
    name: "智慧交通项目",
    description: "城市交通智能化解决方案，包含信号控制、路况监测、公交调度等功能",
    category: "智慧交通",
    icon: "🚦",
    tags: ["智慧交通", "信号控制", "路况监测", "公交调度"],
    features: [
      "信号控制：自适应交通信号调节",
      "路况监测：实时路况信息发布",
      "公交调度：智能公交运营管理",
      "数据分析：交通流量分析与预测",
    ],
  },
  {
    id: "p5",
    name: "智慧教育项目",
    description: "教育行业数字化转型平台，涵盖教学管理、在线学习、教育评价等功能",
    category: "智慧教育",
    icon: "🎓",
    tags: ["智慧教育", "教学管理", "在线学习", "教育评价"],
    features: [
      "教学管理：课程安排与学籍管理",
      "在线学习：网络教学与资源共享",
      "教育评价：多维度教学质量评估",
      "数据分析：学习效果跟踪分析",
    ],
  },
  {
    id: "p6",
    name: "智慧医疗项目",
    description: "医疗健康智能化平台，提供预约挂号、远程诊疗、健康管理等服务",
    category: "智慧医疗",
    icon: "🏥",
    tags: ["智慧医疗", "预约挂号", "远程诊疗", "健康管理"],
    features: [
      "预约挂号：在线预约与排队管理",
      "远程诊疗：视频问诊与处方开具",
      "健康管理：健康档案与随访提醒",
      "数据分析：疾病预测与防控",
    ],
  },
];

const categories = [
  { id: "all", name: "全部项目", icon: "📁" },
  { id: "智慧社区", name: "智慧社区", icon: "🏘️" },
  { id: "智慧园区", name: "智慧园区", icon: "🏢" },
  { id: "智慧水务", name: "智慧水务", icon: "💧" },
  { id: "智慧交通", name: "智慧交通", icon: "🚦" },
  { id: "智慧教育", name: "智慧教育", icon: "🎓" },
  { id: "智慧医疗", name: "智慧医疗", icon: "🏥" },
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
  router.push(`/project-assets/${assetId}`);
};
</script>

<template>
  <div class="assets-view">
    <div class="content-layout">
      <aside class="sidebar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input v-model="searchQuery" type="text" placeholder="搜索项目" class="search-input" />
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
          <p class="empty-text">没有找到相关项目</p>
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
