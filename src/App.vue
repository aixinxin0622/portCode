<script setup lang="ts">
// import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { StyleProvider, legacyLogicalPropertiesTransformer } from 'ant-design-vue';
</script>

<template>
  <!-- <a-config-provider :locale="zhCN"> -->
  <StyleProvider hash-priority="high" :transformers="[legacyLogicalPropertiesTransformer]">
    <RouterView></RouterView>
  </StyleProvider>
  <!-- </a-config-provider> -->
</template>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
