<script setup lang="ts">
import { api } from '@/apis';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
// import { message } from 'ant-design-vue';
const router = useRouter();

async function getData(userMarks: string, businessLicenceNos: string) {
  try {
    const res = await api.hygkqyb.getQyyhsm({
      userMark: userMarks,
      userTelephone: '',
      userName: '',
      businessLicenceNo: businessLicenceNos,
    });
    if (localStorage.getItem('航运企业')) {
      localStorage.removeItem('航运企业');
    }
    if (localStorage.getItem('港口企业')) {
      localStorage.removeItem('港口企业');
    }
    if (localStorage.getItem('ship')) {
      localStorage.removeItem('ship');
    }
    if (localStorage.getItem('cerInfoList')) {
      localStorage.removeItem('cerInfoList');
    }
    if (localStorage.getItem('portEquip')) {
      localStorage.removeItem('portEquip');
    }
    const data = res.data.data?.rows;
    console.log(res.data);

    // 判断用户
    if (data?.userType === '0') {
      localStorage.setItem('userType', '公众');
    } else if (data?.userType === '1') {
      localStorage.setItem('userType', '企业');
    } else if (data?.userType === '2') {
      localStorage.setItem('userType', '管理');
    }

    if (data?.companyTypes === '[1]') {
      localStorage.setItem('航运企业', JSON.stringify(data.companyInfoList));
      router.push({ path: '/shipEnterprise' });
    } else if (data?.companyTypes === '[0]') {
      localStorage.setItem('港口企业', JSON.stringify(data.companyInfoList));
      router.push({ path: '/portEnterprise' });
    } else {
      // message.error('参数异常');
    }
  } catch (error) {
    // message.error('数据错误');
  }
}

const getUrlParams = (url: string) => {
  const paramsRegex = /[?&]+([^=&]+)=([^&]*)/gi;
  const params: Record<string, string> = {};
  let match;
  while ((match = paramsRegex.exec(url))) {
    params[match[1]] = match[2];
  }

  return params;
};

onMounted(() => {
  // zzdUserMark=GE_1e413967b3fa4d46bef99c96a44eb173
  // 港口企业：https://zdm.zhoushan.gov.cn:9082/?qrC0de=none&company_name=中化兴中石油转运（ 舟 山 ）有限公司&credit_code=91330900609858031R&zfbUserMark=2088612575225225
  // 航运企业：https://zdm.zhoushan.gov.cn:9082/?qrCode=none&company_name=浙江川安航运发展有限公司&credit_code=91330900MA2DNEEJ05&zfbUserMark=2088612575225225
  const address =
    'https://zdm.zhoushan.gov.cn:9082/?qrC0de=none&company_name=中化兴中石油转运（ 舟 山 ）有限公司&credit_code=91330900609858031R&zfbUserMark=2088612575225225';
  const params = getUrlParams(address);

  if (address.indexOf('credit_code') !== -1) {
    console.log(params);

    if (params.zfbUserMark) {
      getData(params.zfbUserMark, params.credit_code);
    } else if (params.zzdUserMark) {
      getData(params.zzdUserMark, params.credit_code);
    } else if (params.zlbUserMark) {
      getData(params.zlbUserMark, params.credit_code);
    }
  }
  // else {
  //   message.error('无credit_code');
  // }
});
</script>

<template>
  <div class="transferpage"><a-spin tip="Loading..."></a-spin></div>
</template>

<style lang="less" scoped>
.transferpage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 812px;
  overflow: hidden;
}
</style>
