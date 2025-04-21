<script setup lang="ts">
import { reactive } from 'vue';
import { basicInfo } from '@/apis';
import BlankPage from '@/components/blankPage.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const list = localStorage.getItem('港口企业');
const data = reactive<{ data: basicInfo[] }>({
  data: [],
});
if (list?.length) {
  data.data = JSON.parse(list);
}
const authorityList: Record<string, string> = {
  '1': '自有',
  '2': '租赁',
};

const isBondedTankStatus: Record<string, string> = {
  '1': '是',
  '0': '否',
};
const itemClick = (obj: any) => {
  localStorage.setItem('portEquip', JSON.stringify(obj));
  router.push({ path: '/portEnterprise/portFacilities/storageTank/detail' });
};
</script>
<template>
  <!-- 储罐 -->
  <div v-if="data.data[0].dwdTBaseTankInfo?.length" class="basicinfo">
    <div class="basicinfo-item-title query-berth-title">
      <div class="basicinfo-item-title-bulesquare"></div>
      <div class="basicinfo-item-title-name">储罐</div>
    </div>
    <div class="basicinfo-item-content portequip-content">
      <div
        v-for="item in data.data[0].dwdTBaseTankInfo"
        :key="item.storageTankName"
        class="license-filing-info-content-card"
        @click="itemClick(item)"
      >
        <div class="card-item">
          <div class="query-berth-icon"></div>
          <div class="query-berth-name">
            {{ item.storageTankName }}
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-name">是否保税罐</div>
          <div class="card-item-con">
            {{ item.isBondedTank ? isBondedTankStatus[item.isBondedTank] : '' }}
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-name">权属</div>
          <div class="card-item-con">
            {{ item.authority ? authorityList[item.authority] : '' }}
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-name">储罐类型</div>
          <div class="card-item-con">
            {{ item.storageTanktypeName }}
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-name">储罐容量</div>
          <div class="card-item-con">
            {{ item.storageTankCapacity }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <BlankPage v-else></BlankPage>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');
</style>
