<script setup lang="ts">
import { basicInfo } from '@/apis';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { pageIndexStore } from '@/store/index';
const router = useRouter();
const pageIndexStores = pageIndexStore();

const list = reactive<{ data: basicInfo[] }>({
  data: [],
});

const data = localStorage.getItem('港口企业');
if (data?.length) {
  list.data = JSON.parse(data);
}

const itemClick = (title: string) => {
  if (title === '企业基本信息') {
    router.push({ path: '/portEnterprise/basicInfo' });
    pageIndexStores.setTitle(title);
  } else if (title === '港口设施') {
    router.push({ path: '/portEnterprise/portFacilities' });
    pageIndexStores.seteEquipTitle('码头泊位');
  } else if (title === '人员申请') {
    router.push({ path: '/portEnterprise/personnelApplication' });
  } else if (title === '人员审批') {
    router.push({ path: '/portEnterprise/personnelApproval' });
  }
};
</script>

<template>
  <div class="enterprise">
    <div class="enterprise-info">
      <div class="enterprise-info-bg"></div>
      <div class="enterprise-info-card">
        <div class="company">
          <div class="company-icon company-icon-gk"></div>
          <div class="company-text">
            <div class="text-con">{{ list.data[0]?.companyName }}</div>
            <div class="company-tip">
              <div v-show="list.data[0]?.waterCompanyId">水路运输企业</div>
              <div v-show="list.data[0]?.shipCompanyId">船舶管理企业</div>
              <div v-show="list.data[0]?.agentCompanyId">船舶代理企业</div>
              <div v-show="list.data[0]?.baseCompanyId">港口经营企业</div>
              <div v-show="list.data[0]?.portserviceCompanyId">港口服务企业</div>
              <div v-show="list.data[0]?.tallyCompanyId">理货企业</div>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="company-info">
          <div class="company-info-item">
            <div class="icon xydm"></div>
            <div class="item-text">统一社会信用代码</div>
            <div class="item-con">{{ list.data[0]?.businessLicenceNo }}</div>
          </div>
          <div class="company-info-item">
            <div class="icon zczb"></div>
            <div class="item-text">注册资本</div>
            <div class="item-con">
              {{ list.data[0]?.registeredCapital ? list.data[0]?.registeredCapital + '万(元)' : '' }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="func-btn">
      <div class="func-btn-item">
        <div class="func-btn-title">
          <div></div>
          <div>企业信息查询</div>
        </div>
        <div class="func-btn-button">
          <div class="func-btn-button-item" @click="itemClick('企业基本信息')">
            <div class="func-btn-button-item-icon qyjbxx"></div>
            <div class="func-btn-button-item-text">企业基本信息</div>
          </div>
          <div class="func-btn-button-item" @click="itemClick('港口设施')">
            <div class="func-btn-button-item-icon gkss"></div>
            <div class="func-btn-button-item-text">港口设施</div>
          </div>
        </div>
      </div>
      <!-- <div class="func-btn-item">
        <div class="func-btn-title">
          <div></div>
          <div>权限管理</div>
        </div>
        <div class="func-btn-button">
          <div class="func-btn-button-item" @click="itemClick('人员申请')">
            <div class="func-btn-button-item-icon rysq"></div>
            <div class="func-btn-button-item-text">人员申请</div>
          </div>
          <div class="func-btn-button-item" @click="itemClick('人员审批')">
            <div class="func-btn-button-item-icon rysp"></div>
            <div class="func-btn-button-item-text">人员审批</div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url('@/assets/css/homepage.css');

.company-info {
  padding-bottom: 20px;
}
</style>
