<script setup lang="ts">
import { reactive } from 'vue';
import { basicInfo } from '@/apis';
import BlankPage from '@/components/blankPage.vue';

// const statusList: Record<string, string> = {
//   1: '是',
//   0: '否',
// };

const list = localStorage.getItem('港口企业');
const data = reactive<{ data: basicInfo[] }>({
  data: [],
});
if (list?.length) {
  data.data = JSON.parse(list);
}
</script>

<template>
  <div v-if="data.data[0].dwdTBaseProductionInfo?.length" class="basicinfo">
    <div>
      <div class="basicinfo-item-title">
        <div class="basicinfo-item-title-bulesquare"></div>
        <div class="basicinfo-item-title-name">安全生产标准化</div>
      </div>
      <div class="basicinfo-item-content">
        <div class="content-item">
          <div class="content-item-title">是否完成创建</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">创建日期</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">达标等级</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">评价机构</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">证书编号</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">有效期限</div>
          <div class="content-item-content"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicinfo-item-title">
        <div class="basicinfo-item-title-bulesquare"></div>
        <div class="basicinfo-item-title-name">安全生产责任险投保</div>
      </div>
      <div class="basicinfo-item-content">
        <div class="content-item">
          <div class="content-item-title">是否投保</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">保险费(元/人/年)</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">赔付额(元)</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">最近投保时间</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">保险公司</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">是否赔付</div>
          <div class="content-item-content"></div>
        </div>
        <div class="content-item">
          <div class="content-item-title">赔付情况</div>
          <div class="content-item-content"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicinfo-item-title">
        <div class="basicinfo-item-title-bulesquare"></div>
        <div class="basicinfo-item-title-name">安全生产风险管控</div>
      </div>
      <div class="basicinfo-item-content">
        <div class="content-item">
          <div class="content-item-title">是否完成创建</div>
          <div class="content-item-content">xxxx</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">创建时间</div>
          <div class="content-item-content">xxxx</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">创建方式</div>
          <div class="content-item-content">xxxx</div>
        </div>
      </div>
    </div>
  </div>
  <BlankPage v-else></BlankPage>
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
