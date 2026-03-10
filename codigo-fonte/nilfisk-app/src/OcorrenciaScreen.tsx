import React, {useState} from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import {registrarOcorrencia} from '@store/slices/fretesSlice';
import {ScreenHeader, Input, Button} from '@components/common';
import {COLORS, FONTS, FONT_SIZES, SPACING, RADIUS, OCCURRENCE_REASONS, OccurrenceReason} from '@constants/index';

export function OcorrenciaScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const dispatch = useAppDispatch();
  const {isSaving} = useAppSelector(state => state.fretes);
  const {freteId} = route.params;

  const [motivo, setMotivo] = useState<OccurrenceReason | ''>('');
  const [custoAdicional, setCustoAdicional] = useState('');
  const [solucaoAplicada, setSolucaoAplicada] = useState('');

  const handleSalvar = async () => {
    if (!motivo) {
      Alert.alert('Atenção', 'Selecione o motivo da ocorrência.');
      return;
    }
    const result = await dispatch(registrarOcorrencia({
      freteId,
      data: {motivo, custoAdicional: parseFloat(custoAdicional) || 0, solucaoAplicada},
    }));
    if (registrarOcorrencia.fulfilled.match(result)) {
      Alert.alert('Ocorrência registrada', 'A ocorrência foi salva com sucesso.', [
        {text: 'OK', onPress: () => navigation.goBack()},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Registrar Ocorrência"
        subtitle="Informe o motivo e solução"
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>MOTIVO DA OCORRÊNCIA *</Text>
        {OCCURRENCE_REASONS.map(reason => (
          <TouchableOpacity
            key={reason}
            onPress={() => setMotivo(reason)}
            style={[
              styles.reasonItem,
              motivo === reason && styles.reasonItemSelected,
            ]}>
            <View style={[
              styles.radio,
              motivo === reason && styles.radioSelected,
            ]}>
              {motivo === reason && <View style={styles.radioDot} />}
            </View>
            <Text style={[
              styles.reasonText,
              motivo === reason && styles.reasonTextSelected,
            ]}>
              {reason}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={styles.divider} />

        <Input
          label="Custo adicional (R$)"
          placeholder="0,00"
          value={custoAdicional}
          onChangeText={setCustoAdicional}
          keyboardType="decimal-pad"
        />

        <Input
          label="Solução aplicada"
          placeholder="Descreva a solução..."
          value={solucaoAplicada}
          onChangeText={setSolucaoAplicada}
          multiline
        />

        <View style={styles.warningCard}>
          <Text style={styles.warningText}>
            ⚠️ Após registrar a ocorrência, o status do frete será atualizado automaticamente.
          </Text>
        </View>

        <Button
          label="Registrar Ocorrência"
          onPress={handleSalvar}
          variant="danger"
          isLoading={isSaving}
          style={{marginTop: SPACING.sm}}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.light},
  content: {padding: SPACING.md, gap: SPACING.md, paddingBottom: 40},
  sectionTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: FONT_SIZES.xs,
    color: COLORS.dark,
    letterSpacing: 0.5,
  },
  reasonItem: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  reasonItemSelected: {
    borderColor: COLORS.warning,
    backgroundColor: `${COLORS.warning}08`,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {borderColor: COLORS.warning},
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.warning,
  },
  reasonText: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.md,
    color: COLORS.gray,
  },
  reasonTextSelected: {
    color: COLORS.dark,
    fontFamily: FONTS.semiBold,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.07)',
    marginVertical: SPACING.sm,
  },
  warningCard: {
    backgroundColor: `${COLORS.warning}15`,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: `${COLORS.warning}40`,
  },
  warningText: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.sm,
    color: COLORS.warning,
    lineHeight: 20,
  },
});
