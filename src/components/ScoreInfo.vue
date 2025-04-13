<script setup>
const props = defineProps({
  groupName: {
    type: String,
    default: '组名',
  },
  groupScore: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div
    class="flex flex-col w-full text-center justify-center items-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
    <div class="truncate">
      {{ groupName }}
    </div>
    <div>{{ groupScore }}分</div>
  </div>
</template>
