<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { applications, type Application } from "@/data/applications";

const router = useRouter();

const searchQuery = ref("");
const selectedCategory = ref("all");

const categories = [
  { id: "all", name: "全部应用", icon: "📱" },
  { id: "零售场景", name: "零售场景", icon: "🛍️" },
  { id: "办公场景", name: "办公场景", icon: "💼" },
  { id: "运营管理", name: "运营管理", icon: "📈" },
  { id: "汽车场景", name: "汽车场景", icon: "🚗" },
  { id: "数据分析", name: "数据分析", icon: "📊" },
  { id: "旅游场景", name: "旅游场景", icon: "✈️" },
  { id: "营销场景", name: "营销场景", icon: "📊" },
  { id: "智能服务", name: "智能服务", icon: "🎧" },
  { id: "法律合规", name: "法律合规", icon: "📑" },
  { id: "采购管理", name: "采购管理", icon: "⚖️" },
  { id: "平台集成", name: "平台集成", icon: "🔧" },
];

const applicationsList = ref<Application[]>(applications);

const filteredApplications = computed(() => {
  return applicationsList.value.filter((app) => {
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

const handleStartApp = (appId: string) => {
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
