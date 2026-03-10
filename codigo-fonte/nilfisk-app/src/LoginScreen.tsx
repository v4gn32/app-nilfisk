import React, {useState} from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  KeyboardAvoidingView, Platform, ScrollView, Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import {loginThunk, clearError} from '@store/slices/authSlice';
import {Input, Button} from '@components/common';
import {COLORS, FONTS, FONT_SIZES, SPACING} from '@constants/index';

export function LoginScreen() {
  const dispatch = useAppDispatch();
  const {isLoading, error} = useAppSelector(state => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Preencha email e senha.');
      return;
    }
    dispatch(loginThunk({email, password}));
  };

  const handleForgotPassword = () => {
    Alert.prompt('Recuperar senha', 'Digite seu email:', async email => {
      // Call API forgot password
      Alert.alert('Email enviado', 'Verifique sua caixa de entrada.');
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.topSection}>
        <Text style={styles.welcomeText}>Bem-vindo</Text>
        <Text style={styles.subtitleText}>Faça login para continuar</Text>
      </View>

      <ScrollView style={styles.formSection} contentContainerStyle={styles.formContent}>
        {error && (
          <View style={styles.errorBanner}>
            <Text style={styles.errorBannerText}>{error}</Text>
          </View>
        )}

        <Input
          label="Email"
          placeholder="seu@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          required
        />

        <Input
          label="Senha"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          required
        />

        <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotButton}>
          <Text style={styles.forgotText}>Esqueci a senha</Text>
        </TouchableOpacity>

        <Button
          label="Entrar"
          onPress={handleLogin}
          isLoading={isLoading}
          style={styles.loginButton}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.dark},
  topSection: {
    paddingTop: 80,
    paddingBottom: SPACING.xl,
    paddingHorizontal: SPACING.xl,
  },
  welcomeText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 28,
  },
  subtitleText: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.md,
    marginTop: 4,
  },
  formSection: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  formContent: {
    padding: SPACING.xl,
    gap: SPACING.md,
  },
  forgotButton: {alignSelf: 'flex-end'},
  forgotText: {
    color: COLORS.blue,
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.sm,
  },
  loginButton: {marginTop: SPACING.sm},
  errorBanner: {
    backgroundColor: `${COLORS.error}15`,
    borderRadius: 12,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  errorBannerText: {
    color: COLORS.error,
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.sm,
  },
});
