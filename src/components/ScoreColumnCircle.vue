<script setup>
import { createTimeline } from 'animejs'

const props = defineProps({
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



const before = ref()
const after = ref()
const main = ref()

const increment = () => {
  console.log('increment')
  if (main.value) {
    const timeLine = createTimeline({
      onComplete: () => {

      }
    })
    timeLine.add(after.value, {
      '--after': '100%',
      duration: 30
    }, 0)
    timeLine.add(main.value, {
      '--main': '100%',
      duration: 140
    }, 15)
    timeLine.add(before.value, {
      '--before': '100%',
      duration: 30
    }, 150)
  }
}
const decrement = () => {
  console.log('decrement')
  if (main.value) {
    const timeLine = createTimeline()
    timeLine.add(before.value, {
      '--before': '0%',
      duration: 30
    }, 0)
    timeLine.add(main.value, {
      '--main': '0%',
      duration: 140
    }, 15)
    timeLine.add(after.value, {
      '--after': '0%',
      duration: 30
    }, 150)
  }
}


watch(() => props.groupScore, (newVal, oldVal) => {
  if (newVal > oldVal) {
    if (newVal - 1 !== props.index) {
      return
    }
    increment()
  } else if (newVal < oldVal) {
    if (oldVal - 1 !== props.index) {
      return
    }
    console.log('change', newVal, oldVal, props.index)
    decrement()
  }

}, { immediate: false })

const isActive = ref(false)
onMounted(() => {
  if (props.groupScore > props.index) {
    isActive.value = true
  }
})
</script>

<template>
  <div
    :class="{
      isActive
    }"
    class="circle-container relative cursor-pointer h-[4.2vh] w-[min(10vw,150px)] ">
    <div class="before bg-white" ref="before"></div>
    <div class="circle h-full w-full bg-white" ref="main"></div>
    <div class="after" ref="after"></div>
  </div>
</template>
  

<style scoped>
.circle-container.isActive {
  --before: 100%;
  --after: 100%;
  --main: 100%;
}

.circle-container {
  --bg: v-bind(groupColor)
}
.circle {
  position: relative;
  border-inline: 1px solid black;
  background: linear-gradient(to top, var(--bg), var(--bg) var(--main, 0%), white var(--main, 0%), white);
  z-index: 2;
}

.before,
.after {
  position: absolute;
  left: 0;
  width: 100%;
  aspect-ratio: 5 / 1;
  z-index: 2;
  border-radius: 50%;
  border: 1px solid black;
}

.before {
  top: 0;
  transform: translateY(-50%);
  background: linear-gradient(to top, var(--bg), var(--bg) var(--before, 0%), white var(--before, 0%), white);
  z-index: 3;
}

.after {
  pointer-events: none;
  bottom: 0;
  border-top: none;
  transform: translate(0, 50%);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: linear-gradient(to top, var(--bg), var(--bg) var(--after, 0%), white var(--after, 0%), white);
  z-index: 1;
}

</style>
