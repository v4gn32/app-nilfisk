import {UserRole, ProcessStatus, OperationType, OccurrenceReason, ChecklistItem} from '@constants/index';

// ─── AUTH ─────────────────────────────────────────────────────────────────────
export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  mustChangePassword: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

// ─── PEDIDO ──────────────────────────────────────────────────────────────────
export interface Pedido {
  id: number;
  numeroPedido: string;
  numeroNF: string;
  numeroNFRetorno?: string;
  clienteId: number;
  cliente: Cliente;
  contatoEmail: string;
  vendedor: string;
  dataEntrada: string;
  tipoOperacao: OperationType;
  status: ProcessStatus;
  oficina?: Oficina;
  embalagem?: Embalagem;
  frete?: Frete;
  fotos: Foto[];
  createdAt: string;
  updatedAt: string;
}

// ─── CLIENTE ─────────────────────────────────────────────────────────────────
export interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  cnpj?: string;
  endereco?: string;
}

// ─── OFICINA ─────────────────────────────────────────────────────────────────
export interface Oficina {
  id: number;
  pedidoId: number;
  dataEntrada: string;
  dataSaida?: string;
}

// ─── EMBALAGEM ───────────────────────────────────────────────────────────────
export interface Embalagem {
  id: number;
  pedidoId: number;
  numeroSerie: string;
  acessorios?: string;
  observacoes?: string;
  dataFinal?: string;
  checklist: Record<ChecklistItem, boolean>;
}

// ─── FRETE ───────────────────────────────────────────────────────────────────
export interface Frete {
  id: number;
  pedidoId: number;
  tipoFrete: string;
  dataColeta: string;
  previsaoEntrega: string;
  valorFrete: number;
  transportadoraId: number;
  transportadora: Transportadora;
  placaVeiculo: string;
  nomeMotorista: string;
  observacoes?: string;
  status: ProcessStatus;
  ocorrencia?: Ocorrencia;
  entrega?: Entrega;
}

// ─── TRANSPORTADORA ──────────────────────────────────────────────────────────
export interface Transportadora {
  id: number;
  nome: string;
  cnpj?: string;
  contato?: string;
}

// ─── OCORRENCIA ──────────────────────────────────────────────────────────────
export interface Ocorrencia {
  id: number;
  freteId: number;
  motivo: OccurrenceReason;
  custoAdicional?: number;
  solucaoAplicada?: string;
  registradoEm: string;
}

// ─── ENTREGA ─────────────────────────────────────────────────────────────────
export interface Entrega {
  id: number;
  freteId: number;
  dataEntrega: string;
  fotoCanhotoCaminhoUrl?: string;
  fotoCteCaminhoUrl?: string;
  emailEnviado: boolean;
}

// ─── FOTO ─────────────────────────────────────────────────────────────────────
export interface Foto {
  id: number;
  pedidoId: number;
  tipo: 'maquina_completa' | 'acessorios' | 'maquina_embalada' | 'outros';
  url: string;
  tamanho?: number;
}

// ─── API RESPONSES ───────────────────────────────────────────────────────────
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  lastPage: number;
}

// ─── NAVIGATION PARAMS ───────────────────────────────────────────────────────
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  ChangePassword: undefined;
  MainTabs: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Entregas: undefined;
  Relatorios: undefined;
  Perfil: undefined;
};

export type PedidosStackParamList = {
  NovoPedido: undefined;
  TipoOperacao: {pedidoId: number};
  SetupProcesso: {pedidoId: number};
  Oficina: {pedidoId: number};
  Embalagem: {pedidoId: number};
  Checklist: {pedidoId: number};
  FotosMaquina: {pedidoId: number};
  FinalizacaoEmbalagem: {pedidoId: number};
};

export type LogisticaStackParamList = {
  FreteInfo: {pedidoId: number};
  StatusTransporte: {freteId: number};
  Ocorrencia: {freteId: number};
  Entrega: {freteId: number};
};

// ─── DASHBOARD / REPORTS ─────────────────────────────────────────────────────
export interface DashboardStats {
  totalPedidos: number;
  totalEnviados: number;
  totalEntregues: number;
  totalAtrasados: number;
  totalSinistros: number;
  custoTotalFrete: number;
  percentualEntregasNoPrazo: number;
}

export interface ReportData {
  entregasPorStatus: Record<string, number>;
  tempoMedioSeparacao: number;
  tempoMedioOficina: number;
  tempoMedioEmbalagem: number;
  entregasNoPrazo: number;
  custoFretePorMes: {mes: string; valor: number}[];
  numeroOcorrencias: number;
  motivosOcorrencias: Record<string, number>;
  indiceSinistros: number;
}
