<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const featuredApps = ref([
  {
    id: 1,
    name: "智能客服",
    description: "7x24h自动闭环服务，支持多轮对话、情绪识别和人工接管",
    icon: "🎧",
    category: "智能服务",
    tags: ["多轮对话", "情绪识别", "人工接管"],
  },
  {
    id: 2,
    name: "合同审核",
    description: "智能合同审查系统，自动检测风险、合规校验，降低法律风险",
    icon: "📑",
    category: "法律合规",
    tags: ["风险检测", "合规校验", "智能审查"],
  },
  {
    id: 3,
    name: "智能问数",
    description: "自然语言转SQL，自动生成可视化报表和经营分析",
    icon: "📊",
    category: "数据分析",
    tags: ["自然语言", "SQL生成", "可视化报表"],
  },
  {
    id: 4,
    name: "Dify平台集成",
    description: "低代码AI应用构建平台，快速构建企业级AI应用",
    icon: "🔧",
    category: "平台集成",
    tags: ["低代码", "工作流编排", "模型集成"],
  },
  {
    id: 5,
    name: "AI运营平台",
    description: "AIGC内容生成、用户行为预测及活动自动化流转",
    icon: "📈",
    category: "运营管理",
    tags: ["AIGC", "文案策划", "活动自动化"],
  },
  {
    id: 6,
    name: "招标助手",
    description: "智能标书生成、控标点抽取、方案比对及自动编写",
    icon: "⚖️",
    category: "采购管理",
    tags: ["标书生成", "方案比对", "自动编写"],
  },
]);

const features = ref([
  {
    icon: "📚",
    title: "知识库问答",
    description: "通过文档或已有问答对构建知识库，结合RAG技术生成精准回答",
  },
  {
    icon: "🌐",
    title: "网络爬虫",
    description: "内置网络爬虫功能，可抓取互联网公开数据并整合到知识库中",
  },
  {
    icon: "🔀",
    title: "工作流编排",
    description: "通过拖拽式界面设计复杂问答流程，方便用户构建复杂场景应用",
  },
  {
    icon: "⚙️",
    title: "数据预处理",
    description: "文本自动向量化、QA分割及多格式文档解析，减少人工干预",
  },
  {
    icon: "🔒",
    title: "私有化部署",
    description: "提供私有化部署方案，确保数据不经过第三方云端",
  },
  {
    icon: "🤖",
    title: "多模型支持",
    description: "兼容OpenAI格式，支持对接主流国内外大模型",
  },
]);

const handleStartApp = (appId: number) => {
  router.push(`/ai-tools/${appId}`);
};
</script>

<template>
  <div class="home-view">
    <section class="banner">
      <div class="container">
        <div class="banner-content">
          <div class="banner-badge">企业级AI解决方案</div>
          <h1 class="banner-title">企业级AI应用开发平台</h1>
          <p class="banner-subtitle">
            基于本地知识库的智能问答应用开发平台，集成最前沿大模型技术，助力企业智能化转型
          </p>
          <div class="banner-actions">
            <RouterLink to="/ai-tools" class="btn btn-primary btn-lg">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              开始使用
            </RouterLink>
            <a href="https://bailian.aliyun.com/" class="btn btn-default btn-lg" target="_blank">
              了解更多
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 3H21V9"
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
            </a>
          </div>
          <div class="banner-stats">
            <div class="stat-item">
              <span class="stat-value">100+</span>
              <span class="stat-label">AI应用</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">50+</span>
              <span class="stat-label">企业客户</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-value">99.9%</span>
              <span class="stat-label">服务可用性</span>
            </div>
          </div>
        </div>
        <div class="banner-illustration">
          <div class="illustration-card card-1">
            <div class="card-icon">🤖</div>
            <div class="card-content">
              <div class="card-title">智能客服</div>
              <div class="card-status online">在线</div>
            </div>
          </div>
          <div class="illustration-card card-2">
            <div class="card-icon">📊</div>
            <div class="card-content">
              <div class="card-title">智能问数</div>
              <div class="card-status">处理中...</div>
            </div>
          </div>
          <div class="illustration-card card-3">
            <div class="card-icon">💬</div>
            <div class="card-content">
              <div class="card-title">合同审核</div>
              <div class="card-status online">活跃</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">产品特点</h2>
          <p class="section-desc">全方位AI能力支撑，助力企业智能化升级</p>
        </div>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="apps-section">
      <div class="container">
        <div class="section-header">
          <div class="section-header-left">
            <h2 class="section-title">精选应用</h2>
            <p class="section-desc">探索丰富的AI应用场景</p>
          </div>
          <RouterLink to="/ai-tools" class="view-more">
            查看全部
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </RouterLink>
        </div>
        <div class="apps-grid">
          <div v-for="app in featuredApps" :key="app.id" class="app-card">
            <div class="app-header">
              <div class="app-icon">{{ app.icon }}</div>
              <div class="app-info">
                <h3 class="app-name">{{ app.name }}</h3>
                <span class="app-category">{{ app.category }}</span>
              </div>
            </div>
            <p class="app-desc">{{ app.description }}</p>
            <div class="app-tags">
              <span v-for="tag in app.tags" :key="tag" class="app-tag">{{ tag }}</span>
            </div>
            <button class="app-link" @click="handleStartApp(app.id)">
              立即使用
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  background: var(--color-bg-layout);
}

.banner {
  background: linear-gradient(135deg, #f0f5ff 0%, #e6f4ff 50%, #f0f5ff 100%);
  padding: 60px 0 80px;
  position: relative;
  overflow: hidden;
}

.banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(22, 119, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(22, 119, 255, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.banner .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  position: relative;
  z-index: 1;
}

.banner-content {
  flex: 1;
  max-width: 600px;
}

.banner-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background: var(--color-primary-bg);
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  font-weight: 500;
  border-radius: var(--border-radius-sm);
  margin-bottom: 16px;
}

.banner-title {
  font-size: 40px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.banner-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
}

.banner-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
}

.btn-lg {
  padding: 12px 24px;
  font-size: var(--font-size-base);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: var(--border-radius-base);
  font-weight: 500;
  text-decoration: none;
  transition: all var(--animation-duration-fast) var(--ease-out);
  border: 1px solid transparent;
  cursor: pointer;
}

.btn svg {
  width: 16px;
  height: 16px;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.3);
}

.btn-default {
  background: var(--color-bg-base);
  border-color: var(--color-border-base);
  color: var(--color-text-primary);
}

.btn-default:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.banner-stats {
  display: flex;
  align-items: center;
  gap: 24px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
}

.stat-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: var(--color-border-base);
}

.banner-illustration {
  flex: 1;
  max-width: 400px;
  height: 320px;
  position: relative;
}

.illustration-card {
  position: absolute;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: var(--shadow-2);
  animation: float 6s ease-in-out infinite;
}

.card-1 {
  top: 20px;
  left: 0;
  animation-delay: 0s;
}

.card-2 {
  top: 100px;
  right: 0;
  animation-delay: 2s;
}

.card-3 {
  bottom: 20px;
  left: 40px;
  animation-delay: 4s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.card-icon {
  width: 40px;
  height: 40px;
  background: var(--color-primary-bg);
  border-radius: var(--border-radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-title {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-primary);
}

.card-status {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.card-status.online {
  color: var(--color-success);
}

.features-section {
  padding: 80px 0;
  background: var(--color-bg-base);
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.section-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  text-align: center;
  padding: 32px 24px;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  transition: all var(--animation-duration-base) var(--ease-out);
}

.feature-card:hover {
  box-shadow: var(--shadow-2);
  border-color: var(--color-primary-bg-hover);
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.feature-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.feature-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.apps-section {
  padding: 80px 0;
}

.apps-section .section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: left;
  margin-bottom: 32px;
}

.section-header-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.view-more {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: var(--border-radius-base);
  transition: all var(--animation-duration-fast);
}

.view-more svg {
  width: 16px;
  height: 16px;
  transition: transform var(--animation-duration-fast);
}

.view-more:hover {
  background: var(--color-primary-bg);
}

.view-more:hover svg {
  transform: translateX(4px);
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.app-card {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 24px;
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
  width: 44px;
  height: 44px;
  background: var(--color-bg-layout);
  border-radius: var(--border-radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.app-info {
  flex: 1;
}

.app-name {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

.app-category {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  background: var(--color-bg-layout);
  padding: 2px 8px;
  border-radius: var(--border-radius-xs);
}

.app-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
  flex: 1;
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

.app-link {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-weight: 500;
  transition: all var(--animation-duration-fast);
}

.app-link svg {
  width: 14px;
  height: 14px;
  transition: transform var(--animation-duration-fast);
}

.app-link:hover svg {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .banner .container {
    flex-direction: column;
    text-align: center;
  }

  .banner-content {
    max-width: 100%;
  }

  .banner-actions {
    justify-content: center;
  }

  .banner-stats {
    justify-content: center;
  }

  .banner-illustration {
    display: none;
  }

  .features-grid,
  .apps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .banner {
    padding: 40px 0 60px;
  }

  .banner-title {
    font-size: 28px;
  }

  .banner-subtitle {
    font-size: var(--font-size-base);
  }

  .banner-actions {
    flex-direction: column;
  }

  .banner-stats {
    flex-wrap: wrap;
    gap: 16px;
  }

  .stat-divider {
    display: none;
  }

  .features-grid,
  .apps-grid {
    grid-template-columns: 1fr;
  }

  .apps-section .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
