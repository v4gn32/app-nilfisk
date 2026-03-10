import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_CONFIG} from '@constants/index';

// ─── AXIOS INSTANCE ──────────────────────────────────────────────────────────
const api: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ─── REQUEST INTERCEPTOR ─────────────────────────────────────────────────────
api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@nilfisk:token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// ─── RESPONSE INTERCEPTOR ────────────────────────────────────────────────────
api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      await AsyncStorage.multiRemove(['@nilfisk:token', '@nilfisk:user']);
      // Dispatch logout action via store if needed
    }
    return Promise.reject(error);
  },
);

// ─── AUTH SERVICE ─────────────────────────────────────────────────────────────
export const authService = {
  login: (email: string, password: string) =>
    api.post('/auth/login', {email, password}),

  logout: () =>
    api.post('/auth/logout'),

  changePassword: (currentPassword: string, newPassword: string) =>
    api.post('/auth/change-password', {currentPassword, newPassword}),

  forgotPassword: (email: string) =>
    api.post('/auth/forgot-password', {email}),
};

// ─── PEDIDOS SERVICE ─────────────────────────────────────────────────────────
export const pedidosService = {
  listar: (params?: Record<string, any>) =>
    api.get('/pedidos', {params}),

  buscarPorId: (id: number) =>
    api.get(`/pedidos/${id}`),

  criar: (data: any) =>
    api.post('/pedidos', data),

  atualizar: (id: number, data: any) =>
    api.put(`/pedidos/${id}`, data),

  salvarOficina: (id: number, data: any) =>
    api.post(`/pedidos/${id}/oficina`, data),

  salvarEmbalagem: (id: number, data: any) =>
    api.post(`/pedidos/${id}/embalagem`, data),

  salvarChecklist: (id: number, data: any) =>
    api.post(`/pedidos/${id}/checklist`, data),

  finalizarEmbalagem: (id: number, data: any) =>
    api.post(`/pedidos/${id}/finalizar-embalagem`, data),
};

// ─── FOTOS SERVICE ────────────────────────────────────────────────────────────
export const fotosService = {
  uploadFoto: (pedidoId: number, tipo: string, formData: FormData) =>
    api.post(`/pedidos/${pedidoId}/fotos`, formData, {
      headers: {'Content-Type': 'multipart/form-data'},
    }),

  listarFotos: (pedidoId: number) =>
    api.get(`/pedidos/${pedidoId}/fotos`),

  deletarFoto: (pedidoId: number, fotoId: number) =>
    api.delete(`/pedidos/${pedidoId}/fotos/${fotoId}`),
};

// ─── FRETE SERVICE ────────────────────────────────────────────────────────────
export const freteService = {
  criar: (pedidoId: number, data: any) =>
    api.post(`/pedidos/${pedidoId}/frete`, data),

  atualizar: (freteId: number, data: any) =>
    api.put(`/fretes/${freteId}`, data),

  registrarOcorrencia: (freteId: number, data: any) =>
    api.post(`/fretes/${freteId}/ocorrencia`, data),

  registrarEntrega: (freteId: number, formData: FormData) =>
    api.post(`/fretes/${freteId}/entrega`, formData, {
      headers: {'Content-Type': 'multipart/form-data'},
    }),
};

// ─── CLIENTES SERVICE ─────────────────────────────────────────────────────────
export const clientesService = {
  listar: () => api.get('/clientes'),
  criar: (data: any) => api.post('/clientes', data),
  atualizar: (id: number, data: any) => api.put(`/clientes/${id}`, data),
};

// ─── TRANSPORTADORAS SERVICE ──────────────────────────────────────────────────
export const transportadorasService = {
  listar: () => api.get('/transportadoras'),
  criar: (data: any) => api.post('/transportadoras', data),
  atualizar: (id: number, data: any) => api.put(`/transportadoras/${id}`, data),
};

// ─── USUARIOS SERVICE ─────────────────────────────────────────────────────────
export const usuariosService = {
  listar: () => api.get('/usuarios'),
  criar: (data: any) => api.post('/usuarios', data),
  atualizar: (id: number, data: any) => api.put(`/usuarios/${id}`, data),
};

// ─── RELATORIOS SERVICE ───────────────────────────────────────────────────────
export const relatoriosService = {
  dashboard: () => api.get('/relatorios/dashboard'),
  entregas: (params?: any) => api.get('/relatorios/entregas', {params}),
  tempos: (params?: any) => api.get('/relatorios/tempos', {params}),
  fretes: (params?: any) => api.get('/relatorios/fretes', {params}),
  ocorrencias: (params?: any) => api.get('/relatorios/ocorrencias', {params}),
};

export default api;
