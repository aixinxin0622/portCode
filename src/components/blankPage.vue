<script setup lang="ts"></script>
<template>
  <div class="blankpage">
    <div></div>
    <div>暂无数据</div>
  </div>
</template>
<style lang="less" scoped>
.blankpage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f3f8ff;

  div:nth-child(1) {
    width: 200px;
    height: 200px;
    background: url('@/assets/image/blank.png') no-repeat;
    background-size: 100% 100%;
  }

  div:nth-child(2) {
    font-size: 14px;
    font-weight: 400;
    color: rgb(0 0 0 / 65%);
  }
}
</style>
