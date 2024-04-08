<script setup lang="ts">
import { ref } from 'vue'
const refValue = ref(0)

function changeValueToRandom() {
  refValue.value = Math.floor(Math.random() * 100)
}

defineExpose({
  changeValueToRandom
})
</script>
<template>
  <div class="bordered">
    <h2>Component with exposed function</h2>
    <p>Value: {{ refValue }}</p>
  </div>
</template>
<style scoped>
.bordered {
  border: 1px solid black;
}
</style>
