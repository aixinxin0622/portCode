<script setup lang="ts">
import { reactive } from 'vue';
import PageTitle from '@/components/pageTitle.vue';
const portEquip = localStorage.getItem('portEquip');

const data = reactive<{ data: any }>({
  data: {},
});

if (portEquip?.length) {
  data.data = JSON.parse(portEquip);
}
</script>
<template>
  <!-- 栈桥管道 -->
  <PageTitle :title="'栈桥管道'"></PageTitle>
  <div class="basicinfo">
    <div class="basicinfo-item-content">
      <div class="content-item">
        <div class="content-item-title">管道名称(编号)</div>
        <div class="content-item-content">{{ data.data.trestleName }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">对应码头泊位名称</div>
        <div class="content-item-content">
          <div class="content-item-content"></div>
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">长度(m)</div>
        <div class="content-item-content">{{ data.data.pipelineLength }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">管径(mm)</div>
        <div class="content-item-content">{{ data.data.trestleDiameter }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">下次检测日期</div>
        <div class="content-item-content">{{ data.data.nextCheck }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">输送介质</div>
        <div class="content-item-content">{{ data.data.mediumName }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');

.basicinfo {
  height: calc(100% - 44px);
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #f3f8ff;
}

.basicinfo::-webkit-scrollbar {
  display: none;
}

.basicinfo-item-content {
  margin-top: 24px;
  background-color: #fff;
}

.content-item {
  width: 94%;
  padding: 8px 3%;
  background-color: #fff;
}
</style>
