<script setup>
const props = defineProps({
  groupScore: {
    type: Number,
    default: 0,
  },
})

const groupName = defineModel('groupName')
const isEditing = ref(false)

</script>

<template>
  <div
    @dblclick="isEditing = true"
    class="flex flex-col w-full text-center justify-center items-center text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
    <div class="truncate w-full" v-if="!isEditing">
      {{ groupName }}
    </div>
    <div v-else>
      <input
        type="text"
        v-model="groupName"
        class="border-1 border-gray-300 rounded-lg px-1  text-sm md:text-base lg:text-lg 2xl:text-xl w-full"
        @blur="isEditing = false"
        @keyup.enter="isEditing = false" />
    </div>

    <div>{{ groupScore }}分</div>
  </div>
</template>
