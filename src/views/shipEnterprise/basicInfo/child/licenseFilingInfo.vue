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
  <div v-if="data.data[0].dwdTSailWaterwayCertificate?.length" class="basicinfo">
    <div class="basicinfo-item-title">
      <div class="basicinfo-item-title-bulesquare"></div>
      <div class="basicinfo-item-title-name">许可备案信息</div>
    </div>
    <div class="basicinfo-item-content portequip-content">
      <div
        v-for="item in data.data[0].dwdTSailWaterwayCertificate"
        :key="item.companyId"
        class="license-filing-info-content-card"
      >
        <div class="card-item">
          <div class="zheng"></div>
          <div class="zheng-text">{{ item.waterwayLicenceNo }}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">经营期限：</div>
          <div class="card-item-con">{{ item.businessPeriod }}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">起止日期：</div>
          <div class="card-item-con">
            从{{ item.waterwayLicenceOpenDate }}至{{ item.waterwayLicenceDate }}
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-name">经营范围：</div>
          <div class="card-item-con">{{ item.businessDetail }}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">证书附件：</div>
          <div class="card-item-con filestyle">{{ item.waterwayAttachNewname }}</div>
        </div>
      </div>
    </div>
  </div>
  <BlankPage v-else></BlankPage>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');
</style>
