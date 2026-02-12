<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const searchQuery = ref("");
const selectedCategory = ref("all");

const categories = [
  { id: "all", name: "全部应用", icon: "📱" },
  { id: "government", name: "政务场景", icon: "🏛️" },
  { id: "travel", name: "旅游场景", icon: "✈️" },
  { id: "office", name: "办公场景", icon: "💼" },
  { id: "marketing", name: "营销场景", icon: "📊" },
  { id: "automotive", name: "汽车场景", icon: "🚗" },
  { id: "retail", name: "零售场景", icon: "🛍️" },
  { id: "service", name: "智能服务", icon: "🎧" },
  { id: "analytics", name: "数据分析", icon: "📊" },
  { id: "legal", name: "法律合规", icon: "📑" },
  { id: "procurement", name: "采购管理", icon: "⚖️" },
  { id: "operations", name: "运营管理", icon: "📈" },
  { id: "platform", name: "平台集成", icon: "🔧" },
];

const applications = ref([
  {
    id: 1,
    name: "政务一网通办",
    description:
      "结合了政务大模型和智能能力平台，整合了39个企业数据库、500多个知识点和2300多条高频问题，实现政务服务的智能化升级",
    category: "government",
    icon: "🏛️",
    tags: ["AI+政务", "流程咨询", "准确高效", "数字化转型"],
  },
  {
    id: 2,
    name: "ChatBI",
    description:
      "支持对数据的查询、趋势分析和多维度对比，通过数字、表格、饼图、柱状图、折线图等多样化展示，让数据分析更直观",
    category: "office",
    icon: "📊",
    tags: ["行业大模型", "多场景集成", "数据可视化"],
  },
  {
    id: 3,
    name: "行程规划",
    description:
      "根据个人的兴趣、偏好和预算一键生成个性化行程，只需输入出发地、目的地、出行时间信息，即可获得完整的旅行方案",
    category: "travel",
    icon: "🗺️",
    tags: ["AI+旅游", "智能定制", "个性化行程"],
  },
  {
    id: 4,
    name: "简历生成",
    description:
      "专为求职者设计的简历生成助手，通过互动式的对话流程引导用户提供关键信息，简历生成助手将自动生成专业简历",
    category: "office",
    icon: "📄",
    tags: ["AI+求职", "互动引导", "职业特色凸显"],
  },
  {
    id: 5,
    name: "AI绘图助手",
    description:
      "根据用户输入的文字内容，生成合适的多样化风格的图片，支持艺术创作和设计创作，广告与营销场景应用广泛",
    category: "marketing",
    icon: "🎨",
    tags: ["创意效果", "多样化风格", "高效辅助"],
  },
  {
    id: 6,
    name: "邮件摘要生成",
    description:
      "基于大语言模型深度理解技术，自动解析邮件内容信息，结合上下文智能生成摘要内容，帮助信息快速获取",
    category: "office",
    icon: "📧",
    tags: ["AI+办公", "摘要生成", "安全保障"],
  },
  {
    id: 7,
    name: "TuringCoder",
    description:
      "基于大模型技术，具备跨库代码索引、代码解释和代码补全三大核心功能，实现自然语言代码的高效编写",
    category: "office",
    icon: "💻",
    tags: ["代码生成", "开发辅助工具", "降低开发门槛"],
  },
  {
    id: 8,
    name: "TAC Maas",
    description:
      "基于轻量化可组装的架构，承载AI算力资源配置资源调度能力，提供全栈AI技术，MaaS开箱即用的功能",
    category: "office",
    icon: "⚙️",
    tags: ["一站式AI开发", "丰富的AI模型", "轻量化研发", "研发运维一体"],
  },
  {
    id: 9,
    name: "智能客服",
    description:
      "预置多轮对话、情绪识别、人工接管插件，实现基于私域知识的7x24h自动闭环服务，提升客户满意度",
    category: "service",
    icon: "🎧",
    tags: ["多轮对话", "情绪识别", "人工接管", "7x24h服务", "私域知识"],
  },
  {
    id: 10,
    name: "智能问数",
    description:
      "连接企业数据库，通过自然语言生成SQL语句，自动产出可视化报表与经营分析，让数据查询更简单高效",
    category: "analytics",
    icon: "📊",
    tags: ["自然语言", "SQL生成", "可视化报表", "经营分析", "多数据库支持"],
  },
  {
    id: 11,
    name: "合同审核",
    description:
      "预置法律规则库，自动审查条款风险、缺失项检测、合规性校验及修订建议，降低法律风险95%",
    category: "legal",
    icon: "📑",
    tags: ["法律规则库", "风险检测", "合规校验", "修订建议", "智能审查"],
  },
  {
    id: 12,
    name: "招标助手",
    description:
      "支持标书智能生成、关键控标点抽取、对手方案比对及自动编写应标文件，提升招投标效率80%",
    category: "procurement",
    icon: "⚖️",
    tags: ["标书生成", "控标点抽取", "方案比对", "自动编写", "合规检查"],
  },
  {
    id: 13,
    name: "AI运营平台",
    description:
      "集成营销内容生成（AIGC）、私域文案策划、用户行为预测及活动自动化流转，提升运营效率300%",
    category: "operations",
    icon: "📈",
    tags: ["AIGC", "文案策划", "行为预测", "活动自动化", "多渠道集成"],
  },
  {
    id: 14,
    name: "Dify平台集成",
    description:
      "低代码AI应用构建平台，支持工作流编排、模型集成、API管理及团队协作，快速构建企业级AI应用",
    category: "platform",
    icon: "🔧",
    tags: ["低代码", "工作流编排", "模型集成", "API管理", "团队协作"],
  },
  {
    id: 15,
    name: "窗口坐席助手",
    description:
      "实时对话辅助、知识库快速搜索、响应建议、客户历史追踪及绩效分析，提升坐席工作效率200%",
    category: "service",
    icon: "💬",
    tags: ["实时辅助", "知识快搜", "响应建议", "历史追踪", "绩效分析"],
  },
  {
    id: 16,
    name: "项目管理",
    description: "项目管理、任务分配、项目进度监控、项目成本预算、项目风险管理，提升项目效率80%",
    category: "operations",
    icon: "📆",
    tags: ["项目管理", "任务分配", "项目进度监控", "项目成本预算", "项目风险管理"],
  },
]);

const filteredApplications = computed(() => {
  return applications.value.filter((app) => {
    const matchesSearch =
      !searchQuery.value ||
      app.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesCategory =
      selectedCategory.value === "all" || app.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

const selectCategory = (categoryId: string) => {
  selectedCategory.value = categoryId;
};

const handleStartApp = (appId: number) => {
  router.push(`/ai-tools/${appId}`);
};
</script>

<template>
  <div class="ai-tools-view">
    <div class="content-layout">
      <!-- 左侧边栏 -->
      <aside class="sidebar">
        <!-- 搜索框 -->
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input v-model="searchQuery" type="text" placeholder="搜索应用" class="search-input" />
        </div>

        <!-- 分类导航 -->
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

      <!-- 右侧应用列表 -->
      <main class="main-content">
        <div class="apps-grid">
          <div v-for="app in filteredApplications" :key="app.id" class="app-card">
            <div class="app-header">
              <div class="app-icon">{{ app.icon }}</div>
              <div class="app-info">
                <h3 class="app-name">{{ app.name }}</h3>
              </div>
            </div>

            <p class="app-description">{{ app.description }}</p>

            <div class="app-tags">
              <span v-for="tag in app.tags" :key="tag" class="app-tag">
                {{ tag }}
              </span>
            </div>

            <div class="app-actions">
              <button class="btn btn-primary" @click="handleStartApp(app.id)">立即体验</button>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-if="filteredApplications.length === 0" class="empty-state">
          <div class="empty-icon">🔍</div>
          <p class="empty-text">没有找到相关应用</p>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.ai-tools-view {
  padding: 32px 0;
  min-height: calc(100vh - var(--header-height) - 200px);
}

.page-header {
  margin-bottom: 32px;
  text-align: center;
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

.apps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.app-card {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 20px;
  transition: all var(--animation-duration-base) var(--ease-out);
  display: flex;
  flex-direction: column;
}

.app-card:hover {
  box-shadow: var(--shadow-2);
  border-color: var(--color-primary-bg-hover);
  transform: translateY(-2px);
}

.app-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.app-icon {
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

.app-info {
  flex: 1;
  min-width: 0;
}

.app-name {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.app-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.app-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.app-tag {
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 2px 8px;
  border-radius: var(--border-radius-xs);
}

.app-actions {
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

  .apps-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .ai-tools-view {
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
