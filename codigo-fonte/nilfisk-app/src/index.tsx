import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {COLORS, FONTS, FONT_SIZES, SPACING, RADIUS} from '@constants/index';

// ─── BUTTON ──────────────────────────────────────────────────────────────────
interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  isLoading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
}

export function Button({label, onPress, variant = 'primary', isLoading, disabled, style}: ButtonProps) {
  const bg = {
    primary: COLORS.dark,
    secondary: COLORS.green,
    danger: COLORS.error,
    outline: 'transparent',
  }[variant];

  const textColor = variant === 'outline' ? COLORS.dark : COLORS.white;
  const borderColor = variant === 'outline' ? COLORS.dark : bg;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      style={[
        styles.button,
        {backgroundColor: disabled ? COLORS.gray : bg, borderColor},
        variant === 'outline' && {borderWidth: 2},
        style,
      ]}>
      {isLoading ? (
        <ActivityIndicator color={COLORS.white} size="small" />
      ) : (
        <Text style={[styles.buttonText, {color: textColor}]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

// ─── INPUT ───────────────────────────────────────────────────────────────────
interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: any;
  multiline?: boolean;
  required?: boolean;
  style?: ViewStyle;
}

export function Input({label, placeholder, value, onChangeText, error, secureTextEntry, keyboardType, multiline, required, style}: InputProps) {
  return (
    <View style={[styles.inputWrapper, style]}>
      {label && (
        <Text style={styles.inputLabel}>
          {label.toUpperCase()}
          {required && <Text style={{color: COLORS.error}}> *</Text>}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          multiline && styles.inputMultiline,
          error ? styles.inputError : null,
        ]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

// ─── CARD ────────────────────────────────────────────────────────────────────
interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

export function Card({children, style, onPress}: CardProps) {
  if (onPress) {
    return (
      <TouchableOpacity style={[styles.card, style]} onPress={onPress} activeOpacity={0.8}>
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={[styles.card, style]}>{children}</View>;
}

// ─── STATUS BADGE ─────────────────────────────────────────────────────────────
interface StatusBadgeProps {
  status: string;
  color: string;
}

export function StatusBadge({status, color}: StatusBadgeProps) {
  return (
    <View style={[styles.badge, {backgroundColor: `${color}18`}]}>
      <Text style={[styles.badgeText, {color}]}>{status}</Text>
    </View>
  );
}

// ─── SCREEN HEADER ────────────────────────────────────────────────────────────
interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export function ScreenHeader({title, subtitle, onBack, rightAction}: ScreenHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        {onBack && (
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
        )}
        <View style={{flex: 1}}>
          {subtitle && <Text style={styles.headerSubtitle}>{subtitle}</Text>}
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        {rightAction}
      </View>
    </View>
  );
}

// ─── LOADING OVERLAY ──────────────────────────────────────────────────────────
export function LoadingOverlay() {
  return (
    <View style={styles.loadingOverlay}>
      <ActivityIndicator color={COLORS.green} size="large" />
    </View>
  );
}

// ─── STEP PROGRESS ───────────────────────────────────────────────────────────
interface StepProgressProps {
  current: number;
  total: number;
}

export function StepProgress({current, total}: StepProgressProps) {
  return (
    <View style={styles.progressBar}>
      <View style={[styles.progressFill, {width: `${(current / total) * 100}%`}]} />
    </View>
  );
}

// ─── STYLES ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  button: {
    borderRadius: RADIUS.md,
    paddingVertical: 16,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: FONTS.semiBold,
    fontSize: FONT_SIZES.md,
  },
  inputWrapper: {
    gap: 6,
  },
  inputLabel: {
    fontFamily: FONTS.semiBold,
    fontSize: FONT_SIZES.xs,
    color: COLORS.dark,
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    paddingHorizontal: SPACING.md,
    paddingVertical: 13,
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.md,
    color: COLORS.dark,
  },
  inputMultiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: COLORS.error,
  },
  errorText: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.sm,
    color: COLORS.error,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  badge: {
    borderRadius: RADIUS.sm,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    fontFamily: FONTS.semiBold,
    fontSize: FONT_SIZES.xs,
  },
  header: {
    backgroundColor: COLORS.dark,
    paddingTop: 56,
    paddingBottom: SPACING.lg,
    paddingHorizontal: SPACING.md,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },
  backButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: RADIUS.md,
    padding: 10,
  },
  backIcon: {
    color: COLORS.white,
    fontSize: 18,
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.xs,
  },
  headerTitle: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: FONT_SIZES.xl,
    marginTop: 2,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  progressBar: {
    height: 3,
    backgroundColor: 'rgba(40,49,63,0.1)',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.green,
    borderRadius: 2,
  },
});
