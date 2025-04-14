<script setup>
import { invoke } from '@tauri-apps/api/core'


const groupList = useStorage('groupList', [
  {
    groupName: '组1',
    groupScore: 0,
  },
  {
    groupName: '组2',
    groupScore: 0,
  },
  {
    groupName: '组3',
    groupScore: 0,
  },
  {
    groupName: '组4',
    groupScore: 0,
  },
  {
    groupName: '组5',
    groupScore: 0,
  },
  {
    groupName: '组6',
    groupScore: 0,
  },
])

const handleUpdateGroupName = (name, index) => {
  console.log('update', name, index)
  groupList.value[index].groupName = name
}
const handleUpdateGroupScore = (score, index) => {
  console.log('update', score, index)
  groupList.value[index].groupScore = score
}
async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke('greet', { name: name.value })
}
</script>

<template>
  <section
    class="h-full w-full grid grid-cols-6 justify-items-center bg-white">
    <ScoreColumn v-for="(group, index) in groupList"
      :groupName="group.groupName"
      :groupScore="group.groupScore"
      @update:groupName="handleUpdateGroupName"
      @update:groupScore="handleUpdateGroupScore"
      :key="index"
      :index="index" />
  </section>
</template>


