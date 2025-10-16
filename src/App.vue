<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 上海申铁有限公司Logo和标题
const companyInfo = {
  name: '上海申铁',
  logo: 'data:image/png;base64,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',
  subtitle: 'AI应用门户'
}
</script>

<template>
  <div class="app-container">
    <header class="header">
      <div class="header-container">
        <div class="logo-container">
          <RouterLink to="/" class="logo-link">
            <img alt="上海申铁" class="logo" :src="companyInfo.logo" width="320" height="40" />
            <div class="logo-text-group">
              <span class="logo-text-main">{{ companyInfo.subtitle }}</span>
            </div>
          </RouterLink>
        </div>

        <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
          <RouterLink to="/" class="nav-link" @click="toggleMenu">首页</RouterLink>
          <RouterLink to="/ai-tools" class="nav-link" @click="toggleMenu">AI应用</RouterLink>
          <a href="https://bailian.aliyun.com/" class="nav-link" @click="toggleMenu">百炼平台</a>
          <!-- <RouterLink to="/models" class="nav-link" @click="toggleMenu">模型管理</RouterLink>
          <RouterLink to="/resources" class="nav-link" @click="toggleMenu">资源中心</RouterLink> -->
          <!-- <RouterLink to="/about" class="nav-link" @click="toggleMenu">关于我们</RouterLink> -->
        </nav>

        <div class="header-actions">
          <!-- <button class="search-btn" aria-label="搜索">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          <button class="theme-btn" aria-label="切换主题">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>-->
          <button class="login-btn">登录</button>
        </div>

        <div class="menu-toggle" @click="toggleMenu">
          <div class="bar" :class="{ 'active': isMenuOpen }"></div>
          <div class="bar" :class="{ 'active': isMenuOpen }"></div>
          <div class="bar" :class="{ 'active': isMenuOpen }"></div>
        </div>
      </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #1976d2;
  color: white;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  background-color: rgba(25, 118, 210, 0.95);
}

.header-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.footer-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 30px;
}

.footer-bottom-container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: opacity 0.3s;
}

.logo-link:hover {
  opacity: 0.8;
}

.logo {
  margin-right: 12px;
  filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5));
  transition: transform 0.3s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-text-group {
  display: flex;
  flex-direction: column;
}

.logo-text-main {
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
  letter-spacing: 0.5px;
}

.logo-text-sub {
  font-size: 0.9rem;
  color: #ffd700;
  font-weight: 500;
  margin-top: 2px;
}

.main-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  position: relative;
  padding: 8px 0;
  font-size: 1rem;
}

.nav-link:hover {
  color: #ffd700;
  transform: translateY(-1px);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ffd700 0%, #ffed4e 100%);
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active {
  color: #ffd700;
}

.nav-link.router-link-active::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-btn, .theme-btn {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.search-btn:hover, .theme-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #ffd700;
  transform: translateY(-1px);
}

.login-btn {
  background: linear-gradient(90deg, #ffd700 0%, #ffed4e 100%);
  color: #1976d2;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: 0.3s;
}

.bar.active:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.bar.active:nth-child(2) {
  opacity: 0;
}

.bar.active:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.main-content {
  flex: 1;
  background-color: #f8f9fa;
}

.footer {
  background-color: #0d47a1;
  color: white;
  padding: 40px 0 15px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.footer-logo img {
  margin-right: 12px;
}

.footer-logo-text h3 {
  font-size: 1.2rem;
  margin: 0;
  color: white;
}

.footer-logo-text p {
  font-size: 0.9rem;
  color: #ffd700;
  margin: 2px 0 0 0;
}

.footer-section h3 {
  font-size: 1.1rem;
  margin-bottom: 20px;
  color: #ffd700;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 12px;
}

.footer-section a {
  color: #e3f2fd;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #ffd700;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 20px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
}

.social-link:hover {
  background: #ffd700;
  color: #1976d2;
  transform: translateY(-2px);
}

.newsletter {
  margin-top: 20px;
}

.newsletter-form {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.newsletter-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9rem;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-btn {
  padding: 10px 20px;
  background: #ffd700;
  color: #1976d2;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.newsletter-btn:hover {
  background: #ffed4e;
  transform: translateY(-1px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 30px;
  padding-top: 15px;
}

.footer-bottom-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: #e3f2fd;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #ffd700;
}

/* PC端响应式设计 */
@media (max-width: 1200px) {
  .header-container,
  .footer-container,
  .footer-bottom-container {
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 15px;
    height: 60px;
  }

  .main-nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(25, 118, 210, 0.98);
    flex-direction: column;
    padding: 15px;
    transform: translateY(-100%);
    transition: transform 0.3s;
    gap: 1rem;
  }

  .main-nav.is-open {
    transform: translateY(0);
  }

  .menu-toggle {
    display: flex;
  }

  .header-actions {
    gap: 0.5rem;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 15px;
  }

  .footer-bottom-container {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 0 15px;
  }

  .footer-links {
    gap: 1rem;
  }
}
</style>
