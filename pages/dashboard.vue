<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <p>Email: {{ user.email }}</p>
    <p>Saldo: R$ {{ saldo }}</p>
    <el-input-number v-model="valor" />
    <el-button @click="depositar">Depositar</el-button>
    <el-button @click="sacar">Sacar</el-button>
  </div>
</template>

<script setup>
import { useUserStore } from '~/store/user'
import { io } from "socket.io-client"
const user = useUserStore()
const saldo = ref(100)
const valor = ref(0)
const socket = io("http://localhost:4000")

onMounted(() => {
  socket.on("saldo", (novoSaldo) => {
    saldo.value = novoSaldo
  })
})

function depositar() {
  socket.emit("deposito", valor.value)
}
function sacar() {
  socket.emit("saque", valor.value)
}
</script>