<script setup lang="ts">
import { reactive } from 'vue';
const obj = localStorage.getItem('ship');

const data = reactive<{ data: any }>({
  data: {},
});

if (obj?.length) {
  data.data = JSON.parse(obj);
}
// 船舶AIS设备
const shipEquip: Record<string, string> = {
  '1': '有',
  '0': '无',
};

// 船体材料
const shipMaterial: Record<string, string> = {
  '00': '钢质',
  '01': '木质',
  '02': '其它',
};
</script>
<template>
  <!-- 基本信息 -->
  <div class="basicinfo">
    <div class="basicinfo-item-content public-content">
      <div class="content-item">
        <div class="content-item-title">中文船名</div>
        <div class="content-item-content">{{ data.data?.shipNameCn }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">中文曾用名</div>
        <div class="content-item-content">{{ data.data?.shipUseNameCn }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">IMO编号</div>
        <div class="content-item-content">{{ data.data?.shipImo }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">MMSI</div>
        <div class="content-item-content">{{ data.data?.shipMmsi }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船舶呼号</div>
        <div class="content-item-content">{{ data.data?.shipSign }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船舶AIS设备</div>
        <div class="content-item-content">
          {{ data.data?.shipAis ? shipEquip[data.data?.shipAis] : '' }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船舶类型(以船检证书为准)</div>
        <div class="content-item-content">{{ data.data?.shipType }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船体材料</div>
        <div class="content-item-content">
          {{ data.data?.shipMaterial ? shipMaterial[data.data?.shipMaterial] : '' }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船籍港</div>
        <div class="content-item-content">{{ data.data?.shipRegistry }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">安放龙骨日期</div>
        <div class="content-item-content">{{ data.data?.shipLayTheKeelDate }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">建成日期</div>
        <div class="content-item-content">{{ data.data?.shipCompletionDate }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">建造地点及造船厂</div>
        <div class="content-item-content">{{ data.data?.shipCompletionPlace }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船舶总长(米)</div>
        <div class="content-item-content">{{ data.data?.shipLength }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">型宽(米)</div>
        <div class="content-item-content">{{ data.data?.shipWidth }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">货舱数量</div>
        <div class="content-item-content">{{}}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">主机台数</div>
        <div class="content-item-content">{{ data.data?.shipHostNum }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">主机总功率(千瓦)</div>
        <div class="content-item-content">{{ data.data?.shipHostPower }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">总吨</div>
        <div class="content-item-content">{{ data.data?.shipGrt }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">净吨</div>
        <div class="content-item-content">{{ data.data?.shipNrt }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');

.content-item {
  width: 94%;
  padding: 8px 3%;
  background-color: #fff;
}
</style>
