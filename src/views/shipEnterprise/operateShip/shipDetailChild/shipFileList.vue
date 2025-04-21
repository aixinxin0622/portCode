<script setup lang="ts">
import BlankPage from '@/components/blankPage.vue';
// import { reactive } from 'vue';
// const emits = defineEmits(['fileurl']);

// const fileList = reactive([
//   {
//     id: 1,
//     name: '船检证书',
//     filename: '这是附件名称',
//   },
//   {
//     id: 2,
//     name: '国籍证书',
//     filename: 'zhengshu.jpg',
//   },
//   {
//     id: 3,
//     name: '所有权证书',
//     filename: 'zhengshu.jpg',
//   },
//   {
//     id: 4,
//     name: '船舶营运证',
//     filename: 'zhengshu.jpg',
//   },
//   {
//     id: 5,
//     name: '最低配员证书',
//     filename: 'zhengshu.jpg',
//   },
//   {
//     id: 6,
//     name: '安全管理证书',
//     filename: 'zhengshu.jpg',
//   },
// ]);

// const fileClick = (val: string) => {
//   emits('fileurl', val);
// };
</script>
<!-- 船舶附件列表 -->
<template>
  <!-- <div class="file-list">
    <div v-for="item in fileList" :key="item.id" class="file-list-item">
      <div class="item-name">{{ item.name }}</div>
      <div class="item-content">
        <div class="item-content-icon"></div>
        <div class="item-content-text" @click="fileClick(item.filename)">{{ item.filename }}</div>
      </div>
    </div>
  </div> -->
  <BlankPage></BlankPage>
</template>
<style lang="less" scoped>
.file-list {
  width: 94%;
  padding: 0 3%;
  margin-top: 12px;
  background-color: #fff;

  .file-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 94%;
    padding: 12px 3%;
    border-bottom: 1px solid #f3f8ff;

    .item-name {
      width: 84px;
      font-weight: 500;
      color: #1d2129;
    }

    .item-content {
      display: flex;
      flex-direction: row;
      align-items: center;

      .item-content-icon {
        width: 16px;
        height: 16px;
        margin-left: 17px;
        background: url('../../assets/image/shipEnterprise/fileIcon.png') no-repeat;
        background-size: 100% 100%;
      }

      .item-content-text {
        margin-left: 6px;
        font-size: 14px;
        font-weight: 400;
        color: #1989fa;
        text-decoration: underline;
      }
    }
  }
}
</style>
