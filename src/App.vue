<script setup>
import { nanoid } from 'nanoid'
const groupList = useStorage('groupList', [
  {
    groupName: '组1',
    groupScore: 0,
    groupColor: '#f17172'
  },
  {
    groupName: '组2',
    groupScore: 0,
    groupColor: '#fad354'
  },
  {
    groupName: '组3',
    groupScore: 0,
    groupColor: '#86dcf4'
  },
  {
    groupName: '组4',
    groupScore: 0,
    groupColor: '#b0d097'
  },
  {
    groupName: '组5',
    groupScore: 0,
    groupColor: '#ffbdb9'
  },
  {
    groupName: '组6',
    groupScore: 0,
    groupColor: '#d495e0'
  },
])

provide('clearGroupScore', (index) => {
  groupList.value[index].groupScore = 0
  // window.location.reload()
  console.log(keys.value)
  keys.value[index] = nanoid()
  console.log(keys.value)
})

const handleUpdateGroupName = (name, index) => {
  groupList.value[index].groupName = name
}
const handleUpdateGroupScore = (score, index) => {
  groupList.value[index].groupScore = score
}

const keys = ref([])


onMounted(() => {
  keys.value = groupList.value.map(() => nanoid())
  console.log(keys.value)
  useEventListener(document.documentElement, 'contextmenu', (e) => {
    e.preventDefault()
    console.log('contextmenu')
  })
  useEventListener(window, 'keydown', async (e) => {
    // e.preventDefault()
    console.log(e)
    if (e.key === 'F11') {
      e.preventDefault()
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      } else {
        await document.documentElement.requestFullscreen()
      }
    }
  })
})
</script>

<template>
  <section
    class="h-full w-full grid grid-cols-6 justify-items-center bg-white">
    <ScoreColumn v-for="(group, index) in groupList"
      :groupName="group.groupName"
      :groupScore="group.groupScore"
      :groupColor="group.groupColor"
      @update:groupName="handleUpdateGroupName"
      @update:groupScore="handleUpdateGroupScore"
      :key="keys[index]"
      :index="index" />
  </section>
</template>


