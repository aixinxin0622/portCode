<script setup lang="ts">
import PageTitle from '@/components/pageTitle.vue';
import { ref } from 'vue';
const num = ref(1);
const itemClick = (val: number) => {
  num.value = val;
};
</script>
<template>
  <div class="personnel-approval">
    <PageTitle :title="'企业人审批'"></PageTitle>
    <div class="personnel-approval-con">
      <div class="con-status">
        <div :class="['con-status-item', num == 1 ? 'active1' : '']" @click="itemClick(1)">
          <div class="con-status-item-left">
            <div>待审批</div>
            <div class="orange">2</div>
          </div>
          <div class="con-status-item-right dsp"></div>
        </div>
        <div :class="['con-status-item', num == 2 ? 'active2' : '']" @click="itemClick(2)">
          <div class="con-status-item-left">
            <div>已审批</div>
            <div class="green">4</div>
          </div>
          <div class="con-status-item-right ysp"></div>
        </div>
      </div>
      <div v-if="num == 1" class="con-list">
        <div class="con-list-item">
          <div class="con-list-item-title">
            <div></div>
            <div>申请人员信息</div>
          </div>
          <div class="con-list-item-con">
            <div>姓名</div>
            <div>邱运昊</div>
          </div>
          <div class="con-list-item-con">
            <div>身份证</div>
            <div>330900198005068818</div>
          </div>
          <div class="con-list-item-con">
            <div>手机号</div>
            <div>13888888888</div>
          </div>
          <div class="con-list-item-button">
            <a-button danger>拒绝</a-button>
            <a-button type="primary">通过</a-button>
          </div>
        </div>
        <div class="con-list-item">
          <div class="con-list-item-title">
            <div></div>
            <div>申请人员信息</div>
          </div>
          <div class="con-list-item-con">
            <div>姓名</div>
            <div>廉淑君</div>
          </div>
          <div class="con-list-item-con">
            <div>身份证</div>
            <div>330900198005068818</div>
          </div>
          <div class="con-list-item-con">
            <div>手机号</div>
            <div>13888888888</div>
          </div>
          <div class="con-list-item-button">
            <a-button danger>拒绝</a-button>
            <a-button type="primary">通过</a-button>
          </div>
        </div>
      </div>
      <div v-if="num == 2" class="con-list">
        <div class="con-list-item">
          <div class="con-list-item-title">
            <div></div>
            <div>申请人员信息</div>
          </div>
          <div class="con-list-item-con">
            <div>姓名</div>
            <div>已审批</div>
          </div>
          <div class="con-list-item-con">
            <div>身份证</div>
            <div>330900198005068818</div>
          </div>
          <div class="con-list-item-con">
            <div>手机号</div>
            <div>13888888888</div>
          </div>
          <div class="con-list-item-button">
            <a-button danger>拒绝</a-button>
            <a-button type="primary">通过</a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.personnel-approval {
  width: 100%;
  height: 812px;
  overflow: hidden;

  .personnel-approval-con {
    width: 94%;
    height: 768px;
    padding: 0 3%;
    overflow: hidden;
    background: #f3f8ff;

    .con-status {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 12px;

      .con-status-item {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 169px;
        height: 68px;
        padding: 0 16px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px 0 rgb(100 101 102 / 6%);

        .con-status-item-left {
          div:nth-child(1) {
            font-size: 14px;
            font-weight: 400;
            color: #86909c;
          }

          div:nth-child(2) {
            margin-top: 4px;
            font-size: 18px;
            font-weight: 500;
          }

          .orange {
            color: #ed6a0c;
          }

          .green {
            color: #07c160;
          }
        }

        .dsp {
          background: url('@/assets/image/dspIcon.png') no-repeat;
        }

        .ysp {
          background: url('@/assets/image/yspIcon.png') no-repeat;
        }

        .con-status-item-right {
          width: 40px;
          height: 40px;
          background-size: 100% 100%;
        }
      }

      .active1 {
        border: 1px solid #ed6a0c;
      }

      .active2 {
        border: 1px solid #07c160;
      }
    }

    .con-list {
      width: 100%;
      height: 688px;
      overflow-x: hidden;
      overflow-y: scroll;

      .con-list-item {
        display: flex;
        flex-direction: column;
        width: 94%;
        padding: 0 3% 16px;
        margin-top: 20px;
        background: #fff;
        border-radius: 8px;

        .con-list-item-title {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 12px;
          margin-bottom: 8px;

          div:nth-child(1) {
            width: 4px;
            height: 15px;
            background: #1989fa;
          }

          div:nth-child(2) {
            margin-left: 4px;
            font-size: 16px;
            font-weight: 500;
            color: #1d2129;
          }
        }

        .con-list-item-con {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 8px;
          font-size: 14px;

          div:nth-child(1) {
            width: 60px;
            font-weight: 500;
            color: #1d2129;
          }

          div:nth-child(2) {
            font-weight: 400;
            color: #4e5969;
          }
        }

        .con-list-item-button {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-top: 20px;

          .ant-btn {
            width: 100px;
            height: 32px;
            border-radius: 16px;
          }

          .ant-btn-primary {
            margin-left: 16px;
          }
        }
      }
    }

    .con-list::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
