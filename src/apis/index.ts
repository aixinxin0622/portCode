import { ref, onUnmounted, watchEffect, Ref } from 'vue';
import { ElMessage, LoadingOptionsResolved, ElLoading } from 'element-plus';
// import { useUserStore } from '@/store/user.ts';
import { Api, HttpResponse, RequestParams } from './apis';
// import router from '@/router';
// const store = useUserStore();

export * from './apis';

export const baseUrl = '/ghm/api';

// export const getToken = () => {
//   const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
//   return userInfo.token;
// };

export const api = new Api({
  baseUrl, /// api-test
  baseApiParams: { format: 'json' },
  customFetch: async (...fetchParams: Parameters<typeof fetch>) => {
    const res = await fetch(...fetchParams);

    if (res.status === 401) {
      // localStorage.removeItem('userInfo');
      // localStorage.removeItem('token');
      // router.push('/login');
    }

    return res;
  },
});

type BaseFunc<
  T = any,
  E = any,
  P extends
    | [RequestParams]
    | [never, RequestParams]
    | [never, never, RequestParams]
    | [never, never, never, RequestParams]
    | [never, never, never, never, RequestParams] = any,
> = (...args: P) => Promise<HttpResponse<T, E>>;

/**
 * vue hooks 接口请求
 * @param options 配置参数
 * @param fetchApi 请求接口
 * @param params 接口请求参数
 */
export function useFetch<TFunc extends BaseFunc>(
  options: {
    /* 是否跳过第一次请求 */
    lazy?: boolean;
    /* 自动请求 */
    autoFetch?: boolean;
    /* 是否全局提示错误信息 */
    errorPrompt?: boolean;
    /* 自定义请求错误处理 */
    onError?: (e: any) => void;
    onSuccess?: (data: Awaited<ReturnType<TFunc>>['data']) => void;
    onFinally?: () => void;
    /* 是否需要全屏 loading */
    loading?: LoadingOptionsResolved | boolean;
  },
  /* 最后一个参数必须给默认值 {}
   * (a: string, params: RequestParams = {}) => any
   */
  fetchApi: TFunc,
  ...params: Parameters<TFunc> | []
) {
  const opts = { autoFetch: false, lazy: true, errorPrompt: true, ...options };
  const data: Ref<Awaited<ReturnType<TFunc>>['data'] | undefined> =
    ref<Awaited<ReturnType<TFunc>>['data']>(null);
  const loading = ref(false);
  const error = ref<any>(null);
  let controller: AbortController;
  let loadingInstance: ReturnType<typeof ElLoading.service>;

  const fetch = (...args: Parameters<TFunc>) => {
    // 解决异步请求竞态问题
    if (controller) {
      controller.abort();
    }
    controller = new AbortController();

    if (loadingInstance) {
      loadingInstance.close();
    }

    if (opts.loading) {
      loadingInstance = ElLoading.service({
        fullscreen: true,
        lock: true,
        ...(opts.loading === true ? {} : opts.loading),
      });
    }

    // TODO: 类型推导有问题，目前没法限制最后一个参数必须是 RequestParams，https://github.com/microsoft/TypeScript/issues/30134
    (args as any)[fetchApi.length] ??= {};
    (args as any)[fetchApi.length].signal = controller.signal;

    loading.value = true;

    return fetchApi(...(args as [RequestParams]))
      .then(res => {
        data.value = res.data;
        opts.onSuccess?.(res.data);
        return res;
      })
      .catch(e => {
        error.value = e;
        if (opts.onError) {
          opts?.onError(e);
        } else if (opts.errorPrompt && e.code !== 20) {
          // code 20 是取消请求错误
          ElMessage.error(e.message || e.error?.msg || '请求出错，稍后重试！');
        }
        return undefined;
      })
      .finally(() => {
        opts.onFinally?.();
        loading.value = false;
        loadingInstance?.close();
      }) as Promise<Awaited<ReturnType<TFunc>> | undefined>;
  };

  onUnmounted(() => {
    // 组件卸载时取消为请求完的请求
    controller?.abort();
  });

  watchEffect(() => {
    if (opts.autoFetch) fetch(...(params as unknown as any));
  });

  if (!opts.lazy) fetch(...(params as unknown as any));

  return { data, loading, error, fetch };
}
