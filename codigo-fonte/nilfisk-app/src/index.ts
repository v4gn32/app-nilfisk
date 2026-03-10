// ─── COLORS ──────────────────────────────────────────────────────────────────
export const COLORS = {
  dark: '#28313F',
  light: '#EFF0F2',
  green: '#38C682',
  gray: '#797979',
  blue: '#004AAD',

  // Semantic
  error: '#E74C3C',
  warning: '#F39C12',
  success: '#38C682',
  info: '#004AAD',

  // Neutrals
  white: '#FFFFFF',
  background: '#EFF0F2',
  border: 'rgba(40,49,63,0.12)',
  shadow: 'rgba(0,0,0,0.08)',

  // Status colors
  statusTransporte: '#004AAD',
  statusEntregue: '#38C682',
  statusOcorrencia: '#F39C12',
  statusSinistro: '#E74C3C',
  statusEmbalagem: '#F39C12',
  statusOficina: '#797979',
  statusProntoEnvio: '#38C682',
} as const;

// ─── TYPOGRAPHY ───────────────────────────────────────────────────────────────
export const FONTS = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
} as const;

export const FONT_SIZES = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 22,
  xxxl: 28,
} as const;

// ─── SPACING ─────────────────────────────────────────────────────────────────
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// ─── BORDER RADIUS ───────────────────────────────────────────────────────────
export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 999,
} as const;

// ─── API CONFIG ──────────────────────────────────────────────────────────────
export const API_CONFIG = {
  BASE_URL: 'https://api.nilfisk-logistica.com.br/v1',
  TIMEOUT: 30000,
} as const;

// ─── USER ROLES ──────────────────────────────────────────────────────────────
export const USER_ROLES = {
  ADMIN: 'admin',
  ENTRADA: 'entrada_pedido',
  LOGISTICA: 'logistica',
} as const;

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];

// ─── OPERATION TYPES ─────────────────────────────────────────────────────────
export const OPERATION_TYPES = ['Saída', 'Retorno', 'Locação', 'Venda', 'Demo'] as const;
export type OperationType = typeof OPERATION_TYPES[number];

// ─── PROCESS STATUS ──────────────────────────────────────────────────────────
export const PROCESS_STATUS = {
  PEDIDO_CADASTRADO: 'pedido_cadastrado',
  EM_OFICINA: 'em_oficina',
  EM_EMBALAGEM: 'em_embalagem',
  PRONTO_ENVIO: 'pronto_envio',
  EM_TRANSPORTE: 'em_transporte',
  ENTREGUE: 'entregue',
  OCORRENCIA: 'ocorrencia',
  SINISTRO: 'sinistro',
} as const;

export type ProcessStatus = typeof PROCESS_STATUS[keyof typeof PROCESS_STATUS];

// ─── OCCURRENCE REASONS ──────────────────────────────────────────────────────
export const OCCURRENCE_REASONS = [
  'Avaria',
  'Atraso',
  'Extravio',
  'Entrega recusada',
  'Cliente ausente',
  'Erro de documentação',
] as const;

export type OccurrenceReason = typeof OCCURRENCE_REASONS[number];

// ─── CHECKLIST ITEMS ─────────────────────────────────────────────────────────
export const CHECKLIST_ITEMS = [
  'Cabo carregamento',
  'Escova',
  'Suporte de disco',
  'Disco abrasivo',
  'Carregador',
  'Chave',
  'Saia',
  'Rodo',
  'Manual',
  'Confirmação de número de série',
  'Confirmação de quantidade',
] as const;

export type ChecklistItem = typeof CHECKLIST_ITEMS[number];
