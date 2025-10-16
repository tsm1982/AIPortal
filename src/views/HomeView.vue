<script setup lang="ts">
import { ref, onMounted } from 'vue'

const featuredTools = ref([
  {
    id: 1,
    name: '智能财务分析',
    description: '自动化财务报表分析，提升财务决策效率60%',
    category: '财务管理',
    icon: '💰',
    link: '/ai-tools',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    roi: '节省80%分析时间'
  },
  {
    id: 2,
    name: '合规智能审查',
    description: '智能合同审查系统，降低合规风险95%',
    category: '风险管控',
    icon: '📋',
    link: '/ai-tools',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    roi: '减少90%人工审查'
  },
  {
    id: 3,
    name: '项目智能评估',
    description: 'AI驱动的项目风险评估，提升决策准确性40%',
    category: '项目管理',
    icon: '📊',
    link: '/ai-tools',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    roi: '提升40%决策准确性'
  },
  {
    id: 4,
    name: '企业知识问答',
    description: '基于企业知识库的智能问答，提升查询效率300%',
    category: '知识管理',
    icon: '🤖',
    link: '/ai-tools',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    roi: '查询效率提升300%'
  }
])

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="home-view" :class="{ 'loaded': isVisible }">
    <!-- Featured Tools Section -->
    <section class="featured-tools">
      <div class="container">

        <br />
        <div class="tools-grid">
          <div class="tool-card" v-for="tool in featuredTools" :key="tool.id">
            <div class="tool-header" :style="{ background: tool.color }">
              <div class="tool-icon">{{ tool.icon }}</div>
              <div class="tool-category">{{ tool.category }}</div>
            </div>
            <div class="tool-content">
              <h3 class="tool-name">{{ tool.name }}</h3>
              <p class="tool-description">{{ tool.description }}</p>
              <div class="tool-roi" v-if="tool.roi">
                <span class="roi-badge">{{ tool.roi }}</span>
              </div>
              <div class="tool-actions">
                <RouterLink :to="tool.link" class="tool-btn">
                  立即使用
                  <span class="btn-arrow">→</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="section-footer" style="text-align: right;">
          <br />
          <RouterLink to="/ai-tools" class="btn btn-outline">
            查看全部应用
            <span class="btn-icon">📱</span>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 基础样式 */
.home-view {
  min-height: 100vh;
  background: #ffffff;
}

.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 80px 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-title-main {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-title-sub {
  font-size: 28px;
  font-weight: 600;
  color: #0d47a1;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 18px;
  color: #64748b;
  margin-bottom: 30px;
  line-height: 1.5;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
}

.hero-btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
  color: #1976d2;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(25, 118, 210, 0.2);
}

.hero-stats {
  display: flex;
  gap: 30px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
}

.hero-visual {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-dashboard {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 400px;
}

.dashboard-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
}

.dashboard-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
}

.dashboard-title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
}

.dashboard-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.metric-item {
  background: rgba(255, 255, 255, 0.7);
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(148, 163, 184, 0.1);
}

.metric-value {
  font-size: 20px;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 4px;
}

.metric-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}

.section {
  padding: 50px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 15px;
}

.section-subtitle {
  font-size: 18px;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.capability-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.capability-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.capability-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  margin-bottom: 20px;
}

.capability-title {
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 10px;
}

.capability-desc {
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 15px;
}

.capability-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.capability-features li {
  font-size: 13px;
  color: #475569;
  margin-bottom: 6px;
  padding-left: 16px;
  position: relative;
}

.capability-features li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: 600;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.tool-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.tool-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  color: inherit;
}

.tool-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.tool-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
}

.tool-category {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
}

.tool-content {
  flex: 1;
}

.tool-name {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
}

.tool-description {
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 12px;
}

.tool-roi {
  margin-bottom: 15px;
}

.roi-badge {
  display: inline-block;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.tool-actions {
  display: flex;
  gap: 10px;
}

.tool-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%);
  color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.tool-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  text-decoration: none;
  color: white;
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.tool-btn:hover .btn-arrow {
  transform: translateX(3px);
}

.app-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.app-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.app-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.app-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.app-info h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 5px 0;
}

.app-category {
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
}

.app-desc {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
}

.app-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.app-feature {
  background: #f1f5f9;
  color: #475569;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
}

.app-actions {
  display: flex;
  gap: 10px;
}

.app-btn {
  flex: 1;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
}

.cta-section {
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  color: white;
  text-align: center;
  padding: 50px 0;
}

.cta-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
}

.cta-subtitle {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Enterprise Features Section */
.enterprise-features {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.feature-item {
  background: white;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(25, 118, 210, 0.1);
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(25, 118, 210, 0.15);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
}

.feature-title {
  font-size: 24px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 15px;
  text-align: center;
}

.feature-description {
  font-size: 16px;
  color: #64748b;
  margin-bottom: 25px;
  text-align: center;
  line-height: 1.6;
}

.feature-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-details li {
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-size: 14px;
  color: #475569;
}

.detail-check {
  color: #10b981;
  font-weight: bold;
  margin-right: 10px;
  font-size: 16px;
}

.cta-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.cta-btn {
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-btn.primary {
  background: white;
  color: #1976d2;
}

.cta-btn.primary:hover {
  background: #f8fafc;
  color: #1565c0;
  text-decoration: none;
}

.cta-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
  text-decoration: none;
}

/* PC端优化 */
@media (min-width: 1200px) {
  .container {
    width: 100%;
    max-width: 100%;
    padding: 0 40px;
  }

  .hero {
    min-height: 700px;
    padding: 80px 0;
  }

  .hero-title-main {
    font-size: 56px;
  }

  .hero-title-sub {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 20px;
  }

  .section-title {
    font-size: 42px;
  }

  .apps-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .models-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .access-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}

@media (min-width: 1400px) {
  .hero-content {
    gap: 120px;
  }

  .hero-visual {
    height: 600px;
  }

  .ai-sphere {
    width: 350px;
    height: 350px;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .hero {
    min-height: 600px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-title-main {
    font-size: 36px;
  }

  .hero-title-sub {
    font-size: 24px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: 20px;
  }

  .apps-grid,
  .tools-grid,
  .models-grid,
  .access-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
