<script setup lang="ts">
import { ref, reactive } from 'vue';
import PageTitle from '@/components/pageTitle.vue';
import BasicInfo from './shipDetailChild/basicInfo.vue';
import ShipCargoQuota from './shipDetailChild/shipCargoQuota.vue';
import ShipRegisteredStatus from './shipDetailChild/shipRegisteredStatus.vue';
import BusinessTransport from './shipDetailChild/businessTransport.vue';
import OwnershipStatus from './shipDetailChild/ownershipStatus.vue';
import ShipInspectStatus from './shipDetailChild/shipInspectStatus.vue';
import ShipFileList from './shipDetailChild/shipFileList.vue';
import FilePage from '@/components/filePage.vue';

const title = ref('基本信息');

const curfile = ref();

const fileUrl = (file: string) => {
  if (file) {
    curfile.value.openBox();
  }
};

const obj = localStorage.getItem('ship');

const data = reactive<{ data: any }>({
  data: {},
});

if (obj?.length) {
  data.data = JSON.parse(obj);
}
</script>
<template>
  <PageTitle :title="'经营船舶'"></PageTitle>
  <div class="ship-detail">
    <div class="ship-detail-basic">
      <div class="basic-title">船舶信息</div>
      <div class="basic-introduce">
        <div class="basic-introduce-icon"></div>
        <div class="basic-introduce-name">
          <!-- 船名 -->
          <div class="basic-introduce-text">{{ data.data?.shipNameCn }}</div>
          <div class="basic-introduce-tips">
            <!-- 船籍港 -->
            <a-tag color="processing">{{ data.data?.shipRegistry }}</a-tag>
            <!-- 船舶类型 -->
            <a-tag color="success">{{ data.data?.shipType }}</a-tag>
          </div>
        </div>
      </div>
      <div class="basic-shipnum">
        <div class="shipnum-item">
          <div>{{ data.data?.shipGrt }}</div>
          <div>总吨</div>
        </div>
        <div class="shipnum-item">
          <div>{{ data.data?.shipQuotaDwt }}</div>
          <div>载重吨</div>
        </div>
        <div class="shipnum-item">
          <div>{{ data.data?.shipHostPower }}</div>
          <div>主机总功率</div>
        </div>
        <div class="shipnum-item">
          <div>{{ data.data?.shipCompletionDate }}</div>
          <div>建成日期</div>
        </div>
      </div>
    </div>
    <a-tabs v-model:activeKey="title">
      <a-tab-pane key="基本信息" tab="基本信息">
        <BasicInfo></BasicInfo>
      </a-tab-pane>
      <a-tab-pane key="船舶载货定额" tab="船舶载货定额">
        <ShipCargoQuota></ShipCargoQuota>
      </a-tab-pane>
      <a-tab-pane key="船舶登记情况" tab="船舶登记情况">
        <ShipRegisteredStatus></ShipRegisteredStatus>
      </a-tab-pane>
      <a-tab-pane key="国内船舶营业运输证" tab="国内船舶营业运输证">
        <BusinessTransport></BusinessTransport>
      </a-tab-pane>
      <a-tab-pane key="船舶产权情况" tab="船舶产权情况">
        <OwnershipStatus></OwnershipStatus>
      </a-tab-pane>
      <a-tab-pane key="船舶检验情况" tab="船舶检验情况">
        <ShipInspectStatus></ShipInspectStatus>
      </a-tab-pane>
      <a-tab-pane key="船舶附件列表" tab="船舶附件列表">
        <ShipFileList @fileurl="fileUrl"></ShipFileList>
      </a-tab-pane>
    </a-tabs>
  </div>
  <FilePage ref="curfile"></FilePage>
</template>
<style lang="less" scoped>
.ship-detail {
  width: 100%;
  height: calc(100% - 44px);
  overflow: hidden;
  background: #f3f8ff;

  .ship-detail-basic {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 94%;
    padding: 0 3%;
    padding-bottom: 16px;
    margin-top: 17px;
    background-color: #fff;

    .basic-title {
      width: 136px;
      height: 30px;
      margin-top: -9px;
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;
      color: #fff;
      text-align: center;
      background: url('@/assets/image/shipEnterprise/shipInfo_bg.png') no-repeat;
      background-size: 100% 100%;
    }

    .basic-introduce {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      margin-top: 12px;

      .basic-introduce-icon {
        width: 48px;
        height: 48px;
        margin-right: 8px;
        background: url('@/assets/image/shipEnterprise/shipIcon.png');
        background-size: 100% 100%;
      }

      .basic-introduce-text {
        font-size: 18px;
        font-weight: 500;
        color: #1d2129;
      }

      .basic-introduce-tips {
        display: flex;
        flex-direction: row;
        margin-top: 4px;
      }
    }

    .basic-shipnum {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      width: 94%;
      padding: 10px 3%;
      margin-top: 16px;
      background: #f3f9fe;

      .shipnum-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        div {
          font-size: 14px;
        }

        div:nth-child(1) {
          font-weight: 500;
          color: #042343;
        }

        div:nth-child(2) {
          margin-top: 5px;
          font-weight: 400;
          color: #86909c;
        }
      }
    }
  }

  :deep(.ant-tabs) {
    width: 100%;
    height: 76%;
    overflow: hidden;
  }

  :deep(.ant-tabs-nav) {
    width: 100%;
    height: 44px;
    padding: 0 3%;
    margin-bottom: 0;
    background-color: #fff;
  }

  :deep(.ant-tabs-nav::before) {
    border-bottom: none;
  }

  :deep(.ant-tabs-content-holder) {
    height: calc(100% - 44px);
    overflow: hidden;
  }

  :deep(.ant-tabs-content) {
    height: 100%;
  }

  :deep(.ant-tabs > .ant-tabs-nav .ant-tabs-nav-operations) {
    display: none;
  }

  .ant-tag {
    padding: 0 8px;
    font-size: 12px;
    font-weight: 400;
    border-color: #fff;
    border-radius: 20px;
  }

  .ant-tag-processing {
    color: #006ede;
    background: rgb(25 137 250 / 15%);
  }

  .ant-tag-success {
    color: #08b95d;
    background: rgb(7 193 96 / 15%);
  }
}
</style>
