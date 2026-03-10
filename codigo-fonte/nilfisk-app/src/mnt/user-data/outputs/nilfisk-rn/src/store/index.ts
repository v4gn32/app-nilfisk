import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import pedidosReducer from './slices/pedidosSlice';
import fretesReducer from './slices/fretesSlice';
import relatoriosReducer from './slices/relatoriosSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pedidos: pedidosReducer,
    fretes: fretesReducer,
    relatorios: relatoriosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
