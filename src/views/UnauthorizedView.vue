<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/");
};

const goBack = () => {
  router.back();
};
</script>

<template>
  <div class="unauthorized-view">
    <div class="container">
      <div class="unauthorized-content">
        <div class="unauthorized-icon">🔒</div>
        <h1 class="unauthorized-title">权限不足</h1>
        <p class="unauthorized-message">
          抱歉，您当前没有权限访问该页面。<br />
          如需获取访问权限，请联系管理员。
        </p>
        <div class="unauthorized-actions">
          <button class="btn btn-primary" @click="goHome">返回首页</button>
          <button class="btn btn-secondary" @click="goBack">返回上一页</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.unauthorized-view {
  min-height: calc(100vh - var(--header-height) - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 16px;
}

.unauthorized-content {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  padding: 48px 32px;
  text-align: center;
}

.unauthorized-icon {
  font-size: 64px;
  margin-bottom: 24px;
}

.unauthorized-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 16px;
}

.unauthorized-message {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 32px;
}

.unauthorized-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn {
  padding: 10px 24px;
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

.btn-secondary {
  background: var(--color-bg-base);
  color: var(--color-text-secondary);
  border-color: var(--color-border-base);
}

.btn-secondary:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 480px) {
  .unauthorized-content {
    padding: 32px 20px;
  }

  .unauthorized-icon {
    font-size: 48px;
  }

  .unauthorized-title {
    font-size: 22px;
  }

  .unauthorized-actions {
    flex-direction: column;
  }
}
</style>
