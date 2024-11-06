import { API_URL } from '@/config';
import {
  ApiResponse,
  GetListParamsType,
  GetOneParamsType,
  UpdateParamsType
} from '@/types';
import { cookies } from 'next/headers';

const createRequestConfig = (method: string, body?: unknown): RequestInit => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    Cookie: cookies().get('session')?.value?.replace(',', '; ') || ''
  },
  body: body ? JSON.stringify(body) : undefined
});

const createUrl = (endpoint: string, params?: Record<string, unknown>): URL => {
  const url = new URL(`${API_URL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (key === 'page' || key === 'limit') {
        url.searchParams.append(key, String(value));
      } else {
        url.searchParams.append(`filter[${key}]`, String(value));
      }
    });
  }

  return url;
};

async function processResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (!response.ok) {
    return {
      data: [] as T,
      ok: false,
      status: response.status,
      headers: response.headers,
      total: 0,
      totalPages: 0,
      currentPage: 0
    };
  }

  const data = await response.json();

  return {
    data: data?.data || data || [],
    ok: response.ok,
    status: response.status,
    headers: response.headers,
    total: data?.total || 0,
    totalPages: data?.totalPages || 0,
    currentPage: data?.currentPage || 0
  };
}

async function request<T>(
  endpoint: string,
  method: string = 'GET',
  options?: {
    params?: Record<string, unknown>;
    body?: unknown;
  }
): Promise<ApiResponse<T>> {
  try {
    const url = createUrl(endpoint, options?.params);
    const config = createRequestConfig(method, options?.body);

    const response = await fetch(url, config);

    return processResponse<T>(response);
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

const dataProvider = {
  async getList<T>(
    resource: string,
    params?: GetListParamsType
  ): Promise<ApiResponse<T>> {
    const { page = 1, limit = 10, sortOrder, ...rest } = params || {};
    const customSortOrder = sortOrder === 'ascending' ? 'asc' : 'desc';

    const queryParams = {
      page,
      limit,
      sortOrder: customSortOrder,
      ...rest
    };

    return request<T>(resource, 'GET', { params: queryParams });
  },

  async getOne<T>(
    resource: string,
    { id }: GetOneParamsType
  ): Promise<ApiResponse<T>> {
    return request<T>(`${resource}/${id}`);
  },

  async create<T>(resource: string, data: unknown): Promise<ApiResponse<T>> {
    return request<T>(resource, 'POST', { body: data });
  },

  async update<T>(
    resource: string,
    { id, data }: UpdateParamsType
  ): Promise<ApiResponse<T>> {
    return request<T>(`${resource}/${id}`, 'PUT', {
      body: { ...data, id }
    });
  },

  async delete<T>(
    resource: string,
    { id }: GetOneParamsType
  ): Promise<ApiResponse<T>> {
    return request<T>(`${resource}/${id}`, 'DELETE');
  },

  async patch<T>(resource: string, data: unknown): Promise<ApiResponse<T>> {
    return request<T>(resource, 'PATCH', { body: data });
  }
};

export default dataProvider;
