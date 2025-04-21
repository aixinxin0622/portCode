// /** 请求鉴权token */
// export interface tokenParam {
//   /** 应用AK */
//   clientId?: string;
//   /** 安全码，生成规则见安全码生成说明 */
//   secret?: string;
//   /** 时间戳13位字符串 */
//   time?: string;
// }

// /** 请求鉴权token返回数据 */
// export interface tokenResult {
//   /** 消息状态码, 200为正常 */
//   code?: number;
//   /** 消息内容 */
//   msg?: string;
//   /** 数据 */
//   data?: object;
// }

// export interface sceneInfoParam {
//   sfzhm?: string;
//   sjhm?: string;
//   xm?: string;
// }

// /** 请求单个生码 */
// export interface singleApplyParam {
//   /** 授权token */
//   token?: string;
//   /** 客户端id */
//   clientId?: string;
//   sceneInfo?: sceneInfoParam;
// }

// /** 单个生码返回数据 */
// export interface singleApplyResult {
//   /** 消息状态码, 200为正常 */
//   code?: number;
//   /** 消息内容 */
//   msg?: string;
//   /** 数据 */
//   data?: string;
// }

// /** 请求用户信息参数 */
// export interface userInfoParam {
//   /** 授权token */
//   token?: string;
//   /** 客户端id */
//   clientId?: string;
//   userMark?: string;
// }

// export interface userInfo {
//   /** 用户名 */
//   username?: string;
//   /** 昵称 */
//   nickname?: string;
//   /** 证件号 */
//   card?: string;
//   /** 手机号 */
//   phone?: string;
//   /** 用户标识 */
//   userMark?: string;
// }

// /** 用户信息返回数据 */
// export interface userInfoResult {
//   /** 消息内容 */
//   msg?: string;
//   /** 消息状态码, 200为正常 */
//   code?: number;
//   data?: userInfo;
// }

export interface RVoid {
  /** 消息状态码, 200为正常 */
  code?: number;
  /** 消息内容 */
  msg?: string;
  /** 数据 */
  data?: object;
}

// 【航运企业】【港口企业】请求参数
export interface hygkqybParam {
  businessLicenceNo?: string;
}

export interface basicInfo {
  /** 接口文档提供字段 */

  /** 船舶代理企业首次取得经营许可证日期 */
  // agentEstablishDate?: string;
  /** 船舶管理企业首次取得经营许可证日期 */
  // shipEstablishDate?: string;
  /** 水路运输企业首次取得经营许可证日期 */
  waterwayEstablishDate?: string;
  /** 自有高级船员比例 */
  crewProportion?: string;
  /** 联系人固定电话(安全管理人员固定电话) */
  // contactPhone?: string;
  /** 企业联系电话(乡镇专职安全管理人员) */
  contactTelephone?: string;
  /** 办公电话 */
  contactPhone?: string;
  /** 企业联系人(乡镇专职安全管理人员) */
  contact?: string;
  /** 法人联系电话 */
  corporationTelephone?: string;
  /** 法人代表 */
  corporation?: string;
  /** 船舶管理企业岸基人数 */
  // shipShoreBasedNumber?: string;
  /** 水路运输企业岸基人数 */
  waterwayShoreBasedNumber?: number;
  /** 港口企业经济类型名称 */
  // portEconomySecName?: string;
  /** 航运企业经济类型名称 */
  sailEconomySecName?: string;
  /** 工商企业经济类型 */
  // industryEconomySecName?: string;
  /** 统一社会信用代码(企业法人营业执照号) */
  businessLicenceNo?: string;
  /** 企业名称 */
  companyName?: string;
  /** 注册地名称 */
  registeredAddressTypeName?: string;
  /** 注册地详细地址 */
  registeredAddressDetail?: string;
  /** 办公地址 */
  companyAddress?: string;
  /** 注册资本 */
  registeredCapital?: number;

  /** 实际接口返回字段新增 */
  /** 水路运输企业ID */
  waterCompanyId?: string;
  /** 船舶管理企业 */
  shipCompanyId?: string;
  /** 船舶代理企业ID */
  agentCompanyId?: string;
  /** 港口经营企业ID */
  baseCompanyId?: string;
  /** 港口服务企业ID */
  portserviceCompanyId: string;
  /** 理货企业ID */
  tallyCompanyId: string;

  /** 【航运企业】实际接口返回字段新增 */
  registeredAddress?: string;
  sailEconomySecType?: string;
  /** 航运船舶表 */
  dwdTSailShip?: any;
  /** 航运船舶表-国内运输营运证书情况 */
  dwdTSailShioBuscartGn?: any;
  /** 水路运输企业许可备案信息 */
  dwdTSailWaterwayCertificate?: any;
  /** 水路运输企业经营状况 */
  dwdTSailWaterwayJyzk?: any;
  /** 船舶运力情况 */
  dwdTSailYl?: any;
  /** 水路运输企业安全管理体系 */
  dwdTSailWaterwaySecuritySystem?: any;
  /** 水路运输企业安全生产标准化 */
  dwdTSailWaterwayStandardSituation?: any;
  /** 航运企业投资人信息表 */
  sailInvestor?: any;
  /** 航运企业从业人员信息表 */
  sailKeymanagers?: any;
  /** 国内运营证书情况 */
  dwdTSailShipBuscartGn?: any;
  /** 船舶产权情况 */
  dwdTSailShipOwner?: any;

  /** 【港口企业】实际接口返回字段新增 */
  /** 码头泊位信息 */
  dwdTBaseBerth?: any;
  /** 港口经营信息 */
  dwdTBaseBusinessInfomation?: any;
  /** 港口许可证信息 */
  dwdTBaseBusinessPermission?: any;
  /** 从业人员证书信息 */
  dwdTBaseEmployeeCerInfo?: any;
  /** 从业人员信息 */
  dwdTBaseEmployeeInfo?: any;
  /** 储罐信息 */
  dwdTBaseTankInfo?: any;
  /** 安全生产信息 */
  dwdTBaseProductionInfo?: any;
  /** 栈桥管道信息 */
  dwdTBaseTrestle?: any;
  /** 仓库信息 */
  dwdTBaseWarehouse?: any;
  /** 港作船舶信息 */
  dwdTPortserviceGzcb?: any;
  /** 港口企业经济类型名称 */
  portEconomySecName?: string;
}

export interface hygkqybInfo {
  rows?: Array<basicInfo>;
}

// 【航运企业】【港口企业】返回参数
export interface hygkqybResult {
  data?: hygkqybInfo;
  status?: number;
}

// 企业用户扫码请求参数
export interface qyyhsmParam {
  /** 用户标识 */
  userMark: string;
  /** 用户手机号 */
  userTelephone?: string;
  /** 用户姓名 */
  userName?: string;
  /** 企业编号 */
  businessLicenceNo: string;
}

export interface qyyhsmInfo1 {
  /** 企业类型：0港口企业，1航运企业 */
  companyTypes?: string;
  /** 用户类型：0公众，1企业，2管理 */
  userType?: string;
  /** 企业信息列表 */
  companyInfoList?: Array<basicInfo>;
}

export interface qyyhsmInfo2 {
  rows?: qyyhsmInfo1;
}

export interface qyyhsmResult {
  data?: qyyhsmInfo2;
  status?: number;
}

/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** 航运港口企业表 */
  baseUrl?: string;
  /**舟到码 */
  zdmUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://zdm.zhoushan.gov.cn:9082/gateway/';
  public zdmUrl: string = 'http://10.46.7.54:7893/prod-api/';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key]);
    return keys
      .map(key =>
        Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async response => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch(e => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title 航运港口企业表
 * @baseUrl http://10.46.7.54:7893/prod-api/inter/api/hygkqyb
 *
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  hygkqyb = {
    /**
     * No description
     *
     * @name getHygkqyb
     * @summary 获取鉴权token接口
     * @request get:/api/zdm/appInfo/getToken
     * @secure
     */
    getHygkqyb: (data: hygkqybParam, params: RequestParams = {}) =>
      this.request<hygkqybResult, RVoid>({
        path: `/inter/api/hygkqyb`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
    getQyyhsm: (data: qyyhsmParam, params: RequestParams = {}) =>
      this.request<qyyhsmResult, RVoid>({
        path: `/inter/api/qyyhsm`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
}
