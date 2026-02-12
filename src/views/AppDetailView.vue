<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
const appId = computed(() => route.params.id as string);

const appData = ref<any>(null);

const applications = [
  {
    id: "1",
    name: "政务一网通办",
    description:
      "结合了政务大模型和智能能力平台，整合了39个企业数据库、500多个知识点和2300多条高频问题，实现政务服务的智能化升级",
    category: "政务场景",
    icon: "🏛️",
    tags: ["AI+政务", "流程咨询", "准确高效", "数字化转型"],
    features: [
      "智能问答：基于大模型的智能问答系统",
      "多轮对话：支持复杂场景的多轮对话",
      "知识库：内置丰富的政务知识库",
      "数据分析：自动生成数据分析报告",
    ],
  },
  {
    id: "2",
    name: "chatBI",
    description:
      "支持对数据的查询、趋势分析和多维度对比，通过数字、表格、饼图、柱状图、折线图等多样化展示，让数据分析更直观",
    category: "办公场景",
    icon: "📊",
    tags: ["行业大模型", "多场景集成", "数据可视化"],
    features: [
      "自然语言查询：用自然语言查询数据",
      "多维度分析：支持多维度数据对比",
      "可视化展示：丰富的图表展示方式",
      "实时更新：数据实时同步更新",
    ],
  },
  {
    id: "3",
    name: "行程规划",
    description:
      "根据个人的兴趣、偏好和预算一键生成个性化行程，只需输入出发地、目的地、出行时间信息，即可获得完整的旅行方案",
    category: "旅游场景",
    icon: "🗺️",
    tags: ["AI+旅游", "智能定制", "个性化行程"],
    features: [
      "智能推荐：基于用户偏好的智能推荐",
      "行程定制：一键生成个性化行程",
      "预算控制：智能控制旅行预算",
      "实时调整：支持行程实时调整",
    ],
  },
  {
    id: "4",
    name: "简历生成",
    description:
      "专为求职者设计的简历生成助手，通过互动式的对话流程引导用户提供关键信息，简历生成助手将自动生成专业简历",
    category: "办公场景",
    icon: "📄",
    tags: ["AI+求职", "互动引导", "职业特色凸显"],
    features: [
      "智能引导：互动式引导填写信息",
      "专业模板：多种专业简历模板",
      "自动优化：AI自动优化简历内容",
      "一键导出：支持多种格式导出",
    ],
  },
  {
    id: "5",
    name: "AI绘图助手",
    description:
      "根据用户输入的文字内容，生成合适的多样化风格的图片，支持艺术创作和设计创作，广告与营销场景应用广泛",
    category: "营销场景",
    icon: "🎨",
    tags: ["创意效果", "多样化风格", "高效辅助"],
    features: [
      "文生图：文字描述生成图片",
      "多风格：支持多种艺术风格",
      "高清输出：支持高清图片输出",
      "批量生成：支持批量图片生成",
    ],
  },
  {
    id: "6",
    name: "邮件摘要生成",
    description:
      "基于大语言模型深度理解技术，自动解析邮件内容信息，结合上下文智能生成摘要内容，帮助信息快速获取",
    category: "办公场景",
    icon: "📧",
    tags: ["AI+办公", "摘要生成", "安全保障"],
    features: [
      "智能摘要：自动生成邮件摘要",
      "优先级识别：智能识别邮件优先级",
      "批量处理：支持批量邮件处理",
      "安全加密：保障邮件内容安全",
    ],
  },
  {
    id: "7",
    name: "TuringCoder",
    description:
      "基于大模型技术，具备跨库代码索引、代码解释和代码补全三大核心功能，实现自然语言代码的高效编写",
    category: "办公场景",
    icon: "💻",
    tags: ["代码生成", "开发辅助工具", "降低开发门槛"],
    features: [
      "代码生成：自然语言生成代码",
      "代码解释：智能解释代码逻辑",
      "代码补全：智能代码补全",
      "多语言支持：支持多种编程语言",
    ],
  },
  {
    id: "8",
    name: "TAC Maas",
    description:
      "基于轻量化可组装的架构，承载AI算力资源配置资源调度能力，提供全栈AI技术，MaaS开箱即用的功能",
    category: "办公场景",
    icon: "⚙️",
    tags: ["一站式AI开发", "丰富的AI模型", "轻量化研发", "研发运维一体"],
    features: [
      "模型管理：统一管理AI模型",
      "算力调度：智能算力资源调度",
      "快速部署：一键部署AI应用",
      "监控运维：完善的监控运维体系",
    ],
  },
  {
    id: "9",
    name: "智能客服",
    description:
      "预置多轮对话、情绪识别、人工接管插件，实现基于私域知识的7x24h自动闭环服务，提升客户满意度",
    category: "智能服务",
    icon: "🎧",
    tags: ["多轮对话", "情绪识别", "人工接管", "7x24h服务", "私域知识"],
    features: [
      "多轮对话：支持复杂场景多轮对话",
      "情绪识别：智能识别客户情绪",
      "人工接管：支持人工客服接管",
      "知识库：内置企业知识库",
      "全天候服务：7x24小时在线服务",
    ],
  },
  {
    id: "10",
    name: "智能问数",
    description:
      "连接企业数据库，通过自然语言生成SQL语句，自动产出可视化报表与经营分析，让数据查询更简单高效",
    category: "数据分析",
    icon: "📊",
    tags: ["自然语言", "SQL生成", "可视化报表", "经营分析", "多数据库支持"],
    features: [
      "自然语言查询：用自然语言查询数据",
      "SQL生成：自动生成SQL语句",
      "可视化报表：丰富的图表展示",
      "实时分析：实时数据分析",
      "多数据源：支持多种数据源",
    ],
  },
  {
    id: "11",
    name: "合同审核",
    description:
      "预置法律规则库，自动审查条款风险、缺失项检测、合规性校验及修订建议，降低法律风险95%",
    category: "法律合规",
    icon: "📑",
    tags: ["法律规则库", "风险检测", "合规校验", "修订建议", "智能审查"],
    features: [
      "风险检测：自动检测合同风险",
      "合规校验：智能校验合同合规性",
      "缺失检测：检测合同缺失项",
      "修订建议：提供智能修订建议",
      "法律库：内置法律规则库",
    ],
  },
  {
    id: "12",
    name: "招标助手",
    description:
      "支持标书智能生成、关键控标点抽取、对手方案比对及自动编写应标文件，提升招投标效率80%",
    category: "采购管理",
    icon: "⚖️",
    tags: ["标书生成", "控标点抽取", "方案比对", "自动编写", "合规检查"],
    features: [
      "标书生成：智能生成投标文件",
      "控标点抽取：自动提取关键控标点",
      "方案比对：智能比对竞争对手方案",
      "自动编写：自动编写应标文件",
      "合规检查：智能检查文件合规性",
    ],
  },
  {
    id: "13",
    name: "AI运营平台",
    description:
      "集成营销内容生成（AIGC）、私域文案策划、用户行为预测及活动自动化流转，提升运营效率300%",
    category: "运营管理",
    icon: "📈",
    tags: ["AIGC", "文案策划", "行为预测", "活动自动化", "多渠道集成"],
    features: [
      "内容生成：AI自动生成营销内容",
      "文案策划：智能策划私域文案",
      "行为预测：预测用户行为",
      "活动自动化：活动流程自动化",
      "多渠道集成：支持多渠道发布",
    ],
  },
  {
    id: "14",
    name: "Dify平台集成",
    description:
      "低代码AI应用构建平台，支持工作流编排、模型集成、API管理及团队协作，快速构建企业级AI应用",
    category: "平台集成",
    icon: "🔧",
    tags: ["低代码", "工作流编排", "模型集成", "API管理", "团队协作"],
    features: [
      "低代码：可视化低代码开发",
      "工作流编排：拖拽式工作流编排",
      "模型集成：支持多种模型集成",
      "API管理：完善的API管理",
      "团队协作：支持团队协作开发",
    ],
  },
  {
    id: "15",
    name: "窗口坐席助手",
    description:
      "实时对话辅助、知识库快速搜索、响应建议、客户历史追踪及绩效分析，提升坐席工作效率200%",
    category: "智能服务",
    icon: "💬",
    tags: ["实时辅助", "知识快搜", "响应建议", "历史追踪", "绩效分析"],
    features: [
      "实时辅助：实时对话辅助",
      "知识快搜：快速搜索知识库",
      "响应建议：智能提供响应建议",
      "历史追踪：追踪客户历史记录",
      "绩效分析：坐席绩效智能分析",
    ],
  },
  {
    id: "16",
    name: "项目管理",
    description: "项目管理、任务分配、项目进度监控、项目成本预算、项目风险管理，提升项目效率80%",
    category: "运营管理",
    icon: "📆",
    tags: ["项目管理", "任务分配", "项目进度监控", "项目成本预算", "项目风险管理"],
    features: [
      "项目管理：项目管理",
      "任务分配：任务分配",
      "项目进度监控：项目进度监控",
      "项目成本预算：项目成本预算",
      "项目风险管理：项目风险管理",
    ],
  },
];

const currentApp = computed(() => {
  return applications.find((app) => app.id === appId.value) || null;
});

const isLoading = ref(false);

const handleStart = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    alert(`正在启动 ${currentApp.value?.name}...`);
  }, 1000);
};
</script>

<template>
  <div class="app-detail-view">
    <div class="container">
      <!-- 返回按钮 -->
      <div class="back-section">
        <RouterLink to="/ai-tools" class="back-link">
          <span class="back-icon">←</span>
          返回应用列表
        </RouterLink>
      </div>

      <!-- 应用不存在 -->
      <div v-if="!currentApp" class="not-found">
        <div class="not-found-icon">🔍</div>
        <h2 class="not-found-title">应用不存在</h2>
        <p class="not-found-desc">抱歉，您访问的应用不存在或已被删除</p>
        <RouterLink to="/ai-tools" class="btn btn-primary"> 返回应用列表 </RouterLink>
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

        <!-- 模拟功能界面 -->
        <div class="app-demo-section">
          <h2 class="section-title">功能演示</h2>
          <div class="demo-container">
            <div class="demo-header">
              <div class="demo-title">{{ currentApp.name }} - 功能演示</div>
              <div class="demo-status">
                <span class="status-dot"></span>
                <span class="status-text">系统就绪</span>
              </div>
            </div>
            <div class="demo-content">
              <div class="demo-message">
                <div class="message-icon">💬</div>
                <div class="message-text">
                  <div class="message-label">系统消息</div>
                  <div class="message-body">
                    欢迎使用 {{ currentApp.name }}！请输入您的问题或需求，我们将为您提供智能服务。
                  </div>
                </div>
              </div>
              <div class="demo-input-area">
                <input type="text" placeholder="请输入您的问题..." class="demo-input" />
                <button class="demo-send-btn">发送</button>
              </div>
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
