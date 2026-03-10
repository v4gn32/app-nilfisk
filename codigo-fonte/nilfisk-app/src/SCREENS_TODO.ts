/**
 * TELAS RESTANTES — IMPLEMENTAR
 *
 * Todas essas telas seguem os padrões estabelecidos nos arquivos de exemplo.
 * Use ScreenHeader, Input, Button, Card dos componentes comuns.
 * Use hooks useAppDispatch e useAppSelector para Redux.
 */

// ─── PEDIDOS ─────────────────────────────────────────────────────────────────
// src/screens/pedidos/NovoPedidoScreen.tsx
//   Campos: numeroPedido, numeroNF, numeroNFRetorno, clienteId, contatoEmail, vendedor
//   Submit: dispatch(criarPedido(data)) → navigate('TipoOperacao', {pedidoId})

// src/screens/pedidos/TipoOperacaoScreen.tsx
//   Seleção: Saída | Retorno | Locação | Venda | Demo (OPERATION_TYPES)
//   Submit: dispatch(atualizar) → navigate('SetupProcesso', {pedidoId})

// src/screens/pedidos/SetupProcessoScreen.tsx
//   Toggle: Oficina ON/OFF, Embalagem ON/OFF
//   Navega condicionalmente: oficina → OficinaScreen, senão → EmbalagemScreen

// src/screens/pedidos/OficinaScreen.tsx
//   Campo: dataEntrada (DatePicker)
//   Submit: dispatch(salvarOficina) → navigate('Embalagem', {pedidoId})

// src/screens/pedidos/EmbalagemScreen.tsx
//   Campos: numeroSerie, acessorios, observacoes
//   Submit: dispatch(salvarEmbalagem) → navigate('Checklist', {pedidoId})

// src/screens/pedidos/FotosMaquinaScreen.tsx
//   Fotos obrigatórias: maquina_completa, acessorios, maquina_embalada
//   Usa launchCamera() do react-native-image-picker
//   dispatch(uploadFoto) para cada foto
//   navigate('FinalizacaoEmbalagem', {pedidoId}) quando todas 3 tiradas

// src/screens/pedidos/FinalizacaoEmbalagemScreen.tsx
//   Campo: dataFinalEmbalagem
//   Status automático: PRONTO_ENVIO
//   Exibe card verde de confirmação
//   Botão: "Concluir" → volta para Home

// ─── LOGÍSTICA ───────────────────────────────────────────────────────────────
// src/screens/logistica/EntregasListScreen.tsx
//   Lista pedidos com status PRONTO_ENVIO e fretes ativos
//   Filtros por status: transporte | entregue | ocorrencia | sinistro
//   Cada item → navigate('FreteInfo', {pedidoId}) ou detalhes do frete

// src/screens/logistica/FreteInfoScreen.tsx
//   Campos: tipoFrete, dataColeta, previsaoEntrega, valorFrete,
//           transportadoraId, placaVeiculo, nomeMotorista, observacoes
//   Submit: dispatch(criarFrete) → navigate('StatusTransporte', {freteId})

// src/screens/logistica/StatusTransporteScreen.tsx
//   Exibe status atual do frete
//   Botões de ação:
//     → "Registrar Entrega" → navigate('Entrega', {freteId})
//     → "Registrar Ocorrência" → navigate('Ocorrencia', {freteId})
//     → "Registrar Sinistro" → modal de confirmação + dispatch

// src/screens/logistica/EntregaScreen.tsx
//   Campos: dataEntrega (obrigatório)
//   Fotos obrigatórias: canhoto da NF, CTe
//   Submit: dispatch(registrarEntrega) → email automático enviado pelo backend
//   Exibe confirmação com badge verde

// ─── COMPARTILHADAS ──────────────────────────────────────────────────────────
// src/screens/shared/HomeScreen.tsx
//   Renderiza dashboard conforme user.role:
//     admin    → DashboardAdmin (6 KPIs: total, enviados, entregues, atrasos, sinistros, custo)
//     entrada  → DashboardEntrada (3 cards: cadastrados, em oficina, em embalagem)
//     logistica→ DashboardLogistica (3 cards: transporte, atrasadas, finalizadas)
//   Botão FAB "Novo Processo" → PedidosNavigator ou FreteInfo conforme role

// src/screens/shared/RelatoriosScreen.tsx
//   Apenas para admin
//   Cards KPI, barras de progresso, gráfico de custo por mês
//   dispatch(fetchRelatorios) no useEffect

// src/screens/shared/PerfilScreen.tsx
//   Exibe dados do usuário logado
//   Admin: menu com Usuários, Clientes, Transportadoras
//   Todos: Alterar senha, Notificações, Sobre
//   Botão sair → dispatch(logoutThunk)

// ─── ADMIN ───────────────────────────────────────────────────────────────────
// src/screens/admin/UsuariosScreen.tsx
//   CRUD de usuários (admin only)

// src/screens/admin/ClientesScreen.tsx
//   CRUD de clientes

// src/screens/admin/TransportadorasScreen.tsx
//   CRUD de transportadoras
