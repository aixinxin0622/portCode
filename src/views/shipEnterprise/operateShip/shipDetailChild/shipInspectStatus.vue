<script setup lang="ts">
import { reactive } from 'vue';
const obj = localStorage.getItem('ship');

const data = reactive<{ data: any }>({
  data: {},
});

if (obj?.length) {
  data.data = JSON.parse(obj);
}

const status: Record<string, string> = {
  '1': '是',
  '0': '否',
};
</script>
<template>
  <!-- 船舶检验情况 -->
  <div class="basicinfo">
    <div class="basicinfo-item-content public-content">
      <div class="content-item">
        <div class="content-item-title">船级</div>
        <div class="content-item-content">{{ data.data?.shipCheckClass }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船检登记号</div>
        <div class="content-item-content">{{ data.data?.shipCheckCartNo }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">适航证书有效期</div>
        <div class="content-item-content">{{ data.data?.shipCheckCartValidity }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">发证单位</div>
        <div class="content-item-content">{{ data.data?.shipCheckCartCompany }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">发证日期</div>
        <div class="content-item-content">{{ data.data?.shipCheckCartIssue }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船舶适航区域</div>
        <div class="content-item-content">{{ data.data?.shipAirworthinessArea }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">入级证书</div>
        <div class="content-item-content">{{}}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">是否持有包装</div>
        <div class="content-item-content">{{}}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">发证日期</div>
        <div class="content-item-content">{{ data.data?.classCertIssue }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">有效期至</div>
        <div class="content-item-content">{{ data.data?.classCertValidity }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">危险品适装证书</div>
        <div class="content-item-content">
          {{ data.data?.isShipPackCert ? status[data.data?.isShipPackCert] : '' }}
        </div>
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
