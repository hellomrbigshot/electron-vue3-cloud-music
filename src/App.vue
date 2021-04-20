<template>
  <ElContainer class="h-screen flex-col">
    <AppHeader/>
    <ElContainer>
      <AppAside/>
      <ElMain>
        <router-view></router-view>
      </ElMain>
    </ElContainer>
    <AppFooter/>
  </ElContainer>
</template>
<script lang="ts">
import { onMounted, defineAsyncComponent } from 'vue'
import {
  ElContainer,
  ElMain
} from 'element-plus'

interface ListItem {
  name: string;
}

export default {
  name: 'App',
  components: {
    ElContainer,
    ElMain,
    AppHeader: defineAsyncComponent(() => import('@/components/App/AppHeader.vue')),
    AppAside: defineAsyncComponent(() => import('@/components/App/AppAside.vue')),
    AppFooter: defineAsyncComponent(() => import('@/components/App/AppFooter.vue'))
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
.el-footer {
  background-color: #B3C0D1;
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
