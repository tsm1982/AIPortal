<script setup lang="ts">
import { RouterLink, RouterView, useRouter, useRoute } from "vue-router";
import { ref, computed } from "vue";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();

const isMenuOpen = ref(false);
const isUserMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value;
};

const handleLogout = () => {
  authStore.logout();
  isUserMenuOpen.value = false;
  router.push("/login");
};

const companyInfo = {
  name: "亚信科技",
  logo: "favicon.ico",
  subtitle: "AI应用门户",
};

const userDisplayName = computed(() => {
  return authStore.user?.username || "用户";
});

const isLoginPage = computed(() => {
  return route.name === "login";
});
</script>

<template>
  <div class="app-container" :class="{ 'is-login-page': isLoginPage }">
    <header v-if="!isLoginPage" class="header">
      <div class="container header-inner">
        <div class="logo-section">
          <RouterLink to="/" class="logo-link">
            <div class="logo-icon">
              <img :src="companyInfo.logo" alt="logo" width="40" height="40" />
            </div>
            <div class="logo-text-group">
              <span class="logo-text">{{ companyInfo.name }}</span>
              <span class="logo-subtitle">{{ companyInfo.subtitle }}</span>
            </div>
          </RouterLink>
        </div>

        <nav class="nav" :class="{ 'is-open': isMenuOpen }">
          <RouterLink to="/" class="nav-item" @click="toggleMenu">
            <span class="nav-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 22V12H15V22"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>首页</span>
          </RouterLink>
          <RouterLink to="/ai-tools" class="nav-item" @click="toggleMenu">
            <span class="nav-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <rect
                  x="14"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>
            </span>
            <span>应用市场</span>
          </RouterLink>
          <RouterLink to="/experience-center" class="nav-item" @click="toggleMenu">
            <span class="nav-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>体验中心</span>
          </RouterLink>
          <a href="http://124.221.144.17:1188" class="nav-item" target="_blank">
            <span class="nav-icon">
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
            </span>
            <span>AI运营平台</span>
          </a>
        </nav>

        <div class="header-actions">
          <template v-if="authStore.isAuthenticated">
            <div class="user-menu-wrapper">
              <button class="user-btn" @click="toggleUserMenu">
                <div class="user-avatar">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" />
                  </svg>
                </div>
                <span class="user-name">{{ userDisplayName }}</span>
                <svg
                  class="dropdown-icon"
                  :class="{ 'is-open': isUserMenuOpen }"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div class="user-dropdown" :class="{ 'is-open': isUserMenuOpen }">
                <div class="dropdown-header">
                  <div class="dropdown-avatar">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="dropdown-user-info">
                    <span class="dropdown-username">{{ userDisplayName }}</span>
                    <span class="dropdown-role">{{
                      authStore.user?.role === "administrator" ? "管理员" : "用户"
                    }}</span>
                  </div>
                </div>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item logout" @click="handleLogout">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 17L21 12L16 7"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 12H9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  退出登录
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <RouterLink to="/login" class="login-btn">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" />
              </svg>
              登录
            </RouterLink>
          </template>
          <div class="menu-toggle" @click="toggleMenu">
            <span class="menu-icon" :class="{ 'is-open': isMenuOpen }"></span>
          </div>
        </div>
      </div>
    </header>

    <main class="main">
      <RouterView />
    </main>

    <footer v-if="!isLoginPage" class="footer">
      <div class="container footer-inner">
        <div class="footer-content">
          <div class="footer-section">
            <h4 class="footer-title">产品功能</h4>
            <ul class="footer-links">
              <li><a href="#">应用中心</a></li>
              <li><a href="#">插件中心</a></li>
              <li><a href="#">知识中心</a></li>
              <li><a href="#">工作流配置</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4 class="footer-title">解决方案</h4>
            <ul class="footer-links">
              <li><a href="#">智能客服</a></li>
              <li><a href="#">智能问数</a></li>
              <li><a href="#">合同审核</a></li>
              <li><a href="#">招标助手</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4 class="footer-title">关于我们</h4>
            <ul class="footer-links">
              <li><a href="#">公司简介</a></li>
              <li><a href="#">联系我们</a></li>
              <li><a href="#">帮助中心</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4 class="footer-title">联系方式</h4>
            <p class="footer-contact">电话：010-82166666</p>
            <p class="footer-contact">tongsm@asiainfo.com</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="copyright">© 2026 亚信科技有限公司 版权所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-layout);
}

.app-container.is-login-page {
  background: var(--color-bg-base);
}

.header {
  background: var(--color-bg-base);
  border-bottom: 1px solid var(--color-border-secondary);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: var(--header-height);
}

.header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: opacity var(--animation-duration-base);
}

.logo-link:hover {
  opacity: 0.85;
}

.logo-icon {
  width: 32px;
  height: 32px;
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.logo-icon svg {
  width: 20px;
  height: 20px;
}

.logo-text-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logo-text {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.2;
}

.logo-subtitle {
  font-size: 12px;
  color: var(--color-text-tertiary);
  font-weight: 400;
  line-height: 1.2;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: var(--border-radius-base);
  transition: all var(--animation-duration-fast) var(--ease-out);
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
}

.nav-icon svg {
  width: 16px;
  height: 16px;
}

.nav-item:hover {
  color: var(--color-primary);
  background: var(--color-primary-bg);
}

.nav-item.router-link-active {
  color: var(--color-primary);
  background: var(--color-primary-bg);
  font-weight: 500;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.login-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: var(--border-radius-base);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--animation-duration-fast) var(--ease-out);
}

.login-btn svg {
  width: 16px;
  height: 16px;
}

.login-btn:hover {
  background: var(--color-primary-hover);
}

.user-menu-wrapper {
  position: relative;
}

.user-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px 4px 4px;
  background: var(--color-bg-layout);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  transition: all var(--animation-duration-fast);
}

.user-btn:hover {
  border-color: var(--color-primary-bg-hover);
  background: var(--color-bg-base);
}

.user-avatar {
  width: 28px;
  height: 28px;
  background: var(--color-primary-bg);
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.user-avatar svg {
  width: 16px;
  height: 16px;
}

.user-name {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-primary);
}

.dropdown-icon {
  width: 14px;
  height: 14px;
  color: var(--color-text-tertiary);
  transition: transform var(--animation-duration-fast);
}

.dropdown-icon.is-open {
  transform: rotate(180deg);
}

.user-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 200px;
  background: var(--color-bg-base);
  border: 1px solid var(--color-border-secondary);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all var(--animation-duration-fast) var(--ease-out);
  z-index: 100;
}

.user-dropdown.is-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
}

.dropdown-avatar {
  width: 36px;
  height: 36px;
  background: var(--color-primary-bg);
  border-radius: var(--border-radius-base);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.dropdown-avatar svg {
  width: 20px;
  height: 20px;
}

.dropdown-user-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dropdown-username {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
}

.dropdown-role {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.dropdown-divider {
  height: 1px;
  background: var(--color-border-split);
  margin: 0 8px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--animation-duration-fast);
}

.dropdown-item svg {
  width: 16px;
  height: 16px;
}

.dropdown-item:hover {
  background: var(--color-bg-layout);
  color: var(--color-text-primary);
}

.dropdown-item.logout {
  color: var(--color-error);
}

.dropdown-item.logout:hover {
  background: var(--color-error-bg);
  color: var(--color-error);
}

.menu-toggle {
  display: none;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  transition: background var(--animation-duration-fast);
}

.menu-toggle:hover {
  background: var(--color-bg-spotlight);
}

.menu-icon {
  width: 16px;
  height: 2px;
  background: var(--color-text-primary);
  position: relative;
  transition: all var(--animation-duration-fast);
}

.menu-icon::before,
.menu-icon::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 2px;
  background: var(--color-text-primary);
  left: 0;
  transition: all var(--animation-duration-fast);
}

.menu-icon::before {
  top: -5px;
}

.menu-icon::after {
  top: 5px;
}

.menu-icon.is-open {
  background: transparent;
}

.menu-icon.is-open::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-icon.is-open::after {
  top: 0;
  transform: rotate(-45deg);
}

.main {
  flex: 1;
}

.footer {
  background: var(--color-bg-base);
  border-top: 1px solid var(--color-border-secondary);
  padding: 40px 0 24px;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--animation-duration-fast);
}

.footer-links a:hover {
  color: var(--color-primary);
}

.footer-contact {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.8;
}

.footer-bottom {
  padding-top: 24px;
  border-top: 1px solid var(--color-border-split);
  text-align: center;
}

.copyright {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  margin: 0;
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background: var(--color-bg-base);
    flex-direction: column;
    padding: 16px;
    gap: 4px;
    border-bottom: 1px solid var(--color-border-secondary);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--animation-duration-base) var(--ease-out);
    z-index: 999;
    box-shadow: var(--shadow-2);
  }

  .nav.is-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-item {
    padding: 12px 16px;
  }

  .menu-toggle {
    display: flex;
  }

  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .login-btn {
    display: none;
  }
}

@media (max-width: 480px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
