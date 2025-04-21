<script setup lang="ts">
import { reactive } from 'vue';
const obj = localStorage.getItem('ship');

const data = reactive<{ data: any }>({
  data: {},
});

if (obj?.length) {
  data.data = JSON.parse(obj);
}
</script>
<template>
  <!-- 船舶登记情况 -->
  <div class="basicinfo">
    <div class="basicinfo-item-content public-content">
      <div class="content-item">
        <div class="content-item-title">船舶国籍(船旗国/地区)</div>
        <div class="content-item-content">{{ data.data?.shipNatNationality }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">国籍证书发证机关</div>
        <div class="content-item-content">{{ data.data?.shipNatCartCompany }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船舶识别号</div>
        <div class="content-item-content">{{ data.data?.shipCheckCartShipid }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">国籍证书有效期</div>
        <div class="content-item-content">{{ data.data?.shipNatCartValidityEnd }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">取得所有权的日期</div>
        <div class="content-item-content">{{ data.data?.shipNatCartGetdate }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">最低配员人数</div>
        <div class="content-item-content">{{ data.data?.shipNatMinPerson }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">最低配员证书中的高级船员数量</div>
        <div class="content-item-content">{{ data.data?.shipMinSeniorofficer }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">最低配员证书有效期</div>
        <div class="content-item-content">{{ data.data?.shipNatMinPersonValiEnd }}</div>
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
