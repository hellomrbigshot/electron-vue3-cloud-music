<template>
  <ElContainer>
    <ElAside width="200px">Aside</ElAside>
    <ElContainer>
      <ElMain>Main</ElMain>
    </ElContainer>
  </ElContainer>
</template>
<script lang="ts">
import { ElContainer, ElAside, ElMain } from 'element-plus'

export default {
  name: 'AppContent',
  components: {
    ElContainer,
    ElAside,
    ElMain
  }
}
</script>
