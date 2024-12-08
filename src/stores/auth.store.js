import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
  }),
  actions: {
    setNewToken(newToken) {
      this.token = newToken;
      localStorage.setItem("token", newToken);
    },
    clearToken() {
      this.token = nulln;
      localStorage.removeItem("token");
    },
  },
});
