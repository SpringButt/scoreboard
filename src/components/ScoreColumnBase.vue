<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'transparent',
  },
})
</script>

<template>
  <div class="base z-0 border w-[min(15vw,200px)] aspect-3/1 rounded-[50%]"></div>
</template>

<style scoped>
.base {
  background-color: v-bind(color);
}
</style>
