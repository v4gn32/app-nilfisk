# 📦 Nilfisk — Gestão Logística App

Aplicativo mobile React Native para controle de fluxo logístico completo de máquinas.

---

## 🚀 Início Rápido

### Pré-requisitos

| Ferramenta | Versão mínima |
|---|---|
| Node.js | 18+ |
| React Native CLI | 0.73+ |
| Android Studio | Hedgehog+ |
| Xcode | 15+ (apenas macOS) |
| JDK | 17 |

### Instalação

```bash
# 1. Clone o projeto
git clone https://github.com/nilfisk/logistics-app.git
cd nilfisk-app

# 2. Instale dependências JS
npm install

# 3. Instale dependências iOS (apenas macOS)
cd ios && pod install && cd ..

# 4. Copie as variáveis de ambiente
cp .env.example .env
# Edite .env com suas configurações

# 5. Rode no Android
npm run android

# 6. Rode no iOS
npm run ios
```

---

## 📁 Estrutura do Projeto

```
nilfisk-app/
├── App.tsx                          # Entry point
├── android/                         # Config Android nativa
├── ios/                             # Config iOS nativa
├── __tests__/                       # Testes unitários
└── src/
    ├── api/                         # Camada de API REST
    │   ├── client.ts                # Axios instance + interceptors
    │   └── index.ts                 # auth, pedidos, frete, fotos, admin
    │
    ├── assets/
    │   ├── fonts/                   # Poppins (Regular, Medium, SemiBold, Bold)
    │   └── images/                  # Logo Nilfisk e ícones
    │
    ├── components/
    │   ├── common/                  # Button, Input, StatusBadge, FAB, Header
    │   ├── forms/                   # FormField, DatePicker, Selector
    │   └── cards/                   # PedidoCard, FreteCard, OcorrenciaCard
    │
    ├── contexts/
    │   └── AuthContext.tsx          # Auth state + login/logout
    │
    ├── hooks/
    │   ├── useAppDispatch.ts
    │   ├── useAppSelector.ts
    │   ├── usePedidos.ts
    │   ├── useCamera.ts
    │   └── useChecklist.ts
    │
    ├── navigation/
    │   ├── RootNavigator.tsx        # Auth vs App stack
    │   ├── MainTabNavigator.tsx     # Bottom tabs
    │   ├── HomeNavigator.tsx        # Role-based home routing
    │   └── EntregasNavigator.tsx
    │
    ├── screens/
    │   ├── auth/
    │   │   ├── WelcomeScreen.tsx    # Logo + Botão Entrar
    │   │   ├── LoginScreen.tsx      # Email / Senha / Esqueci senha
    │   │   └── ChangePasswordScreen.tsx  # Troca obrigatória no 1º login
    │   │
    │   ├── admin/
    │   │   ├── AdminDashboard.tsx   # KPIs + todos os processos
    │   │   ├── GerenciarUsuarios.tsx
    │   │   ├── GerenciarClientes.tsx
    │   │   └── GerenciarTransportadoras.tsx
    │   │
    │   ├── entrada/                 # Fluxo Usuário Entrada de Pedido
    │   │   ├── EntradaDashboard.tsx
    │   │   ├── NovoPedidoScreen.tsx
    │   │   ├── TipoOperacaoScreen.tsx
    │   │   ├── SetupProcessoScreen.tsx
    │   │   ├── OficinaScreen.tsx
    │   │   ├── EmbalagemScreen.tsx
    │   │   ├── ChecklistScreen.tsx   # Bloqueio até 11/11 marcados
    │   │   ├── FotosMaquinaScreen.tsx
    │   │   └── FinalizacaoEmbalagemScreen.tsx
    │   │
    │   ├── logistica/               # Fluxo Usuário Logística
    │   │   ├── LogisticaDashboard.tsx
    │   │   ├── InformacoesFretesScreen.tsx
    │   │   ├── StatusTransporteScreen.tsx
    │   │   ├── RegistrarEntregaScreen.tsx
    │   │   └── RegistrarOcorrenciaScreen.tsx
    │   │
    │   └── shared/                  # Acessíveis por todos os perfis
    │       ├── EntregasListScreen.tsx
    │       ├── EntregaDetalheScreen.tsx
    │       ├── RelatoriosScreen.tsx
    │       └── PerfilScreen.tsx
    │
    ├── services/
    │   ├── notificacao.service.ts   # Email automático pós-entrega
    │   └── storage.service.ts       # MMKV wrapper
    │
    ├── store/
    │   ├── index.ts                 # Redux store
    │   └── slices/
    │       ├── authSlice.ts
    │       ├── pedidosSlice.ts
    │       ├── fretesSlice.ts
    │       └── relatoriosSlice.ts
    │
    ├── theme/
    │   └── index.ts                 # Colors, Typography, Spacing, Shadow
    │
    ├── types/
    │   └── index.ts                 # Todas as interfaces TypeScript
    │
    └── utils/
        ├── formatters.ts            # datas, moeda, dias de atraso
        ├── validators.ts            # email, placa, senha forte
        └── constants.ts            # checklist, tipos, motivos
```

---

## 👥 Controle de Acesso

| Perfil | Acesso |
|---|---|
| **Administrador** | Tudo: usuários, clientes, transportadoras, relatórios completos |
| **Entrada de Pedido** | Cadastro de pedidos, oficina, embalagem, checklist, fotos |
| **Logística** | Frete, coleta, entrega, ocorrências, sinistros |

**Login inicial admin:**
- Email: `admin@nilfisk.com`
- Senha: `Mudar2026@1`
- ⚠️ Troca de senha obrigatória no primeiro acesso

---

## 🔄 Fluxo Logístico Completo

```
Entrada de Pedido
    │
    ▼
[Cadastro NF + Cliente]
    │
    ▼
[Tipo de Operação: Saída / Retorno / Locação / Venda / Demo]
    │
    ├──▶ [Oficina] → data entrada
    │
    └──▶ [Embalagem] → nº série + acessórios
            │
            ▼
        [Checklist 11 itens — 100% obrigatório]
            │
            ▼
        [Fotos: máquina / acessórios / embalada]
            │
            ▼
        [Status: PRONTO PARA ENVIO]
                │
                ▼
        ═══ LOGÍSTICA ═══
                │
            [Informações do Frete]
                │
                ▼
            [Em Transporte]
                │
        ┌───────┴────────┐
        ▼                ▼
    [Entregue]      [Ocorrência / Sinistro]
        │
        ▼
    [Email automático → cliente + vendedor]
```

---

## ⚙️ Variáveis de Ambiente (.env)

```env
API_BASE_URL=https://api.nilfisk.com.br/api
API_TIMEOUT=30000
```

---

## 🧪 Testes

```bash
npm test                  # Todos os testes
npm test -- --coverage    # Com cobertura
```

---

## 📱 Build de Produção

```bash
# Android APK
cd android && ./gradlew assembleRelease

# Android AAB (Play Store)
cd android && ./gradlew bundleRelease

# iOS (via Xcode Archive)
npx react-native run-ios --configuration Release
```

---

## 🛠️ Tecnologias

- **React Native** 0.73 + **TypeScript**
- **React Navigation** 6 (Stack + Bottom Tabs)
- **Redux Toolkit** (state management)
- **Axios** (API REST)
- **React Hook Form** + **Yup** (formulários + validação)
- **react-native-image-picker** (câmera + galeria)
- **react-native-mmkv** (armazenamento local rápido)
- **date-fns** (manipulação de datas)
- **Poppins** (tipografia)