<script setup lang="ts">
import EnterpriseBasicInfo from './child/enterpriseBasicInfo.vue';
import SafaProductionInfo from './child/safaProductionInfo.vue';
import PractitionerInfo from './child/practitionerInfo.vue';
import { computed } from 'vue';
import { pageIndexStore } from '@/store/index';
import { Key } from 'ant-design-vue/es/table/interface';
const pageIndexStores = pageIndexStore();

const activeKey = computed(() => {
  return pageIndexStores.title;
});
const changeTab = (activeKey: Key) => {
  activeKey = activeKey.toString();
  pageIndexStores.setTitle(activeKey.toString());
};
</script>
<template>
  <div class="basic-info">
    <PageTitle :title="'企业基本信息'"></PageTitle>
    <a-tabs v-model:activeKey="activeKey" @change="changeTab">
      <a-tab-pane key="企业基本信息" tab="企业基本信息">
        <EnterpriseBasicInfo></EnterpriseBasicInfo>
      </a-tab-pane>
      <a-tab-pane key="安全生产信息" tab="安全生产信息">
        <SafaProductionInfo></SafaProductionInfo>
      </a-tab-pane>
      <a-tab-pane key="从业人员信息" tab="从业人员信息">
        <PractitionerInfo></PractitionerInfo>
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
// .basic-info {
//   width: 100%;
//   height: 812px;
//   overflow: hidden;

//   :deep(.ant-tabs) {
//     width: 100%;
//     height: 768px;
//     overflow: hidden;
//   }

//   :deep(.ant-tabs-nav) {
//     box-sizing: border-box;
//     width: 100%;
//     height: 44px;
//     padding: 0 3%;
//     margin-bottom: 0;
//     background-color: #fff;
//   }

//   :deep(.ant-tabs > .ant-tabs-nav::before) {
//     border-bottom: none;
//   }

//   :deep(.ant-tabs-nav .ant-tabs-nav-operations) {
//     display: none;
//   }

//   :deep(.ant-tabs-tabpane) {
//     width: 100%;
//     max-height: 724px;
//     overflow-x: hidden;
//     overflow-y: scroll;
//     background: #f3f8ff;
//   }

//   :deep(.ant-tabs .ant-tabs-tabpane::-webkit-scrollbar) {
//     display: none;
//   }
// }
</style>
