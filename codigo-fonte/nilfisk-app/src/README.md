# 📦 Nilfisk — Gestão Logística

App mobile React Native para controle do fluxo logístico completo de máquinas.

---

## 🏗️ Estrutura do Projeto

```
nilfisk-logistica/
├── App.tsx                          # Entry point
├── package.json
├── tsconfig.json
│
└── src/
    ├── constants/
    │   └── index.ts                 # Cores, fontes, roles, status, enums
    │
    ├── types/
    │   └── index.ts                 # Interfaces TypeScript completas
    │
    ├── services/
    │   └── api.ts                   # Axios + todos os serviços de API
    │
    ├── store/
    │   ├── index.ts                 # Redux store
    │   └── slices/
    │       ├── authSlice.ts         # Login, logout, troca de senha
    │       ├── pedidosSlice.ts      # CRUD pedidos, oficina, embalagem, checklist, fotos
    │       ├── fretesSlice.ts       # Frete, ocorrência, entrega
    │       └── relatoriosSlice.ts   # Dashboard e relatórios
    │
    ├── navigation/
    │   ├── RootNavigator.tsx        # Auth flow + sessão persistida
    │   ├── MainTabNavigator.tsx     # Bottom tabs com controle de acesso por role
    │   └── EntregasNavigator.tsx    # Stack de pedidos e logística
    │
    ├── hooks/
    │   └── redux.ts                 # useAppDispatch, useAppSelector tipados
    │
    ├── components/
    │   └── common/
    │       └── index.tsx            # Button, Input, Card, StatusBadge, ScreenHeader, etc
    │
    └── screens/
        ├── auth/
        │   ├── WelcomeScreen.tsx    # ✅ Implementado
        │   ├── LoginScreen.tsx      # ✅ Implementado
        │   └── ChangePasswordScreen # ✅ Implementado (dentro de WelcomeScreen.tsx)
        │
        ├── pedidos/
        │   ├── ChecklistScreen.tsx  # ✅ Implementado (lógica obrigatória completa)
        │   └── SCREENS_TODO.ts      # 📋 Guia detalhado para implementar restantes
        │
        ├── logistica/
        │   └── OcorrenciaScreen.tsx # ✅ Implementado
        │
        ├── shared/
        │   └── (Home, Relatorios, Perfil) # Ver SCREENS_TODO.ts
        │
        └── admin/
            └── (Usuarios, Clientes, Transportadoras) # Ver SCREENS_TODO.ts
```

---

## 🚀 Como Rodar

### Pré-requisitos
- Node.js 18+
- React Native CLI
- Android Studio (Android) ou Xcode (iOS)
- JDK 17

### Instalação

```bash
# 1. Instalar dependências
npm install

# 2. iOS — instalar pods
cd ios && pod install && cd ..

# 3. Adicionar fonte Poppins
# Baixe em: https://fonts.google.com/specimen/Poppins
# Adicione os arquivos .ttf em src/assets/fonts/
# Configure no react-native.config.js:
# module.exports = { assets: ['./src/assets/fonts'] }
# Execute: npx react-native-asset

# 4. Rodar
npx react-native run-android
# ou
npx react-native run-ios
```

---

## 👥 Controle de Acesso

| Role | Telas disponíveis |
|---|---|
| `admin` | Home (dashboard completo), Entregas, Relatórios, Perfil + Admin |
| `entrada_pedido` | Home (pedidos), Novo Pedido → Checklist → Fotos, Perfil |
| `logistica` | Home (fretes), Entregas, Frete → Ocorrência → Entrega, Perfil |

Login inicial:
- **Email:** admin@nilfisk.com
- **Senha:** Mudar2026@1 *(sistema solicita troca no primeiro acesso)*

---

## 🔄 Fluxo do Processo

```
Entrada de Pedido:
NovoPedido → TipoOperacao → SetupProcesso
    ↓ (se oficina)     ↓ (se embalagem)
  Oficina           Embalagem
    └─────────────────┘
           ↓
       Checklist (todos obrigatórios)
           ↓
      FotosMaquina (3 obrigatórias)
           ↓
    FinalizacaoEmbalagem
           ↓
      status: PRONTO_ENVIO

Logística:
EntregasList → FreteInfo → StatusTransporte
                               ↓
              ┌────────────────┼───────────────┐
           Entrega         Ocorrencia       Sinistro
              ↓
    Email automático (cliente + vendedor)
```

---

## 🌐 Backend (PHP REST API)

Endpoints esperados:

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/auth/login` | Login |
| POST | `/auth/logout` | Logout |
| POST | `/auth/change-password` | Trocar senha |
| GET/POST | `/pedidos` | Listar / Criar pedido |
| GET | `/pedidos/:id` | Buscar pedido |
| POST | `/pedidos/:id/oficina` | Salvar oficina |
| POST | `/pedidos/:id/embalagem` | Salvar embalagem |
| POST | `/pedidos/:id/checklist` | Salvar checklist |
| POST | `/pedidos/:id/fotos` | Upload de foto |
| POST | `/pedidos/:id/frete` | Criar frete |
| POST | `/fretes/:id/ocorrencia` | Registrar ocorrência |
| POST | `/fretes/:id/entrega` | Registrar entrega + email |
| GET | `/relatorios/dashboard` | KPIs administrativos |
| GET/POST | `/clientes` | CRUD clientes |
| GET/POST | `/transportadoras` | CRUD transportadoras |
| GET/POST | `/usuarios` | CRUD usuários (admin) |

---

## 📋 Dependências Principais

| Pacote | Uso |
|---|---|
| `@react-navigation` | Navegação (Stack + BottomTabs) |
| `@reduxjs/toolkit` | Estado global |
| `axios` | Requisições HTTP |
| `react-native-image-picker` | Upload de fotos |
| `react-hook-form` + `yup` | Formulários + validação |
| `react-native-vector-icons` | Ícones |
| `date-fns` | Formatação de datas |

---

## 🎨 Design System

```
Cores:
  Dark:    #28313F  (header, botões primários)
  Light:   #EFF0F2  (background)
  Green:   #38C682  (sucesso, FAB, confirmações)
  Gray:    #797979  (textos secundários)
  Blue:    #004AAD  (links, status transporte)

Fonte: Poppins (Regular, Medium, SemiBold, Bold)
```
