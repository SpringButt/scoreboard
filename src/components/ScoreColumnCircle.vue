<script setup>
import { createTimeline } from 'animejs'

const before = ref()
const after = ref()
const main = ref()

const increment = () => {
  if (main.value) {
    const timeLine = createTimeline()
    timeLine.add(after.value, {
      '--after': '100%',
      duration: 500
    }, 0)
    timeLine.add(main.value, {
      '--main': '100%',
      duration: 1000
    }, 150)
    timeLine.add(before.value, {
      '--before': '100%',
      duration: 500
    }, 720)
  }
}
const decrement = () => {
  if (main.value) {
    const timeLine = createTimeline()
    timeLine.add(before.value, {
      '--before': '0%',
      duration: 500
    }, 720)
    timeLine.add(main.value, {
      '--main': '0%',
      duration: 1000
    }, 150)
    timeLine.add(after.value, {
      '--after': '0%',
      duration: 500
    }, 0)
  }
}

defineExpose({
  increment,
  decrement
})


</script>

<template>
  <div
    class="circle-container relative cursor-pointer h-[4.2vh] w-[min(10vw,150px)] ">
    <div class="before bg-white" ref="before"></div>
    <div class="circle h-full w-full bg-white" ref="main"></div>
    <div class="after" ref="after"></div>
  </div>
</template>
  

<style scoped>
.circle {
  position: relative;
  border-inline: 1px solid black;
  background: linear-gradient(to top, red, red var(--main, 0%), white var(--main, 0%), white);
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
  background: linear-gradient(to top, red, red var(--before, 0%), white var(--before, 0%), white);
  z-index: 3;
}

.after {
  pointer-events: none;
  bottom: 0;
  border-top: none;
  transform: translate(0, 50%);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: linear-gradient(to top, red, red var(--after, 0%), white var(--after, 0%), white);
  z-index: 1;
}

</style>
