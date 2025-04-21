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
  <div v-if="data.data[0].sailInvestor?.length" class="basicinfo">
    <div class="basicinfo-item-title">
      <div class="basicinfo-item-title-bulesquare"></div>
      <div class="basicinfo-item-title-name">投资人信息</div>
    </div>
    <div class="basicinfo-item-content">
      <div v-for="item in data.data[0].sailInvestor" :key="item.companyId" class="investorinfo-item">
        <div class="investorinfo-item-left">
          <div class="tz-icon tz-icon-company"></div>
          <div class="tz-text">
            <div>{{ item.nameComName }}</div>
            <div>{{ item.investorType }}</div>
          </div>
        </div>
        <div class="investorinfo-item-right">
          <div class="tz-czbl">出资比例：</div>
          <div class="tz-czbl-num">
            {{ item.investmentRatio ? parseFloat(item.investmentRatio).toFixed(2) + '%' : '' }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <BlankPage v-else></BlankPage>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');

.basicinfo-item-content {
  height: 92%;
  overflow-x: hidden;
  overflow-y: scroll;
}

.basicinfo-item-content::-webkit-scrollbar {
  display: none;
}

.investorinfo-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 94%;
  padding: 8px 3%;
  margin-bottom: 12px;
  background: #fff;
  border-radius: 8px;

  .investorinfo-item-left,
  .investorinfo-item-right {
    display: flex;
    flex-direction: row;
  }

  .investorinfo-item-left {
    // .tz-icon-person {
    //   background: url('@/assets/image/shipEnterprise/tz-person.png') no-repeat;
    // }

    .tz-icon-company {
      background: url('@/assets/image/shipEnterprise/tz-company.png') no-repeat;
    }

    .tz-icon {
      width: 40px;
      height: 40px;
      background-size: 100% 100%;
    }

    .tz-text {
      margin-left: 12px;
      font-size: 14px;
      text-wrap: wrap;

      div:nth-child(1) {
        flex-shrink: 0;
        font-weight: 500;
        color: #1d2129;
      }

      div:nth-child(2) {
        font-weight: 400;
        color: #4e5969;
      }
    }
  }

  .investorinfo-item-right {
    margin: 0 8px;

    .tz-czbl {
      flex-shrink: 0;
      font-size: 12px;
      font-weight: 400;
      color: #86909c;
    }

    .tz-czbl-num {
      flex-shrink: 0;
      font-size: 14px;
      font-weight: 500;
      color: #07c160;
    }
  }
}
</style>
