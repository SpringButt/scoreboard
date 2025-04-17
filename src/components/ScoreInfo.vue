<script setup>
const props = defineProps({
  groupScore: {
    type: Number,
    required: true,
  },
  groupIndex: {
    type: Number,
    required: true,
  },
})
const groupName = defineModel('groupName')
const isEditing = ref(false)

const clearGroupScore = inject('clearGroupScore')

const editRef = ref(null)

onClickOutside(editRef, (event) => {
  if (isEditing.value) {
    isEditing.value = false
  }
})

</script>

<template>
  <div

    class="flex flex-col w-full text-center justify-center items-center text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
    <div @dblclick="isEditing = true"
      class="truncate w-full min-h-7 empty:border-b-[1px] border-red-400 cursor-pointer"
      v-if="!isEditing">
      {{ groupName }}
    </div>
    <div ref="editRef" v-else>
      <input
        type="text"
        v-model="groupName"
        class="border-1 focus-visible:outline-none border-gray-300 rounded-lg px-1  text-sm md:text-base lg:text-lg 2xl:text-xl w-full"
        @blur="isEditing = false"
        @keyup.enter="isEditing = false" />
    </div>
    <el-popconfirm title="是否清零分数?"
      confirm-button-text="清零"
      confirm-button-type='danger'
      hide-icon
      @confirm="() => clearGroupScore(groupIndex)"
      cancel-button-text="取消"
      :hide-after="0">
      <template #reference>
        <div class="cursor-pointer">{{ groupScore }} </div>
      </template>
    </el-popconfirm>
  </div>
</template>
