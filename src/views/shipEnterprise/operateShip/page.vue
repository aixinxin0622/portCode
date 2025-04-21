<script setup lang="ts">
import { reactive } from 'vue';
import PageTitle from '@/components/pageTitle.vue';
import BlankPage from '@/components/blankPage.vue';
import { basicInfo } from '@/apis';
import { useRouter } from 'vue-router';
const router = useRouter();

const list = localStorage.getItem('航运企业');
const data = reactive<{ data: basicInfo[] }>({
  data: [],
});
if (list?.length) {
  data.data = JSON.parse(list);
}

const shipClick = (data: object) => {
  localStorage.setItem('ship', JSON.stringify(data));
  router.push({ path: '/shipEnterprise/operateShip/shipDetail' });
};
</script>
<template>
  <PageTitle :title="'经营船舶'"></PageTitle>
  <div class="operate-ship">
    <div v-if="data.data[0].dwdTSailYl?.length" class="top-con">
      <div v-for="item1 in data.data[0].dwdTSailYl" :key="item1" class="top-con-item">
        <div class="top-con-item-name">{{ item1.shipType }}</div>
        <div class="top-con-item-num">
          <div>{{ item1.num }}艘</div>
          <div>{{ item1.shipDwt }}吨</div>
        </div>
      </div>
    </div>
    <div v-if="data.data[0].dwdTSailShip?.length" class="operate-ship-list">
      <div
        v-for="item2 in data.data[0]?.dwdTSailShip"
        :key="item2.shipNameCn"
        class="list-item"
        @click="shipClick(item2)"
      >
        <div class="list-item-con">
          <div class="ship-icon"></div>
          <!-- 船名 -->
          <div class="ship-name">{{ item2.shipNameCn }}</div>
        </div>
        <div class="list-item-con">
          <!-- 船籍港 -->
          <a-tag color="processing">{{ item2.shipRegistry }}</a-tag>
          <!-- 船舶类型 -->
          <a-tag color="success">{{ item2.shipType }}</a-tag>
          <a-tag color="orange">载重吨：{{ item2.shipQuotaDwt }}</a-tag>
        </div>
        <div class="list-item-con">
          <div class="business-scope">经营范围：</div>
          <div class="business-scope-con">{{ item2.shipAirworthinessArea }}</div>
        </div>
      </div>
    </div>
    <BlankPage v-else></BlankPage>
  </div>
</template>
<style lang="less" scoped>
.operate-ship {
  width: 100%;
  height: calc(100% - 44px);
  overflow-x: hidden;
  overflow-y: scroll;
  background: #f3f8ff;

  .top-con {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 94%;
    padding: 12px;
    background-color: #fff;

    .top-con-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;
      padding: 4px 0;
      margin: 12px 1.6% 0;
      font-size: 14px;
      font-weight: 400;
      background: #f7f8fa;
      border-radius: 4px;

      .top-con-item-name {
        color: #4e5969;
      }

      .top-con-item-num {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 4px;

        div:nth-child(1) {
          color: #07c160;
        }

        div:nth-child(2) {
          margin-left: 8px;
          color: #ed6a0c;
        }
      }
    }
  }

  .operate-ship-list {
    width: 94%;
    margin-left: 3%;

    .list-item {
      display: flex;
      flex-direction: column;
      width: 94%;
      padding: 12px 3% 0;
      margin-top: 12px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px 0 rgb(100 101 102 / 6%);

      .list-item-con {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 12px;

        .ship-icon {
          width: 24px;
          height: 24px;
          background: url('@/assets/image/shipEnterprise/shipIcon.png') no-repeat;
          background-size: 100% 100%;
        }

        .ship-name {
          margin-left: 8px;
          font-size: 18px;
          font-weight: 500;
          color: #1d2129;
        }

        .business-scope {
          font-size: 14px;
          font-weight: 400;
          color: #042343;
        }

        .business-scope-con {
          font-size: 14px;
          font-weight: 400;
          color: #86909c;
        }
      }
    }
  }
}

.operate-ship::-webkit-scrollbar {
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

.ant-tag-orange {
  color: #e8670a;
  background: rgb(237 106 12 / 15%);
}
</style>
