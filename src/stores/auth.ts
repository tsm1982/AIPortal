import { ref, computed } from "vue";
import { defineStore } from "pinia";

/**
 * 用户认证状态管理 Store
 * 管理用户登录状态、用户信息和认证相关操作
 */
export const useAuthStore = defineStore("auth", () => {
  const user = ref<{ username: string; role: string } | null>(null);
  const token = ref<string | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const isAuthenticated = computed(() => !!user.value && !!token.value);

  /**
   * 模拟用户登录
   * @param username 用户名
   * @param password 密码
   * @returns 登录是否成功
   */
  async function login(username: string, password: string): Promise<boolean> {
    isLoading.value = true;
    error.value = null;

    await new Promise((resolve) => setTimeout(resolve, 800));

    if (username === "admin" && password === "admin123!@#") {
      user.value = {
        username: "admin",
        role: "administrator",
      };
      token.value = "mock-token-" + Date.now();
      localStorage.setItem("auth_token", token.value);
      localStorage.setItem("auth_user", JSON.stringify(user.value));
      isLoading.value = false;
      return true;
    } else {
      error.value = "用户名或密码错误";
      isLoading.value = false;
      return false;
    }
  }

  /**
   * 用户登出
   */
  function logout() {
    user.value = null;
    token.value = null;
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
  }

  /**
   * 从本地存储恢复登录状态
   */
  function restoreSession() {
    const savedToken = localStorage.getItem("auth_token");
    const savedUser = localStorage.getItem("auth_user");

    if (savedToken && savedUser) {
      try {
        token.value = savedToken;
        user.value = JSON.parse(savedUser);
      } catch {
        logout();
      }
    }
  }

  /**
   * 清除错误信息
   */
  function clearError() {
    error.value = null;
  }

  return {
    user,
    token,
    isLoading,
    error,
    isAuthenticated,
    login,
    logout,
    restoreSession,
    clearError,
  };
});
