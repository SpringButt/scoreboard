<script setup>
import { useSound } from '@vueuse/sound'
// @ts-ignore
import incrementSound from '@/assets/increment.mp3'
// @ts-ignore
import decrementSound from '@/assets/decrement.mp3'

const { play: playIncrementSound } = useSound(incrementSound)
const { play: playDecrementSound } = useSound(decrementSound)

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
    required: true,
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
  if (props.groupScore >= 20) {
    return
  }
  playIncrementSound()
  const score = props.groupScore + 1
  handleUpdateGroupScore(score)
}
const reduceScore = () => {
  if (props.groupScore <= 0) {
    return
  }
  playDecrementSound()
  const score = props.groupScore - 1
  handleUpdateGroupScore(score)
}

const handleScoreChange = useThrottleFn((isAdd) => {
  if (isAdd) {
    addScore()
  } else {
    reduceScore()
  }
}, 180)

</script>

<template>
  <div
    class="h-full w-full flex flex-col justify-between items-center relative pt-[2.2vw] pb-2">
    <div @click.left="() => handleScoreChange(true)"
      @click.right="() => handleScoreChange(false)"
      class="flex flex-col justify-center items-center">
      <ScoreColumnCircle
        v-for="index in 20"
        :style="{
          '--index': 20 - index,
        }"
        :index="20 - index"
        :groupScore="groupScore"
        :groupColor="groupColor" />
      <ScoreColumnBase class="mt-[-1.8vw]" :style="{
        backgroundColor: groupColor,
      }" />
    </div>
    <ScoreInfo :groupName="groupName"
      :groupIndex="index"
      @update:groupName="handleUpdateGroupName"
      :groupScore="groupScore" />
  </div>
</template>
