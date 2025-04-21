<script setup lang="ts">
import { reactive } from 'vue';
import PageTitle from '@/components/pageTitle.vue';
const portEquip = localStorage.getItem('portEquip');

const authorityList: Record<string, string> = {
  '1': '自有',
  '2': '租赁',
};

const isBondedTankStatus: Record<string, string> = {
  '1': '是',
  '0': '否',
};

const data = reactive<{ data: any }>({
  data: {},
});

if (portEquip?.length) {
  data.data = JSON.parse(portEquip);
}
</script>
<template>
  <!-- 储罐 -->
  <PageTitle :title="'储罐'"></PageTitle>
  <div class="basicinfo">
    <div class="basicinfo-item-content">
      <div class="content-item">
        <div class="content-item-title">储罐名称(编号)</div>
        <div class="content-item-content">
          {{ data.data.storageTankName }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">是否保税罐</div>
        <div class="content-item-content">
          {{ data.data.isBondedTank ? isBondedTankStatus[data.data.isBondedTank] : '' }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">权属</div>
        <div class="content-item-content">
          {{ data.data.authority ? authorityList[data.data.authority] : '' }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">储罐压力</div>
        <div class="content-item-content">
          {{ data.data.storagePressure }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">罐体直径(米)</div>
        <div class="content-item-content">
          {{ data.data.tankDiameter }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">储罐类型</div>
        <div class="content-item-content">
          {{ data.data.storageTanktypeName }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">储罐容量(立方米)</div>
        <div class="content-item-content">
          {{ data.data.storageTankCapacity }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">罐体高度(米)</div>
        <div class="content-item-content">
          {{ data.data.tankHeight }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">投产日期</div>
        <div class="content-item-content">
          {{ data.data.investDate }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">储罐材质</div>
        <div class="content-item-content">
          {{ data.data.tankCzid }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">设计压力(Mpa)</div>
        <div class="content-item-content">
          {{ data.data.tankSsyl }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">设计承受最大温度(℃)</div>
        <div class="content-item-content">
          {{ data.data.tankCswd }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">制造日期</div>
        <div class="content-item-content">
          {{ data.data.finishDate }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">附证编号</div>
        <div class="content-item-content">
          {{ data.data.reportcardId }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">作业区域范围</div>
        <div class="content-item-content">
          {{ data.data.workArea }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">对应作业泊位名称</div>
        <div class="content-item-content">
          {{ data.data.berthingName }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">发证日期</div>
        <div class="content-item-content">
          {{ data.data.issueDate }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">有效期至</div>
        <div class="content-item-content">
          {{ data.data.validity }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">作业危险货物品名</div>
        <div class="content-item-content">
          {{ data.data.dangerName }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">检测时间</div>
        <div class="content-item-content">
          {{ data.data.checkTime }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">检测单位</div>
        <div class="content-item-content">
          {{ data.data.checkUnit }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">下次检测时间</div>
        <div class="content-item-content">
          {{ data.data.nextCheckTime }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');

.basicinfo {
  height: calc(100% - 44px);
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #f3f8ff;
}

.basicinfo::-webkit-scrollbar {
  display: none;
}

.basicinfo-item-content {
  margin-top: 24px;
  background-color: #fff;
}

.content-item {
  width: 94%;
  padding: 8px 3%;
  background-color: #fff;
}
</style>
