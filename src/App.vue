<template>
  <ElContainer class="h-screen">
    <ElHeader>Header</ElHeader>
    <ElContainer>
      <ElAside width="200px">Aside</ElAside>
      <ElContainer>
        <ElMain>Main</ElMain>
        <ElFooter>Footer</ElFooter>
      </ElContainer>
    </ElContainer>
  </ElContainer>
</template>
<script lang="ts">
import { onMounted } from 'vue'
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElAside
} from 'element-plus'

interface ListItem {
  name: string;
}

export default {
  components: {
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
    ElAside
  },
  setup () {
    const list: ListItem[] = []
    onMounted(() => {
      console.log('hello world')
    })
    return {
      list
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  height: 100vh;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
