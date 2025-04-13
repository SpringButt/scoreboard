<script setup>
defineProps({
  groupName: {
    type: String,
    default: '组名',
  },
  groupScore: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div class="h-full w-full flex flex-col justify-between items-center relative pt-[2.2vw] pb-2">
    <div class="flex flex-col justify-center items-center">
      <ScoreColumnCircle
        v-for="index in 20"
        :class="{
          active: index >= 20 - (groupScore - 1),
        }" />
      <ScoreColumnBase class="mt-[-1.8vw]" />
    </div>
    <ScoreInfo :groupName="groupName" :groupScore="groupScore" />
  </div>
</template>
