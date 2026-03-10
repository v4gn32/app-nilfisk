import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {pedidosService, fotosService} from '@services/api';
import {Pedido} from '@types/index';

interface PedidosState {
  list: Pedido[];
  current: Pedido | null;
  isLoading: boolean;
  isSaving: boolean;
  error: string | null;
}

// ─── THUNKS ──────────────────────────────────────────────────────────────────
export const fetchPedidos = createAsyncThunk(
  'pedidos/fetchAll',
  async (params: any, {rejectWithValue}) => {
    try {
      const res = await pedidosService.listar(params);
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Erro ao carregar pedidos');
    }
  },
);

export const fetchPedidoById = createAsyncThunk(
  'pedidos/fetchById',
  async (id: number, {rejectWithValue}) => {
    try {
      const res = await pedidosService.buscarPorId(id);
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    }
  },
);

export const criarPedido = createAsyncThunk(
  'pedidos/criar',
  async (data: any, {rejectWithValue}) => {
    try {
      const res = await pedidosService.criar(data);
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Erro ao criar pedido');
    }
  },
);

export const salvarOficina = createAsyncThunk(
  'pedidos/salvarOficina',
  async ({id, data}: {id: number; data: any}, {rejectWithValue}) => {
    try {
      const res = await pedidosService.salvarOficina(id, data);
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    }
  },
);

export const salvarEmbalagem = createAsyncThunk(
  'pedidos/salvarEmbalagem',
  async ({id, data}: {id: number; data: any}, {rejectWithValue}) => {
    try {
      const res = await pedidosService.salvarEmbalagem(id, data);
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    }
  },
);

export const salvarChecklist = createAsyncThunk(
  'pedidos/salvarChecklist',
  async ({id, data}: {id: number; data: any}, {rejectWithValue}) => {
    try {
      const res = await pedidosService.salvarChecklist(id, data);
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    }
  },
);

export const uploadFoto = createAsyncThunk(
  'pedidos/uploadFoto',
  async (
    {pedidoId, tipo, formData}: {pedidoId: number; tipo: string; formData: FormData},
    {rejectWithValue},
  ) => {
    try {
      const res = await fotosService.uploadFoto(pedidoId, tipo, formData);
      return res.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message);
    }
  },
);

// ─── SLICE ───────────────────────────────────────────────────────────────────
const pedidosSlice = createSlice({
  name: 'pedidos',
  initialState: {
    list: [],
    current: null,
    isLoading: false,
    isSaving: false,
    error: null,
  } as PedidosState,
  reducers: {
    clearCurrent: state => {
      state.current = null;
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPedidos.pending, state => { state.isLoading = true; })
      .addCase(fetchPedidos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchPedidos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchPedidoById.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(criarPedido.pending, state => { state.isSaving = true; })
      .addCase(criarPedido.fulfilled, (state, action) => {
        state.isSaving = false;
        state.list.unshift(action.payload);
        state.current = action.payload;
      })
      .addCase(criarPedido.rejected, (state, action) => {
        state.isSaving = false;
        state.error = action.payload as string;
      })
      .addCase(salvarOficina.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(salvarEmbalagem.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(salvarChecklist.fulfilled, (state, action) => {
        state.current = action.payload;
      });
  },
});

export const {clearCurrent, clearError} = pedidosSlice.actions;
export default pedidosSlice.reducer;
