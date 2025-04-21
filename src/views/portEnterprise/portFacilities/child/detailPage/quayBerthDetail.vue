import { callbackify } from 'util';
<script setup lang="ts">
import { reactive } from 'vue';
import PageTitle from '@/components/pageTitle.vue';
const portEquip = localStorage.getItem('portEquip');

const data = reactive<{ data: any }>({
  data: {},
});

if (portEquip?.length) {
  data.data = JSON.parse(portEquip);
}
</script>
<template>
  <!-- 码头泊位 -->
  <PageTitle :title="'码头泊位'"></PageTitle>
  <div class="basicinfo">
    <div class="basicinfo-item-content">
      <div class="content-item">
        <div class="content-item-title">码头名称</div>
        <div class="content-item-content">
          {{ data.data.jettyName }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">所在港区</div>
        <div class="content-item-content">
          {{ data.data.typeName }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">码头布置形式</div>
        <div class="content-item-content">
          {{ data.data.wharfStructure }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">泊位名称</div>
        <div class="content-item-content">
          {{ data.data.berthName }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">泊位简称</div>
        <div class="content-item-content">
          {{ data.data.berthToas }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">权属</div>
        <div class="content-item-content">
          {{ data.data.authority }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">结构型式</div>
        <div class="content-item-content">
          {{ data.data.berthStructure }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">主要用途</div>
        <div class="content-item-content">
          {{ data.data.mainUseName }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">验收方式</div>
        <div class="content-item-content">
          {{ data.data.dateType }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">验收日期</div>
        <div class="content-item-content">
          {{ data.data.finishDate }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">设计前沿水深</div>
        <div class="content-item-content">
          {{ data.data.depthD }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">实际前沿水深</div>
        <div class="content-item-content">
          {{ data.data.depthM }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">前沿水深测量日期</div>
        <div class="content-item-content">
          {{ data.data.depthInsDate }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">从事港口危险货物作业</div>
        <div class="content-item-content">
          {{ data.data.isDangerWork == 1 ? '是' : '否' }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">设计靠泊能力</div>
        <div class="content-item-content">
          {{ data.data.berthingDesign }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">核查靠泊能力</div>
        <div class="content-item-content">
          {{ data.data.berthingVerificat }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">泊位长度(米)</div>
        <div class="content-item-content">
          {{ data.data.berthLength }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">泊位宽度(米)</div>
        <div class="content-item-content">
          {{ data.data.berthWidth }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">是否对外开放</div>
        <div class="content-item-content">
          {{ data.data.berthIsOpen == 1 ? '是' : '否' }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">设计年通过能力</div>
        <div class="content-item-content">
          {{ data.data.throughputBulkcargoT }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">作业方式</div>
        <div class="content-item-content">
          {{ data.data.jobWayName }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">作业危险货物品名</div>
        <div class="content-item-content">
          {{ data.data.dangerName }}
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
