<script setup lang="ts">
import { reactive } from 'vue';
import { basicInfo } from '@/apis';

const statusList: Record<string, string> = {
  1: '是',
  0: '否',
};

const list = localStorage.getItem('港口企业');
const data = reactive<{ data: basicInfo[] }>({
  data: [],
});
if (list?.length) {
  data.data = JSON.parse(list);
}
</script>

<template>
  <div class="basicinfo">
    <div>
      <div class="basicinfo-item-title">
        <div class="basicinfo-item-title-bulesquare"></div>
        <div class="basicinfo-item-title-name">工商信息</div>
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
          <div class="content-item-title">统一社会信用代码</div>
          <div class="content-item-content">{{ data.data[0]?.businessLicenceNo }}</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">注册资本</div>
          <div class="content-item-content">
            {{ data.data[0]?.registeredCapital ? data.data[0].registeredCapital + '万(元)' : '' }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">企业类型</div>
          <div class="content-item-content">{{ data.data[0]?.portEconomySecName }}</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">住所</div>
          <div class="content-item-content">{{ data.data[0]?.registeredAddressDetail }}</div>
        </div>
      </div>
    </div>
    <div v-if="data.data[0].dwdTBaseBusinessPermission?.length">
      <div class="basicinfo-item-title">
        <div class="basicinfo-item-title-bulesquare"></div>
        <div class="basicinfo-item-title-name">港口经营许可证信息</div>
      </div>
      <div class="basicinfo-item-content">
        <div class="content-item">
          <div class="content-item-title">港口经营许可证号</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessPermission[0].busenessPermissionNo }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">发证日期</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessPermission[0].usenessPermissionOpenDate }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">有效期至</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessPermission[0].busenessPermissionDate }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">经营范围</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessPermission[0].businessScopeDetail }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">经营地域</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessPermission[0].economicDistrict }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="data.data[0].dwdTBaseBusinessInfomation?.length">
      <div class="basicinfo-item-title">
        <div class="basicinfo-item-title-bulesquare"></div>
        <div class="basicinfo-item-title-name">企业经营信息</div>
      </div>
      <div class="basicinfo-item-content">
        <div class="content-item">
          <div class="content-item-title">辖区</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessInfomation[0].branchesName }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">法定代表人身份证号</div>
          <div class="content-item-content">{{ data.data[0].dwdTBaseBusinessInfomation[0].identifyId }}</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">法定代表人联系电话</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessInfomation[0].corporationTelephone }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">企业联系人</div>
          <div class="content-item-content">{{ data.data[0].dwdTBaseBusinessInfomation[0].contact }}</div>
        </div>
        <div class="content-item">
          <div class="content-item-title">企业联系人电话</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessInfomation[0].contactTelephone }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">是否主营港口业务</div>
          <div class="content-item-content">
            {{
              data.data[0].dwdTBaseBusinessInfomation[0].mainForPort
                ? statusList[data.data[0].dwdTBaseBusinessInfomation[0].mainForPort]
                : ''
            }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">从事港口危险货物作业</div>
          <div class="content-item-content">
            {{
              data.data[0].dwdTBaseBusinessInfomation[0].dangerousCargoWork
                ? statusList[data.data[0].dwdTBaseBusinessInfomation[0].dangerousCargoWork]
                : ''
            }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">企业主营类型</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessInfomation[0].mainTypeName }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">企业相关类型</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessInfomation[0].relatedTypeName }}
          </div>
        </div>
        <div class="content-item">
          <div class="content-item-title">危险货物种类</div>
          <div class="content-item-content">
            {{ data.data[0].dwdTBaseBusinessInfomation[0].dangerRealName }}
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
</style>
