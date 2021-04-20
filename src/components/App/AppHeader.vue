<template>
  <ElHeader class="flex p-0" height="50px">
    <div class="bg-red-500" style="width: 200px;"></div>
    <div class="flex-auto bg-red-500"></div>
  </ElHeader>
</template>
<script lang="ts">
import { onMounted } from 'vue'
import { ElHeader } from 'element-plus'

export default {
  name: 'AppHeader',
  components: {
    ElHeader
  },
  setup () {
    const a = 1
    onMounted(() => {
      console.log('header')
    })
    return {
      a
    }
  }
}
</script>
