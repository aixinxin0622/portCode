<script setup lang="ts">
import { reactive } from 'vue';
import { basicInfo } from '@/apis';
import BlankPage from '@/components/blankPage.vue';

const securityList: Record<string, string> = {
  1: '已建立',
  2: '按规定不需建立',
  3: '委托他人',
};

const standardList: Record<string, string> = {
  1: '已建立',
  2: '未建立',
};

const list = localStorage.getItem('航运企业');
const data = reactive<{ data: basicInfo[] }>({
  data: [],
});
if (list?.length) {
  data.data = JSON.parse(list);
}
</script>

<template>
  <div class="basicinfo">
    <div v-if="data.data[0].dwdTSailWaterwaySecuritySystem?.length">
      <div class="basicinfo-item-title">
        <div class="basicinfo-item-title-bulesquare"></div>
        <div class="basicinfo-item-title-name">安全管理体系</div>
      </div>
      <div class="basicinfo-item-content">
        <div class="content-item">
          <div class="content-item-title">安全管理体系建立情况</div>
          <div class="content-item-content">
            {{ securityList[data.data[0].dwdTSailWaterwaySecuritySystem[0].domesticSecuritySystem] }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">符合证明(DOC)编号</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTSailWaterwaySecuritySystem[0].domesticDocNo }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">安全管理体系覆盖船舶种类</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTSailWaterwaySecuritySystem[0].domesticShipTypeMc }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">发证机构</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTSailWaterwaySecuritySystem[0].domesticIssueUnit }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">签发日期</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTSailWaterwaySecuritySystem[0].domesticIssueOpenDate }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">有效期至</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTSailWaterwaySecuritySystem[0].domesticIssueDate }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="data.data[0].dwdTSailWaterwayStandardSituation?.length">
      <div class="basicinfo-item-title">
        <div class="basicinfo-item-title-bulesquare"></div>
        <div class="basicinfo-item-title-name">安全生产标准化</div>
      </div>
      <div class="basicinfo-item-content">
        <div class="content-item">
          <div class="content-item-title">安全生产标准化建立情况</div>
          <div class="content-item-content">
            {{ standardList[data.data[0].dwdTSailWaterwayStandardSituation[0].standardSituation] }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">达标等级</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTSailWaterwayStandardSituation[0].domesticStandardLevel }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">达标等级证书编号</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTSailWaterwayStandardSituation[0].domesticStandardNo }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">发证主管机关</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTSailWaterwayStandardSituation[0].standardIssueUnit }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">有效期</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTSailWaterwayStandardSituation[0].standardIssueDate }}
          </div>
        </div>
      </div>
    </div>
    <BlankPage v-else></BlankPage>
  </div>
</template>
<style lang="less" scoped>
@import url('@/assets/css/basicinfo.css');

.basicinfo {
  overflow-x: hidden;
  overflow-y: scroll;
}

.basicinfo::-webkit-scrollbar {
  display: none;
}

.basicinfo-item-content {
  background-color: #fff;
}
</style>
