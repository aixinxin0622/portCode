<script setup lang="ts">
import { reactive } from 'vue';
import { basicInfo } from '@/apis';
import BlankPage from '@/components/blankPage.vue';
const list = localStorage.getItem('港口企业');
const data = reactive<{ data: basicInfo[] }>({
  data: [],
});
if (list?.length) {
  data.data = JSON.parse(list);
}

const itemClick = (obj: any) => {
  console.log(obj);
};
</script>
<template>
  <!-- 仓库信息 -->
  <div v-if="data.data[0].dwdTBaseWarehouse?.length" class="basicinfo">
    <div class="basicinfo-item-title">
      <div class="basicinfo-item-title-bulesquare"></div>
      <div class="basicinfo-item-title-name">仓库信息</div>
    </div>
    <div class="basicinfo-item-content portequip-content">
      <div
        v-for="item in data.data[0].dwdTBaseWarehouse"
        :key="item"
        class="license-filing-info-content-card"
        @click="itemClick(item)"
      >
        <div class="card-item">
          <div class="query-berth-icon"></div>
          <div class="query-berth-name">{{}}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">权属</div>
          <div class="card-item-con">{{}}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">从事港口危险货物作业</div>
          <div class="card-item-con">{{}}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">仓库容积</div>
          <div class="card-item-con">{{}}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">验收日期</div>
          <div class="card-item-con">{{}}</div>
        </div>
      </div>
    </div>
  </div>
  <BlankPage v-else></BlankPage>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');
</style>
