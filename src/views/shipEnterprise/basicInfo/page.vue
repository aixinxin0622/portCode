<script setup lang="ts">
import { ref } from 'vue';
import PageTitle from '@/components/pageTitle.vue';
import EnterpriseBasicInfo from './child/enterpriseBasicInfo.vue';
import LicenseFilingInfo from './child/licenseFilingInfo.vue';
import PractitionerInfo from './child/practitionerInfo.vue';
import InvestorInfo from './child/investorInfo.vue';
import SystemInfo from './child/systemInfo.vue';
const activeKey = ref('基本信息');
</script>

<template>
  <div class="basic-info">
    <PageTitle :title="'企业基本信息'"></PageTitle>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="基本信息" tab="基本信息">
        <EnterpriseBasicInfo></EnterpriseBasicInfo>
      </a-tab-pane>
      <a-tab-pane key="许可备案信息" tab="许可备案信息">
        <LicenseFilingInfo></LicenseFilingInfo>
      </a-tab-pane>
      <a-tab-pane key="从业人员信息" tab="从业人员信息">
        <PractitionerInfo></PractitionerInfo>
      </a-tab-pane>
      <a-tab-pane key="投资人信息" tab="投资人信息">
        <InvestorInfo></InvestorInfo>
      </a-tab-pane>
      <a-tab-pane key="体系/标准化" tab="体系/标准化">
        <SystemInfo></SystemInfo>
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
