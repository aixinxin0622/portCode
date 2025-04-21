<script setup lang="ts">
import { reactive } from 'vue';
const obj = localStorage.getItem('ship');

const data = reactive<{ data: any }>({
  data: {},
});

if (obj?.length) {
  data.data = JSON.parse(obj);
}
</script>
<template>
  <!-- 船舶载货定额 -->
  <div class="basicinfo">
    <div class="basicinfo-item-content public-content">
      <div class="content-item">
        <div class="content-item-title">参考载货量(载重吨)</div>
        <div class="content-item-content">{{ data.data?.shipQuotaDwt }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">标箱(TEU)</div>
        <div class="content-item-content">{{ data.data?.shipQuotaTeu }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">立方米(m³)</div>
        <div class="content-item-content">{{ data.data?.shipQuotaM3 }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">客位</div>
        <div class="content-item-content">{{ data.data?.shipQuotaPerson }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">车位</div>
        <div class="content-item-content">{{ data.data?.shipQuotaCar }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');

.content-item {
  width: 94%;
  padding: 8px 3%;
  background-color: #fff;
}
</style>
