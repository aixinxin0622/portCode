import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'transferPage',
    component: () => import('@/views/transferPage.vue'),
  },
  // 航运企业【首页】
  {
    path: '/shipEnterprise',
    name: 'shipEnterprise',
    component: () => import(/* webpackChunkName: "articles" */ '@/views/shipEnterprise/page.vue'),
  },
  // 航运企业【企业基本信息】
  {
    path: '/shipEnterprise/basicInfo',
    name: '航运企业基本信息',
    component: () => import('@/views/shipEnterprise/basicInfo/page.vue'),
  },
  // 航运企业【经营船舶】
  {
    path: '/shipEnterprise/operateShip',
    name: 'operateShip',
    component: () => import('@/views/shipEnterprise/operateShip/page.vue'),
  },
  // 航运企业【经营船舶:船舶详情】
  {
    path: '/shipEnterprise/operateShip/shipDetail',
    name: 'shipDetail',
    component: () => import('@/views/shipEnterprise/operateShip/shipDetail.vue'),
  },
  // 航运企业【人员申请】
  {
    path: '/shipEnterprise/personnelApplication',
    name: 'shippersonnelApplication',
    component: () => import('@/views/shipEnterprise/personnelApplication/page.vue'),
  },
  // 航运企业【人员审批】
  {
    path: '/shipEnterprise/personnelApproval',
    name: 'shippersonnelApproval',
    component: () => import('@/views/shipEnterprise/personnelApproval/page.vue'),
  },
  // 港口企业【首页】
  {
    path: '/portEnterprise',
    name: 'portEnterprise',
    component: () => import(/* webpackChunkName: "articles" */ '@/views/portEnterprise/page.vue'),
  },
  // 港口企业【企业基本信息】
  {
    path: '/portEnterprise/basicInfo',
    name: '港口企业基本信息',
    component: () => import('@/views/portEnterprise/basicInfo/page.vue'),
  },
  // 港口企业【企业基本信息:证书】
  {
    path: '/portEnterprise/basicInfo/certificate',
    name: 'certificate',
    component: () => import('@/views/portEnterprise/basicInfo/child/certificateList.vue'),
  },
  // 港口企业【港口设施】
  {
    path: '/portEnterprise/portFacilities',
    name: 'portFacilities',
    component: () => import('@/views/portEnterprise/portFacilities/page.vue'),
  },
  // 港口企业【码头泊位-详情】
  {
    path: '/portEnterprise/portFacilities/quayBerth/detail',
    name: 'quayBerthDetail',
    component: () => import('@/views/portEnterprise/portFacilities/child/detailPage/quayBerthDetail.vue'),
  },
  // 港口企业【储罐-详情】
  {
    path: '/portEnterprise/portFacilities/storageTank/detail',
    name: 'storageTankDetail',
    component: () => import('@/views/portEnterprise/portFacilities/child/detailPage/storageTankDetail.vue'),
  },
  // 港口企业【栈桥管道-详情】
  {
    path: '/portEnterprise/portFacilities/trestlePipeline/detail',
    name: 'trestlePipelineDetail',
    component: () =>
      import('@/views/portEnterprise/portFacilities/child/detailPage/trestlePipelineDetail.vue'),
  },
  // 港口企业【人员申请】
  {
    path: '/portEnterprise/personnelApplication',
    name: 'portpersonnelApplication',
    component: () => import('@/views/portEnterprise/personnelApplication/page.vue'),
  },
  // 港口企业【人员审批】
  {
    path: '/portEnterprise/personnelApproval',
    name: 'portpersonnelApproval',
    component: () => import('@/views/portEnterprise/personnelApproval/page.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "articles" */ '@/views/404.vue'),
  },
  // {
  //   path: "/developer",
  //   name: "Developer",
  //   component: () => import(/* webpackChunkName: "articles" */ "../views/portal/developer-center.vue")
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
