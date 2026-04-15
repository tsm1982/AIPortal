<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { solutions, solutionCategories } from "@/data/solutions";

const router = useRouter();

const searchQuery = ref("");
const selectedCategory = ref("all");

const filteredSolutions = computed(() => {
  return solutions.filter((solution) => {
    const matchesSearch =
      !searchQuery.value ||
      solution.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesCategory =
      selectedCategory.value === "all" || solution.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

const selectCategory = (categoryId: string) => {
  selectedCategory.value = categoryId;
};

const handleViewDetail = (solutionId: string) => {
  router.push(`/solutions/${solutionId}`);
};
</script>

<template>
  <div class="solutions-view">
    <div class="content-layout">
      <aside class="sidebar">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input v-model="searchQuery" type="text" placeholder="搜索方案" class="search-input" />
        </div>

        <nav class="category-nav">
          <div
            v-for="category in solutionCategories"
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
        <div class="solutions-grid">
          <div v-for="solution in filteredSolutions" :key="solution.id" class="solution-card">
            <div class="solution-header">
              <div class="solution-icon">{{ solution.icon }}</div>
              <div class="solution-info">
                <h3 class="solution-name">{{ solution.name }}</h3>
                <span class="solution-category">{{ solution.category }}</span>
              </div>
            </div>

            <p class="solution-description">{{ solution.description }}</p>

            <div class="solution-tags">
              <span v-for="tag in solution.tags" :key="tag" class="solution-tag">
                {{ tag }}
              </span>
            </div>

            <div class="solution-actions">
              <button class="btn btn-primary" @click="handleViewDetail(solution.id)">
                查看详情
              </button>
            </div>
          </div>
        </div>

        <div v-if="filteredSolutions.length === 0" class="empty-state">
          <div class="empty-icon">🔍</div>
          <p class="empty-text">没有找到相关方案</p>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.solutions-view {
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

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.solution-card {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 20px;
  transition: all var(--animation-duration-base) var(--ease-out);
  display: flex;
  flex-direction: column;
}

.solution-card:hover {
  box-shadow: var(--shadow-2);
  border-color: var(--color-primary-bg-hover);
  transform: translateY(-2px);
}

.solution-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.solution-icon {
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

.solution-info {
  flex: 1;
  min-width: 0;
}

.solution-name {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.solution-category {
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 2px 8px;
  border-radius: var(--border-radius-xs);
}

.solution-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
  flex: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.solution-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.solution-tag {
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  background: var(--color-primary-bg);
  padding: 2px 8px;
  border-radius: var(--border-radius-xs);
}

.solution-actions {
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

  .solutions-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .solutions-view {
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
