<script setup lang="ts">
import PageTitle from '@/components/pageTitle.vue';
import { DefaultOptionType, SelectValue } from 'ant-design-vue/es/select';
import { ref, reactive } from 'vue';
const list = reactive([
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'B',
    label: 'B',
  },
  {
    value: 'C',
    label: 'C',
  },
  {
    value: 'D',
    label: 'D',
  },
]);
// 企业选择
const enterprise = ref();

const handleSearch = (value: string) => {
  console.log(value);
};
const handleChange = (value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => {
  console.log(value, option);
  enterprise.value = value;
};

// 姓名
const personnel = reactive({
  name: '',
  tel: '',
});
</script>
<template>
  <div class="personnel-application">
    <PageTitle :title="'企业人员申请'"></PageTitle>
    <div class="personnel-application-con">
      <div class="con-title">企业信息</div>
      <div class="qyxx-content">
        <div class="qyxx-content-item item-line">
          <div class="qyxx-content-item-name">企业选择</div>
          <a-select
            v-model:value="enterprise"
            :show-search="true"
            :show-arrow="false"
            :default-active-first-option="false"
            :filter-option="false"
            :not-found-content="null"
            :options="list"
            placeholder="请搜索并选择企业"
            style="width: 220px"
            @search="handleSearch"
            @change="handleChange"
          ></a-select>
        </div>
        <div class="qyxx-content-item">
          <div class="qyxx-content-item-name">统一社会信用代码</div>
          <div class="qyxx-content-item-value">自动获取</div>
        </div>
      </div>
      <div class="con-title">人员信息</div>
      <div class="qyxx-content">
        <div class="qyxx-content-item item-line">
          <div class="qyxx-content-item-name">姓名</div>
          <a-input v-model:value="personnel.name" style="width: 220px" placeholder="请输入姓名" />
        </div>
        <div class="qyxx-content-item item-line">
          <div class="qyxx-content-item-name">身份证</div>
          <div class="qyxx-content-item-value">自动获取</div>
        </div>
        <div class="qyxx-content-item">
          <div class="qyxx-content-item-name">手机号</div>
          <a-input v-model:value="personnel.tel" style="width: 220px" placeholder="请输入手机号" />
        </div>
      </div>
      <a-button type="primary">提交申请</a-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
:deep(.ant-select-selection-search-input) {
  font-size: 14px;
  font-weight: 400;
  color: #969799;
  text-align: right;
}

:deep(.ant-select-selection-item) {
  font-size: 14px;
  font-weight: 400;
  color: #969799;
}

:deep(.ant-select-selector) {
  padding: 0;
  text-align: right;
  border: none;
}

:deep(.ant-select-selection-search) {
  right: 0;
  left: 0;
}

:deep(.ant-select-focused .ant-select-selector) {
  border-color: #fff;
  box-shadow: none;
}

:deep(.ant-select:hover .ant-select-selector) {
  border-color: #fff;
}

:deep(.ant-input) {
  padding-right: 0;
  font-size: 14px;
  font-weight: 400;
  color: #969799;
  text-align: right;
  border: none;
}

:deep(.ant-input:focus) {
  border-color: #fff;
  border-right-width: 0;
  box-shadow: none;
}

.personnel-application {
  width: 100%;
  height: 812px;
  overflow: hidden;

  &-con {
    display: flex;
    flex-direction: column;
    width: 94%;
    height: 768px;
    padding: 0 3%;
    overflow: hidden;
    background: #f3f8ff;

    .con-title {
      margin-top: 17px;
      font-size: 14px;
      font-weight: 400;
      color: #4e5969;
    }

    .qyxx-content {
      width: 94%;
      padding: 0 3%;
      margin-top: 8px;
      background-color: #fff;
      border-radius: 8px;

      &-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 44px;

        &-name {
          font-size: 14px;
          font-weight: 500;
          color: #1d2129;
        }

        &-value {
          font-size: 14px;
          font-weight: 400;
          color: #c8c9cc;
        }
      }

      .item-line {
        border-bottom: 1px solid #f3f8ff;
      }
    }

    .ant-btn-primary {
      width: 343px;
      height: 40px;
      margin-top: 40px;
      margin-left: 4px;
      background: #1989fa;
      border-radius: 22px;
    }
  }
}
</style>
