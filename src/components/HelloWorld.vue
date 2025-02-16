<template>
  <div class="container">
    <a href="/dashboard" class="btn btn-primary add-list">Continue</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContinueButton'
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.continue-button {
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.continue-button:hover {
  background-color: #369f75;
}
</style>
