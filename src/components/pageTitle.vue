<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
defineProps({
  title: {
    type: String,
    default: '',
  },
});

const arrowLeftClick = () => {
  router.back();
};
</script>

<template>
  <div class="pagetitle">
    <a-row>
      <a-col :span="4">
        <div class="arrow-left" @click="arrowLeftClick"></div>
      </a-col>
      <a-col :span="16" class="titletext">{{ title }}</a-col>
      <a-col :span="4"></a-col>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
.pagetitle {
  position: relative;
  width: 100%;
  height: 44px;
  background-color: #fff;

  .ant-row,
  .ant-col {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .arrow-left {
    width: 20px;
    height: 20px;
    background: url('@/assets/image/arrow-left.png') no-repeat;
    background-size: 100% 100%;
  }

  .titletext {
    font-size: 17px;
    font-weight: 400;
    color: #323233;
  }
}
</style>
