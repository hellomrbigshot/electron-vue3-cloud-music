<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>
<script lang="ts">
import { onMounted } from 'vue'
import API from '@/api'

export default {
  name: 'Home',
  setup () {
    const list: string[] = []
    const getHotTop = async () => {
      try {
        const data = await API.getHotTop(20, 0)
        console.log(data)
      } catch (e) {
        console.log(e.message)
      }
    }
    onMounted(() => {
      getHotTop()
    })
    return {
      list,
      getHotTop
    }
  }
}
</script>
