<template>
  <div class="login">
    <h2>Login</h2>
    <el-input v-model="email" placeholder="Email" />
    <el-input v-model="password" placeholder="Senha" type="password" />
    <el-button @click="login">Entrar</el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '~/store/user'
const router = useRouter()
const userStore = useUserStore()
const email = ref('')
const password = ref('')

function login() {
  if (email.value && password.value) {
    userStore.login(email.value)
    router.push('/dashboard')
  }
}
</script>