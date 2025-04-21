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
const itemClick = (obj: any) => {
  localStorage.setItem('portEquip', JSON.stringify(obj));
  router.push({ path: '/portEnterprise/portFacilities/trestlePipeline/detail' });
};
</script>
<template>
  <!-- 栈桥管道 -->
  <div v-if="data.data[0].dwdTBaseTrestle?.length" class="basicinfo">
    <div class="basicinfo-item-title">
      <div class="basicinfo-item-title-bulesquare"></div>
      <div class="basicinfo-item-title-name">栈桥管道</div>
    </div>
    <div class="basicinfo-item-content portequip-content">
      <div
        v-for="item in data.data[0].dwdTBaseTrestle"
        :key="item.trestleName"
        class="license-filing-info-content-card"
        @click="itemClick(item)"
      >
        <div class="card-item">
          <div class="query-berth-icon"></div>
          <div class="query-berth-name">
            {{ item.trestleName }}
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-name">输送介质</div>
          <div class="card-item-con">{{ item.mediumName }}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">下次检测日期</div>
          <div class="card-item-con">{{ item.nextCheck }}</div>
        </div>
      </div>
    </div>
  </div>
  <BlankPage v-else></BlankPage>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');
</style>
