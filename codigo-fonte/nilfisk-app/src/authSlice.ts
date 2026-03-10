import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from '@services/api';
import {AuthState} from '@types/index';

// ─── THUNKS ──────────────────────────────────────────────────────────────────
export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({email, password}: {email: string; password: string}, {rejectWithValue}) => {
    try {
      const res = await authService.login(email, password);
      const {token, user} = res.data.data;
      await AsyncStorage.setItem('@nilfisk:token', token);
      await AsyncStorage.setItem('@nilfisk:user', JSON.stringify(user));
      return {token, user};
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Erro ao fazer login');
    }
  },
);

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  await authService.logout().catch(() => {});
  await AsyncStorage.multiRemove(['@nilfisk:token', '@nilfisk:user']);
});

export const changePasswordThunk = createAsyncThunk(
  'auth/changePassword',
  async (
    {currentPassword, newPassword}: {currentPassword: string; newPassword: string},
    {rejectWithValue},
  ) => {
    try {
      await authService.changePassword(currentPassword, newPassword);
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Erro ao alterar senha');
    }
  },
);

// ─── SLICE ───────────────────────────────────────────────────────────────────
const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
    setUserFromStorage: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
  extraReducers: builder => {
    builder
      // Login
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Logout
      .addCase(logoutThunk.fulfilled, state => {
        state.user = null;
        state.token = null;
      })
      // Change password
      .addCase(changePasswordThunk.fulfilled, state => {
        if (state.user) {
          state.user.mustChangePassword = false;
        }
      });
  },
});

export const {clearError, setUserFromStorage} = authSlice.actions;
export default authSlice.reducer;
