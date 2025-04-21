<script setup lang="ts">
import { reactive } from 'vue';
import PageTitle from '@/components/pageTitle.vue';
import BlankPage from '@/components/blankPage.vue';

export interface cerInfoListItem {
  certificateNameTypeName?: string;
  certificateNo?: string;
  certificateValid?: string;
}

const cerInfoList = localStorage.getItem('cerInfoList');

const data = reactive<{ data: cerInfoListItem[] }>({
  data: [],
});

if (cerInfoList?.length) {
  data.data = JSON.parse(cerInfoList);
}
</script>
<template>
  <div class="basicinfo">
    <PageTitle :title="'企业基本信息'"></PageTitle>
    <div v-if="data.data?.length" class="basicinfo-item-content">
      <div v-for="item in data.data" :key="item.certificateNo" class="license-filing-info-content-card">
        <div class="card-item">
          <div class="zheng"></div>
          <div class="zheng-text">{{ item.certificateNameTypeName }}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">证书编号：</div>
          <div class="card-item-con">{{ item.certificateNo }}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">证书有效期：</div>
          <div class="card-item-con">{{ item.certificateValid }}</div>
        </div>
      </div>
    </div>
    <BlankPage v-else></BlankPage>
  </div>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');

.basicinfo {
  background: #f3f8ff;
}

.basicinfo-item-content {
  height: calc(100% - 68px);
  padding: 0;
  margin-top: 24px;
  margin-left: 3%;
  overflow-x: hidden;
  overflow-y: scroll;
}

.basicinfo-item-content::-webkit-scrollbar {
  display: none;
}
</style>
