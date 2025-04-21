<script setup lang="ts">
import { reactive } from 'vue';
import { basicInfo } from '@/apis';
import BlankPage from '@/components/blankPage.vue';
const list = localStorage.getItem('航运企业');
const data = reactive<{ data: basicInfo[] }>({
  data: [],
});
if (list?.length) {
  data.data = JSON.parse(list);
}
</script>
<template>
  <div v-if="data.data[0].sailKeymanagers?.length" class="basicinfo">
    <div class="basicinfo-item-title">
      <div class="basicinfo-item-title-bulesquare"></div>
      <div class="basicinfo-item-title-name">从业人员信息</div>
    </div>
    <div class="basicinfo-item-content">
      <div v-for="item in data.data[0].sailKeymanagers" :key="item.companyId" class="content-item">
        <div class="content-item-icon"></div>
        <div class="content-item-title">{{ item.name }}</div>
        <div class="content-item-content">{{ item.jobType }}</div>
      </div>
    </div>
  </div>
  <BlankPage v-else></BlankPage>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');

.content-item-icon {
  width: 16px;
  height: 16px;
  background: url('@/assets/image/shipEnterprise/personnel.png') no-repeat;
  background-size: 100% 100%;
}

.basicinfo-item-content {
  width: 100%;
  height: 92%;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}

.basicinfo-item-content::-webkit-scrollbar {
  display: none;
}

.content-item {
  align-items: center;
  width: 94%;
  padding: 8px 3%;
  background-color: #fff;
}
</style>
