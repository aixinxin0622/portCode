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
  router.push({ path: '/portEnterprise/portFacilities/quayBerth/detail' });
};
</script>
<template>
  <!-- 码头泊位 -->
  <div v-if="data.data[0].dwdTBaseBerth?.length" class="basicinfo">
    <div class="basicinfo-item-title">
      <div class="basicinfo-item-title-bulesquare"></div>
      <div class="basicinfo-item-title-name">码头泊位</div>
    </div>
    <div class="basicinfo-item-content portequip-content">
      <div
        v-for="item in data.data[0].dwdTBaseBerth"
        :key="item.jettyName"
        class="license-filing-info-content-card"
        @click="itemClick(item)"
      >
        <div class="card-item">
          <div class="query-berth-icon"></div>
          <div class="query-berth-name">{{ item.jettyName }}</div>
        </div>
        <div class="card-item">
          <div class="card-item-name">所在港区</div>
          <div class="card-item-con">
            {{ item.typeName }}
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-name">主要用途</div>
          <div class="card-item-con">
            {{ item.mainUseName }}
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-name">靠泊能力</div>
          <div class="card-item-con">
            {{ item.berthingDesign }}
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
