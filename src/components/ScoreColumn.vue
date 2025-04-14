<script setup>
const props = defineProps({
  groupName: {
    type: String,
    required: true,
  },
  groupScore: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  groupColor: {
    type: String,
    default: 'red',
  }
})

const emits = defineEmits(['update:groupName', 'update:groupScore'])

const handleUpdateGroupName = (name) => {
  console.log(name)
  emits('update:groupName', name, props.index)
}
const handleUpdateGroupScore = (score) => {
  emits('update:groupScore', score, props.index)
}
const addScore = () => {
  const score = props.groupScore + 1
  handleUpdateGroupScore(score)
}
const reduceScore = () => {
  const score = props.groupScore - 1
  handleUpdateGroupScore(score)
}

</script>

<template>
  <div
    class="h-full w-full flex flex-col justify-between items-center relative pt-[2.2vw] pb-2">
    <div class="flex flex-col justify-center items-center">
      <ScoreColumnCircle
        v-for="index in 20"
        :class="{
          active: index >= 20 - (groupScore - 1),
        }" />
      <ScoreColumnBase class="mt-[-1.8vw]" />
    </div>
    <ScoreInfo :groupName="groupName"
      @update:groupName="handleUpdateGroupName"
      :groupScore="groupScore" />
  </div>
</template>
