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
<!-- 船舶产权情况 -->
<template>
  <div v-if="data.data[0].dwdTSailShipOwner?.length" class="ownership">
    <div v-for="item in data.data[0].dwdTSailShipOwner" :key="item.shipOwnerName" class="ownership-item">
      <div class="ownership-item-con1">
        <div class="item-con1-left">
          <div class="company"></div>
          <div>{{ item.shipOwnerName }}</div>
        </div>
        <div class="item-con1-right">
          <div>产权比例(%)：</div>
          <div>{{ item.shipOwnerProportion }}</div>
        </div>
      </div>
      <div class="ownership-item-con2">
        <div class="item-con2-item">
          <div>{{ item.shipOwnerCartNo }}</div>
          <div>所有权证书号</div>
        </div>
        <div class="item-con2-item">
          <div>{{ item.shipOwnerCartGetdate }}</div>
          <div>所有权取得日期</div>
        </div>
        <div class="item-con2-item">
          <div>{{ item.manager }}</div>
          <div>主要负责人</div>
        </div>
        <div class="item-con2-item">
          <div>{{ item.shipOwnerContact }}</div>
          <div>联系方式</div>
        </div>
      </div>
      <div class="ownership-item-con3">
        <div>家庭住址：</div>
        <div>{{ item.shipOwnerAddress }}</div>
      </div>
      <!-- <div class="ownership-item-con1">
        <div class="item-con1-left">
          <div class="person"></div>
          <div>邹益冉</div>
          <div>男</div>
        </div>
        <div class="item-con1-right">
          <div>产权比例(%)：</div>
          <div>100</div>
        </div>
      </div>
      <div class="ownership-item-con2">
        <div class="item-con2-item">
          <div>010315000067</div>
          <div>所有权证书号</div>
        </div>
        <div class="item-con2-item">
          <div>2023/01/02</div>
          <div>所有权取得日期</div>
        </div>
      </div>
      <div class="ownership-item-con3">
        <div>联系方式：</div>
        <div>13888888888</div>
      </div>
      <div class="ownership-item-con3">
        <div>家庭住址：</div>
        <div>湖南省浏阳市团结路8号2栋3单元101室</div>
      </div> -->
    </div>
  </div>
  <BlankPage v-else></BlankPage>
</template>
<style lang="less" scoped>
.ownership {
  width: 100%;
  height: calc(100% - 24px);
  margin-top: 24px;
  overflow-x: hidden;
  overflow-y: scroll;

  .ownership-item {
    width: 88%;
    padding: 12px 3%;
    margin: 0 3% 12px;
    background-color: #fff;

    .ownership-item-con1,
    .ownership-item-con2,
    .ownership-item-con3 {
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    .ownership-item-con1 {
      justify-content: space-between;

      .item-con1-left,
      .item-con1-right {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .item-con1-left {
        // .person {
        //   background: url('@/assets/image/shipEnterprise/tz-person.png') no-repeat;
        // }

        .company {
          background: url('@/assets/image/shipEnterprise/tz-company.png') no-repeat;
        }

        div:nth-child(1) {
          width: 32px;
          height: 32px;
          background-size: 100% 100%;
        }

        div:nth-child(2) {
          margin-left: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #1d2129;
        }

        div:nth-child(3) {
          margin-left: 8px;
          font-size: 14px;
          font-weight: 400;
          color: #86909c;
        }
      }

      .item-con1-right {
        div:nth-child(1) {
          font-size: 12px;
          font-weight: 400;
          color: #86909c;
        }

        div:nth-child(2) {
          font-size: 14px;
          font-weight: 500;
          color: #07c160;
        }
      }
    }

    .ownership-item-con2 {
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 12px;

      .item-con2-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 160px;
        height: 44px;
        margin-bottom: 10px;
        background: #f8fcff;

        div {
          font-size: 14px;
        }

        div:nth-child(1) {
          font-weight: 500;
          color: #1d2129;
        }

        div:nth-child(2) {
          font-weight: 400;
          color: #86909c;
        }
      }
    }

    .ownership-item-con3 {
      div {
        font-size: 14px;
        font-weight: 400;
      }

      div:nth-child(1) {
        flex-shrink: 0;
        color: #1d2129;
      }

      div:nth-child(2) {
        color: #4e5969;
      }
    }
  }
}

.ownership::-webkit-scrollbar {
  display: none;
}
</style>
