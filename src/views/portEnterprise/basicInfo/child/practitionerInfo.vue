<script setup lang="ts">
import { reactive } from 'vue';
import { basicInfo } from '@/apis';
import { useRouter } from 'vue-router';
import BlankPage from '@/components/blankPage.vue';
const router = useRouter();
const list = localStorage.getItem('港口企业');
const data = reactive<{ data: basicInfo[] }>({
  data: [],
});
if (list?.length) {
  data.data = JSON.parse(list);
}

const itemClick = (data: any) => {
  router.push({ path: '/portEnterprise/basicInfo/certificate' });
  localStorage.setItem('cerInfoList', JSON.stringify(data));
};
</script>
<template>
  <div v-if="data.data[0].dwdTBaseEmployeeInfo?.length" class="basicinfo">
    <div class="basicinfo-item-content">
      <div
        v-for="item in data.data[0]?.dwdTBaseEmployeeInfo"
        :key="item.employeeJobid"
        class="practitionerinfo-item"
      >
        <div class="item-icon"></div>
        <div class="item-content">
          <div class="content-info">
            <div class="content-info-basic">
              <div class="content-info-basic-name">{{ item.employeeName }}</div>
              <div class="content-info-basic-tel">{{ item.telephone }}</div>
            </div>
            <div class="content-info-basic">
              <div class="content-info-basic-gw">岗位：</div>
              <div class="content-info-basic-gwcon">{{ item.employeeJob }}</div>
            </div>
            <div class="content-info-basic">
              <div class="content-info-basic-gw">职务：</div>
              <div class="content-info-basic-gwcon">{{ item.duties }}</div>
            </div>
          </div>
          <div class="arrowright" @click="itemClick(item.cerInfoList)"></div>
        </div>
      </div>
    </div>
  </div>
  <BlankPage v-else></BlankPage>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');

.basicinfo-item-content {
  height: calc(100% - 24px);
  margin-top: 24px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.basicinfo-item-content::-webkit-scrollbar {
  display: none;
}

.practitionerinfo-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 94%;
  padding: 8px 3%;
  margin-bottom: 12px;
  background: #fff;
  border-radius: 8px;

  .item-icon {
    width: 24px;
    height: 24px;
    background: url('@/assets/image/portEnterprise/personnel.png') no-repeat;
    background-size: 100% 100%;
  }

  .arrowright {
    width: 16px;
    height: 16px;
    background: url('@/assets/image/portEnterprise/arrow.png') no-repeat;
    background-size: 100% 100%;
  }

  .item-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 295px;
    margin-left: 8px;

    .content-info {
      display: flex;
      flex-direction: column;

      .content-info-basic {
        display: flex;
        flex-direction: row;
        margin-left: 8px;
        font-size: 14px;

        .content-info-basic-name {
          font-weight: 500;
          color: #ed6a0c;
        }

        .content-info-basic-tel {
          margin-left: 4px;
          font-weight: 400;
          color: #4e5969;
        }

        .content-info-basic-gw {
          flex-shrink: 0;
          font-weight: 400;
          color: #86909c;
        }

        .content-info-basic-gwcon {
          font-weight: 400;
          color: #1d2129;
        }
      }

      .content-info-basic:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
}
</style>
