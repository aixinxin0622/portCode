<script setup lang="ts">
import { reactive } from 'vue';
import { basicInfo } from '@/apis';
const list = localStorage.getItem('航运企业');
const data = reactive<{ data: basicInfo[] }>({
  data: [],
});
if (list?.length) {
  data.data = JSON.parse(list);
}

const levelList: Record<string, string> = {
  '1': '优质',
  '2': '一般',
  '3': '重点监督',
  '4': '停业整顿',
};
</script>
<template>
  <div class="basicinfo">
    <div>
      <div class="basicinfo-item-title">
        <div class="basicinfo-item-title-bulesquare"></div>
        <div class="basicinfo-item-title-name">基本信息</div>
      </div>
      <div class="basicinfo-item-content">
        <div class="content-item">
          <div class="content-item-title">企业名称</div>
          <div class="content-item-content">{{ data.data[0]?.companyName }}</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">法定代表人</div>
          <div class="content-item-content">{{ data.data[0]?.corporation }}</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">法人联系方式</div>
          <div class="content-item-content">{{ data.data[0]?.corporationTelephone }}</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">统一社会信用代码</div>
          <div class="content-item-content">{{ data.data[0]?.businessLicenceNo }}</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">注册资本</div>
          <div class="content-item-content">
            {{
              data.data[0]?.registeredCapital
                ? data.data[0]?.registeredCapital + '万(元)'
                : data.data[0]?.registeredCapital
            }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">企业类型</div>
          <div class="content-item-content">{{ data.data[0]?.sailEconomySecName }}</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">住所</div>
          <div class="content-item-content">{{ data.data[0]?.registeredAddressDetail }}</div>
        </div>
        <div v-if="data.data[0].companyAddress" class="content-item">
          <div class="content-item-title">办公场所</div>
          <div class="content-item-content">{{ data.data[0]?.companyAddress }}</div>
        </div>
        <div v-if="data.data[0].waterwayShoreBasedNumber" class="content-item">
          <div class="content-item-title">企业岸基人数</div>
          <div class="content-item-content">{{ data.data[0]?.waterwayShoreBasedNumber }}</div>
        </div>
        <div v-if="data.data[0].contact" class="content-item">
          <div class="content-item-title">企业联系人</div>
          <div class="content-item-content">{{ data.data[0]?.contact }}</div>
        </div>
        <div v-if="data.data[0].contactTelephone" class="content-item">
          <div class="content-item-title">联系人手机号</div>
          <div class="content-item-content">{{ data.data[0]?.contactTelephone }}</div>
        </div>
        <div v-if="data.data[0].contactPhone" class="content-item">
          <div class="content-item-title">办公电话</div>
          <div class="content-item-content">{{ data.data[0]?.contactPhone }}</div>
        </div>
        <div v-if="data.data[0].crewProportion" class="content-item">
          <div class="content-item-title">自有高级船员比例</div>
          <div class="content-item-content">
            {{ data.data[0]?.crewProportion ? data.data[0]?.crewProportion + '%' : '' }}
          </div>
        </div>
        <div v-if="data.data[0].waterwayEstablishDate" class="content-item">
          <div class="content-item-title">首次取得经营许可证日期</div>
          <div class="content-item-content">{{ data.data[0]?.waterwayEstablishDate }}</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicinfo-item-title">
        <div class="basicinfo-item-title-bulesquare"></div>
        <div class="basicinfo-item-title-name">经营状况</div>
      </div>
      <div class="opreation-content">
        <!-- 图片标识：data.data[0]?.dwdTSailWaterwayJyzk[0]?.innovativeLogo -->
        <div class="zjtx-icon"><div></div></div>
        <div class="opreation-content-item">
          <div>行业信用等级</div>
          <div>{{ data.data[0]?.dwdTSailWaterwayJyzk[0]?.levelTypeName }}</div>
        </div>
        <div class="opreation-content-item">
          <div>管理水平</div>
          <div>
            {{
              data.data[0]?.dwdTSailWaterwayJyzk[0]?.managementLavel
                ? levelList[data.data[0]?.dwdTSailWaterwayJyzk[0]?.managementLavel]
                : ''
            }}
          </div>
        </div>
        <div class="opreation-content-item">
          <div>荣誉或事迹</div>
          <div>{{ data.data[0]?.dwdTSailWaterwayJyzk[0]?.honor }}</div>
        </div>
        <div class="opreation-content-item">
          <div>运力</div>
          <div v-show="data.data[0]?.dwdTSailWaterwayJyzk?.length">
            {{ data.data[0]?.dwdTSailYl[0]?.shipType }}，{{ data.data[0]?.dwdTSailYl[0]?.num }}艘，{{
              data.data[0]?.dwdTSailYl[0]?.shipDwt
            }}吨
          </div>
        </div>
      </div>
    </div>
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

.opreation-content {
  width: 94%;
  margin: 24px 3% 15px;
  background-color: #fff;
  border-radius: 8px;

  .zjtx-icon {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    height: 28px;

    div {
      width: 90px;
      height: 28px;
      background: url('@/assets/image/shipEnterprise/zjtx_tip.png') no-repeat;
      background-size: 100% 100%;
    }
  }

  .opreation-content-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 94%;
    margin-left: 3%;

    div {
      padding: 12px 0;
      font-size: 14px;
    }

    div:nth-child(1) {
      flex-shrink: 0;
      width: 84px;
      font-weight: 500;
      color: #1d2129;
    }

    div:nth-child(2) {
      margin-left: 15px;
      font-weight: 400;
      color: #4e5969;
    }

    .glsp {
      padding: 2px 12px;
      border: 1px solid;
    }
  }
}
</style>
