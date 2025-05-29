import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: ''
  }),
  actions: {
    login(email) {
      this.email = email
    }
  }
})