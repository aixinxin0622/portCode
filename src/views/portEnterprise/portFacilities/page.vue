<script setup lang="ts">
import QuayBerth from './child/quayBerth.vue';
import StorageTank from './child/storageTank.vue';
import TrestlePipeline from './child/trestlePipeline.vue';
import WarehouseInfo from './child/warehouseInfo.vue';
import ShipInfo from './child/shipInfo.vue';
import { computed } from 'vue';
import { Key } from 'ant-design-vue/es/table/interface';
import { pageIndexStore } from '@/store/index';
const pageIndexStores = pageIndexStore();

const activeKey = computed(() => {
  return pageIndexStores.equiptitle;
});

const changeTab = (activeKey: Key) => {
  activeKey = activeKey.toString();
  pageIndexStores.seteEquipTitle(activeKey.toString());
};
</script>
<template>
  <div class="basic-info">
    <PageTitle :title="'港口设施'"></PageTitle>
    <a-tabs v-model:activeKey="activeKey" @change="changeTab">
      <a-tab-pane key="码头泊位" tab="码头泊位">
        <QuayBerth></QuayBerth>
      </a-tab-pane>
      <a-tab-pane key="储罐" tab="储罐">
        <StorageTank></StorageTank>
      </a-tab-pane>
      <a-tab-pane key="栈桥管道" tab="栈桥管道">
        <TrestlePipeline></TrestlePipeline>
      </a-tab-pane>
      <a-tab-pane key="仓库信息" tab="仓库信息">
        <WarehouseInfo></WarehouseInfo>
      </a-tab-pane>
      <a-tab-pane key="港作船舶信息" tab="港作船舶信息">
        <ShipInfo></ShipInfo>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<style lang="less" scoped>
.basic-info {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;

  :deep(.ant-tabs) {
    width: 100%;
    height: calc(100% - 44px);
    overflow: hidden;
  }

  :deep(.ant-tabs-nav) {
    width: 100%;
    height: 44px;
    padding: 0 3%;
    margin-bottom: 0;
    background-color: #fff;
  }

  :deep(.ant-tabs > .ant-tabs-nav::before) {
    border-bottom: none;
  }

  :deep(.ant-tabs-nav .ant-tabs-nav-operations) {
    display: none;
  }

  :deep(.ant-tabs-content-holder) {
    width: 100%;
    height: calc(100% - 44px);
    overflow: hidden;
    background: #f3f8ff;
  }

  :deep(.ant-tabs-content) {
    height: 100%;
  }
}
</style>
