<script setup>
import { invoke } from '@tauri-apps/api/core'

const greetMsg = ref('')
const name = ref('')

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke('greet', { name: name.value })
}
</script>

<template>
  <section class="h-full w-full grid grid-cols-6 justify-items-center">
    <!-- <ScoreColumn />
    <ScoreColumn />
    <ScoreColumn />
    <ScoreColumn />
    <ScoreColumn />
    <ScoreColumn /> -->
    <ScoreColumnCircle class="mt-44" />
    <!-- <div class="test"></div> -->
  </section>
</template>

<style scoped>
.test {
  margin-top: 100px;
  width: 200px;
  height: 200px;
  background-color: red;
  border: 1px solid black;
  clip-path: path('M 0 0 L 99 0 L 100 100 L 0 100 Z');
}

.test::before {
  content: '';
  position: absolute;
}
</style>
