<script setup lang="ts">
import { ref } from 'vue';

const showBox = ref(false);

const fileClick = () => {
  showBox.value = false;
};

function openBox() {
  showBox.value = true;
}

defineExpose({
  openBox,
});
</script>
<template>
  <div v-show="showBox" class="file-box"><img src="@/assets/image/file.png" @click="fileClick" /></div>
</template>
<style lang="less" scoped>
.file-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 375px;
  height: 812px;
  overflow: hidden;
  background-color: #000;

  img {
    width: 375px;
    height: 515px;
  }
}
</style>
