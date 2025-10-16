<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('所有应用')

// 左侧分类导航
const categories = [
  { id: 'all', name: '所有应用', icon: '📱' },
  { id: 'government', name: '政务场景', icon: '🏛️' },
  { id: 'travel', name: '旅游场景', icon: '✈️' },
  { id: 'office', name: '办公场景', icon: '💼' },
  { id: 'marketing', name: '营销场景', icon: '📊' },
  { id: 'automotive', name: '汽车场景', icon: '🚗' },
  { id: 'retail', name: '零售场景', icon: '🛍️' },
  { id: 'medical', name: '医疗场景', icon: '🏥' }
]

// 智能体应用数据
const applications = ref([
  {
    id: 1,
    name: '政务一网通办',
    description: '结合了政务大模型和智能能力平台，整合了39个企业数据库、500多个知识点和2300多条高频...',
    category: 'government',
    icon: '🏛️',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['AI+政务', '流程咨询', '准确高效', '数字化转型'],
    features: ['立即体验']
  },
  {
    id: 2,
    name: 'chatBI',
    description: '支持对数据的查询、趋势分析和多维度对比，通过数字、表格、饼图、柱状图、折线图等多样化展...',
    category: 'office',
    icon: '📊',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['行业大模型', '多场景集成', '数据可视化'],
    features: ['立即体验']
  },
  {
    id: 3,
    name: '行程规划',
    description: '根据个人的兴趣、偏好和预算一键生成个性化行程，只需输入出发地、目的地、出行时间信息，...',
    category: 'travel',
    icon: '🗺️',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['AI+旅游', '智能定制', '个性化行程'],
    features: ['立即体验']
  },
  {
    id: 4,
    name: '简历生成',
    description: '专为智能发明设计的简历生成助手，通过互动式的对话流程引导等型师提供关键信息，简历生成助手将...',
    category: 'office',
    icon: '📄',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tags: ['AI+求职', '互动引导', '职业特色凸显'],
    features: ['立即体验']
  },
  {
    id: 5,
    name: 'AI绘图助手',
    description: '根据用户输入的文字内容，生成或合适的多样化风格的图片，支持艺术创作和设计创作，广告与营...',
    category: 'marketing',
    icon: '🎨',
    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    tags: ['创意效果', '多样化风格', '高效辅助'],
    features: ['立即体验']
  },
  {
    id: 6,
    name: '邮件摘要生成',
    description: '基于大语言模型深度理解技术，自动解析邮件内容信息，结合上下文智能生成摘要内容，帮助信息...',
    category: 'office',
    icon: '📧',
    color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    tags: ['AI+办公', '摘要生成', '安全保障'],
    features: ['立即体验']
  },
  {
    id: 7,
    name: 'TuringCoder',
    description: '基于大模型技术，具备跨库代码索引、代码解释和代码补全三大核心功能，实现自然语言代码的高效...',
    category: 'office',
    icon: '💻',
    color: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    tags: ['代码生成', '开发辅助工具', '降低开发门槛'],
    features: ['立即体验']
  },
  {
    id: 8,
    name: 'TAC Maas',
    description: '基于轻量化可组装的架构，承载AI算力资源配置资源调度能力，提供全栈AI技术，MaaS开箱即用的功...',
    category: 'office',
    icon: '⚙️',
    color: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    tags: ['一站式AI开发', '丰富的AI模型', '轻量化研发', '研发运维一体'],
    features: ['立即体验']
  }
])

// 筛选后的应用
const filteredApplications = computed(() => {
  return applications.value.filter(app => {
    const matchesSearch = !searchQuery.value ||
      app.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory = selectedCategory.value === '所有应用' ||
      app.category === categories.find(cat => cat.name === selectedCategory.value)?.id

    return matchesSearch && matchesCategory
  })
})

// 选择分类
const selectCategory = (categoryName: string) => {
  selectedCategory.value = categoryName
}
</script>

<template>
  <div class="ai-tools-view">
    <!-- 主要内容区域 -->
    <div class="main-content">
      <div class="container">
        <div class="content-wrapper">
          <!-- 左侧导航 -->
          <aside class="sidebar">
            <!-- 搜索框 -->
            <div class="search-section">
              <div class="search-input-wrapper">
                <span class="search-icon">🔍</span>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="搜索应用"
                  class="search-input"
                />
              </div>
            </div>

            <!-- 分类导航 -->
            <nav class="category-nav">
              <div
                v-for="category in categories"
                :key="category.id"
                @click="selectCategory(category.name)"
                :class="['category-item', { active: selectedCategory === category.name }]"
              >
                <span class="category-icon">{{ category.icon }}</span>
                <span class="category-name">{{ category.name }}</span>
              </div>
            </nav>
          </aside>

          <!-- 右侧应用列表 -->
          <main class="app-grid-section">
            <div class="apps-grid">
              <div
                v-for="app in filteredApplications"
                :key="app.id"
                class="app-card"
              >
                <div class="app-card-inner" :style="{ background: app.color }">
                  <div class="app-header">
                    <div class="app-icon">{{ app.icon }}</div>
                    <div class="app-title">{{ app.name }}</div>
                  </div>

                  <div class="app-description">
                    {{ app.description }}
                  </div>

                  <div class="app-tags">
                    <span
                      v-for="tag in app.tags"
                      :key="tag"
                      class="app-tag"
                    >
                      {{ tag }}
                    </span>
                  </div>

                  <div class="app-actions">
                    <button class="action-btn primary">
                      立即体验 >>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ai-tools-view {
  min-height: 100vh;
  background: #f5f7fa;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 顶部标题区域 */
.header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  font-size: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
}

.subtitle {
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  margin-left: 44px;
}

.auth-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.auth-btn {
  background: none;
  border: none;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.auth-btn:hover {
  background: #f3f4f6;
  color: #1f2937;
}

.divider {
  color: #d1d5db;
}

/* 主要内容区域 */
.main-content {
  padding: 24px 0;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 32px;
}

/* 左侧边栏 */
.sidebar {
  background: white;
  border-radius: 12px;
  padding: 24px;
  height: fit-content;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.search-section {
  margin-bottom: 24px;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  font-size: 16px;
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: #f9fafb;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.category-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #374151;
}

.category-item:hover {
  background: #f3f4f6;
}

.category-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.category-icon {
  font-size: 18px;
}

.category-name {
  font-size: 14px;
  font-weight: 500;
}

/* 应用网格 */
.app-grid-section {
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  gap: 24px;
}

.app-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.app-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.app-card-inner {
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  overflow: hidden;
}

.app-card-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 0;
}

.app-card-inner > * {
  position: relative;
  z-index: 1;
}

.app-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.app-icon {
  font-size: 32px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.app-title {
  font-size: 20px;
  font-weight: 600;
  color: white;
}

.app-description {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  flex: 1;
}

.app-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.app-tag {
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  font-size: 12px;
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.app-actions {
  display: flex;
  justify-content: flex-end;
}

.action-btn {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(4px);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .apps-grid {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .apps-grid {
    grid-template-columns: 1fr;
  }

  .header-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .subtitle {
    margin-left: 0;
  }
}
</style>
