import React, {useState} from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import {salvarChecklist} from '@store/slices/pedidosSlice';
import {ScreenHeader, StepProgress, Button, Card} from '@components/common';
import {COLORS, FONTS, FONT_SIZES, SPACING, RADIUS, CHECKLIST_ITEMS, ChecklistItem} from '@constants/index';

export function ChecklistScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const dispatch = useAppDispatch();
  const {isSaving} = useAppSelector(state => state.pedidos);
  const {pedidoId} = route.params;

  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(CHECKLIST_ITEMS.map(item => [item, false])),
  );

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const allChecked = totalChecked === CHECKLIST_ITEMS.length;

  const toggleItem = (item: ChecklistItem) => {
    setChecked(prev => ({...prev, [item]: !prev[item]}));
  };

  const handleContinuar = async () => {
    if (!allChecked) {
      Alert.alert('Atenção', 'Todos os itens devem ser marcados para continuar.');
      return;
    }
    const result = await dispatch(salvarChecklist({id: pedidoId, data: {checklist: checked}}));
    if (salvarChecklist.fulfilled.match(result)) {
      navigation.navigate('FotosMaquina', {pedidoId});
    }
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Checklist de Embalagem"
        subtitle="Passo 4 de 5"
        onBack={() => navigation.goBack()}
      />
      <StepProgress current={4} total={5} />

      <ScrollView contentContainerStyle={styles.content}>
        {/* Progress indicator */}
        <View style={[
          styles.progressCard,
          {borderColor: allChecked ? COLORS.green : COLORS.warning},
          {backgroundColor: allChecked ? `${COLORS.green}12` : `${COLORS.warning}12`},
        ]}>
          <Text style={[styles.progressText, {color: allChecked ? COLORS.green : COLORS.warning}]}>
            {allChecked
              ? '✓ Todos os itens verificados!'
              : `${totalChecked} de ${CHECKLIST_ITEMS.length} itens verificados`}
          </Text>
          <View style={styles.progressBarSmall}>
            <View style={[
              styles.progressBarFill,
              {
                width: `${(totalChecked / CHECKLIST_ITEMS.length) * 100}%`,
                backgroundColor: allChecked ? COLORS.green : COLORS.warning,
              },
            ]} />
          </View>
        </View>

        {/* Checklist items */}
        {CHECKLIST_ITEMS.map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => toggleItem(item)}
            activeOpacity={0.8}
            style={[
              styles.checkItem,
              checked[item] && styles.checkItemChecked,
            ]}>
            <View style={[
              styles.checkbox,
              checked[item] && styles.checkboxChecked,
            ]}>
              {checked[item] && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={[
              styles.checkLabel,
              checked[item] && styles.checkLabelChecked,
            ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          label="Continuar para Fotos"
          onPress={handleContinuar}
          variant={allChecked ? 'secondary' : 'primary'}
          isLoading={isSaving}
          disabled={!allChecked}
          style={{opacity: allChecked ? 1 : 0.5}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.light},
  content: {padding: SPACING.md, gap: 10, paddingBottom: 100},
  progressCard: {
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    marginBottom: SPACING.sm,
    gap: 8,
  },
  progressText: {fontFamily: FONTS.semiBold, fontSize: FONT_SIZES.sm},
  progressBarSmall: {
    height: 4,
    backgroundColor: 'rgba(0,0,0,0.08)',
    borderRadius: 2,
  },
  progressBarFill: {height: '100%', borderRadius: 2},
  checkItem: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  checkItemChecked: {
    borderColor: COLORS.green,
    backgroundColor: `${COLORS.green}08`,
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {backgroundColor: COLORS.green},
  checkmark: {color: COLORS.white, fontSize: 14, fontFamily: FONTS.bold},
  checkLabel: {
    flex: 1,
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
  },
  checkLabelChecked: {
    color: COLORS.dark,
    fontFamily: FONTS.semiBold,
  },
  footer: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.06)',
    padding: SPACING.md,
    paddingBottom: 28,
  },
});
