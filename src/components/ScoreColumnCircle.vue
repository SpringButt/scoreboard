<script setup>
const isActive = ref(false)
const handleClick = () => {
  isActive.value = !isActive.value
  console.log('clicked')
}
</script>

<template>
  <div
    @click="handleClick"
    :class="{
      active: isActive,
    }"
    class="circle cursor-pointer h-[4.2vh] w-[min(10vw,150px)]"></div>
</template>

<style scoped>
@property --size {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

.circle {
  --size: 0%;
  position: relative;
  border-inline: 1px solid black;
  background: linear-gradient(to top, red, red var(--size), transparent var(--size), transparent);
  z-index: 1;
  /* animation: decrement 0.5s forwards; */
  animation-delay: 0.2s;
}

.circle.active {
  --size: 0%;
  animation: increment 0.8s forwards;
  animation-delay: 0.2s;
}

@keyframes increment {
  to {
    --size: 100%;
  }
}
@keyframes decrement {
  to {
    --size: 0%;
  }
}

.circle::before,
.circle::after {
  --size: 100%;
  content: '';
  position: absolute;
  left: -1px;
  width: min(10vw, 150px);
  aspect-ratio: 5 / 1;
  z-index: 2;
  border-radius: 50%;
  border: 1px solid black;
  background: linear-gradient(to top, red, red var(--size), transparent var(--size), transparent);
  animation: decrement 1s forwards cubic-bezier(0.075, 0.82, 0.165, 1);
  background-clip: padding-box;
}
.circle::before {
  --size: 100%;
  top: 0;
  transform: translateY(-50%);
  /* animation-delay: -1s; */
}
.circle.active::before,
.circle.active::after {
  --size: 0%;
  animation: increment 0.4s forwards;
}
.circle.active::before {
  animation-delay: 1.9s;
}
.circle.active::after {
  /* animation-delay: 0s; */
}

.circle::after {
  pointer-events: none;
  bottom: 0;
  border-top: none;
  transform: translate(0, 50%);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
