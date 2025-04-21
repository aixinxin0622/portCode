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

// 船舶经营方式
const shipPoreateType: Record<string, string> = {
  '00': '自有经营',
  '01': '光船租赁',
  '02': '委托经营',
  '03': '合作经营',
  '04': '光船租赁（融资租赁认定自有）',
};

// 安全管理体系建立情况
const safeSecurity: Record<string, string> = {
  '1': '已建立',
  '2': '按规定不需建立',
  '3': '委托他人',
};
</script>
<template>
  <!-- 国内船舶营业运输证 -->
  <div v-if="data.data[0].dwdTSailShipBuscartGn?.length" class="basicinfo">
    <div class="basicinfo-item-content public-content">
      <div class="content-item">
        <div class="content-item-title">《船舶营业运输证》编号</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnBusCartNo }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">发证机关</div>
        <div class="content-item-content">
          {{ data.data[0].dwdTSailShipBuscartGn[0].gnBusCartCompany }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">发证日期</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnBusCartIssue }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">有效期至</div>
        <div class="content-item-content">
          {{ data.data[0].dwdTSailShipBuscartGn[0].gnBusCartValidity }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船舶经营人</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnOperator }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">经营人许可证号</div>
        <div class="content-item-content">
          {{ data.data[0].dwdTSailShipBuscartGn[0].gnOperatorCartNo }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船舶经营方式</div>
        <div class="content-item-content">
          {{ shipPoreateType[data.data[0].dwdTSailShipBuscartGn[0].gnOperatorWay] }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">经营范围类型</div>
        <div class="content-item-content">{{}}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">经营范围</div>
        <div class="content-item-content">{{}}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">船舶核定的经营范围</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnScopeBusiness }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">安全管理体系建立情况</div>
        <div class="content-item-content">
          {{ safeSecurity[data.data[0].dwdTSailShipBuscartGn[0].gnSecuritySystem] }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">安全管理证书(SMC)编号</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnSmcNo }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">发证机关</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnSmcCompany }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">发证日期</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnSmcSigned }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">有效期至</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnSmcValidity }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">符合证明(DOC)编号</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnDocNo }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">安全管理体系覆盖船舶种类</div>
        <div class="content-item-content">
          {{ data.data[0].dwdTSailShipBuscartGn[0].gnDocSafeshipName }}
        </div>
      </div>
      <div class="content-item">
        <div class="content-item-title">发证机构</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnDocCompany }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">签发日期</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnDocSigned }}</div>
      </div>
      <div class="content-item">
        <div class="content-item-title">有效期至</div>
        <div class="content-item-content">{{ data.data[0].dwdTSailShipBuscartGn[0].gnDocValidity }}</div>
      </div>
    </div>
  </div>
  <BlankPage v-else></BlankPage>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');

.content-item {
  width: 94%;
  padding: 8px 3%;
  background-color: #fff;
}
</style>
