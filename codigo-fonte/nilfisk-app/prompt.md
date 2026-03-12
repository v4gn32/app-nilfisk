# 📦 Sistema de Gestão Logística – Nilfisk

Sistema desenvolvido para gerenciamento completo do processo logístico de máquinas da Nilfisk, permitindo rastrear desde o recebimento do pedido até a entrega ao cliente.

O sistema será composto por **aplicativo mobile para operação logística** e **painel web administrativo**, garantindo controle, rastreabilidade e indicadores de desempenho em tempo real.

---

# 🎯 Objetivo

Centralizar e otimizar a gestão logística das máquinas, permitindo acompanhar em tempo real o processo de preparação, revisão, embalagem, envio e entrega ao cliente.

O sistema permitirá:

* Controle de pedidos
* Controle de máquinas e números de série
* Registro de responsáveis por tarefas
* Checklist de acessórios
* Registro fotográfico
* Controle de transporte
* Registro de ocorrências
* Monitoramento de tempo de processos
* Indicadores operacionais
* Envio automático de e-mail ao finalizar a entrega

---

# 🧱 Arquitetura do Sistema

Arquitetura recomendada considerando hospedagem em servidor compartilhado e banco MySQL.

```
APP MOBILE (React Native)
        │
        │ REST API (HTTPS)
        ▼
BACKEND (PHP API)
        │
        ▼
BANCO DE DADOS (MySQL)
        │
        ▼
PAINEL ADMINISTRATIVO WEB
```

### Tecnologias sugeridas

**Mobile**

* React Native
* Expo
* React Navigation
* Axios

**Backend**

* PHP
* API REST

**Banco de Dados**

* MySQL

**Painel administrativo**

* PHP + Bootstrap ou React

---

# 👥 Tipos de Usuários

### Administrador

* Acesso total ao sistema
* Visualização de indicadores
* Gerenciamento de usuários
* Relatórios

### René (Logística)

Responsável por iniciar o processo logístico.

Funções:

* cadastrar pedidos
* cadastrar máquinas
* definir fluxo
* designar estoquistas

### Estoquistas

Utilizam o aplicativo mobile.

Funções:

* executar tarefas
* atualizar status
* preencher checklist
* tirar fotos
* finalizar embalagem

### Responsável pelo Frete

Funções:

* definir transportadora
* registrar frete
* acompanhar envio
* registrar entrega

---

# 🔄 Fluxo Operacional do Sistema

## 1️⃣ Recebimento do Pedido

O setor de vendas envia um pedido de venda.

O responsável logístico cadastra no sistema:

Campos:

* Número do pedido
* Cliente
* Contato do cliente
* Vendedor
* Email do vendedor
* Emails adicionais
* Tipo do processo (Saída ou Retorno)
* Data de cadastro
* Número da nota fiscal (opcional)

---

## 2️⃣ Cadastro das Máquinas

Cada pedido pode conter uma ou várias máquinas.

Campos cadastrados:

* Modelo da máquina
* Quantidade
* Número de série
* Código do ativo
* Observações

---

## 3️⃣ Designação de Estoquista

O responsável logístico define qual estoquista será responsável pela tarefa.

Exemplo:

* Carlos
* João
* Marcos

O estoquista visualizará as tarefas em seu aplicativo mobile.

---

## 4️⃣ Envio para Oficina

A máquina é retirada do estoque e enviada para revisão.

Registro no sistema:

* Data envio para oficina

---

## 5️⃣ Retorno da Oficina

Após revisão, a máquina retorna ao estoque.

Registro no sistema:

* Data retorno da oficina

Status muda para:

```
Pronto para Embalagem
```

---

## 6️⃣ Processo de Embalagem

O estoquista inicia o processo de embalagem.

Atividades:

* preencher checklist
* preparar máquina
* registrar fotos

---

### Checklist de Embalagem

Exemplo:

```
[ ] carregador
[ ] mangueira
[ ] cabos
[ ] manual
[ ] acessórios
```

---

## 7️⃣ Registro de Fotos

Fotos registradas no aplicativo mobile.

Tipos:

* foto da máquina
* foto da embalagem
* foto da entrega
* foto do canhoto

---

## 8️⃣ Finalização da Embalagem

Campos registrados:

* Data final da embalagem
* Observações

Status:

```
Pronto para envio
```

---

## 9️⃣ Registro de Frete

Responsável pelo transporte registra:

* Transportadora
* Tipo de frete
* Valor do frete
* Previsão de entrega

Status:

```
Enviado
```

---

## 🔟 Ocorrência ou Sinistro (Opcional)

Caso ocorra algum problema durante o transporte.

Campos:

* Tipo de ocorrência
* Descrição
* Custo adicional
* Data da ocorrência

Status:

```
Sinistro
```

---

## 1️⃣1️⃣ Entrega ao Cliente

Campos registrados:

* Data da entrega
* Foto da entrega
* Foto do canhoto da nota fiscal

Status final:

```
Entregue
```

---

## 📧 Automação de E-mail

Após finalizar a entrega, o sistema enviará automaticamente um e-mail.

Destinatários:

* vendedor
* cliente
* e-mails adicionais

Conteúdo:

* mensagem automática
* foto da entrega
* foto do canhoto

---

# 📊 Indicadores do Sistema

O painel administrativo exibirá indicadores em tempo real.

### Tempo de Oficina

```
Entrada na oficina → retorno da oficina
```

---

### Tempo de Embalagem

```
Retorno da oficina → embalagem finalizada
```

---

### Tempo Total do Pedido

```
Cadastro do pedido → entrega
```

---

### Performance dos Estoquistas

Tempo médio de execução de tarefas.

Exemplo:

| Estoquista | Tempo médio |
| ---------- | ----------- |
| Carlos     | 1h20        |
| João       | 2h10        |

---

### Controle de Canhotos

Indicador de auditoria:

```
% de entregas com foto do canhoto
```

---

# 🗄 Estrutura do Banco de Dados

## Tabela: usuarios

```
usuarios
id
nome
email
senha
tipo_usuario
ativo
data_criacao
```

Tipos de usuário:

```
admin
rene
estoquista
frete
```

---

## Tabela: vendedores

```
vendedores
id
nome
email
telefone
ativo
```

---

## Tabela: clientes

```
clientes
id
nome
contato
email
telefone
endereco
```

---

## Tabela: pedidos

```
pedidos
id
numero_pedido
cliente_id
vendedor_id
tipo_processo
nota_fiscal
data_input
status
observacoes
```

---

## Tabela: pedido_maquinas

```
pedido_maquinas
id
pedido_id
modelo
numero_serie
codigo_ativo
quantidade
```

---

## Tabela: tarefas_logistica

```
tarefas_logistica
id
pedido_id
estoquista_id
data_envio_oficina
data_retorno_oficina
data_inicio_embalagem
data_fim_embalagem
data_envio
data_entrega
status
```

---

## Tabela: checklist_embalagem

```
checklist_embalagem
id
pedido_id
carregador
mangueira
cabos
manual
acessorios
observacoes
```

---

## Tabela: fotos

```
fotos
id
pedido_id
tipo
arquivo
usuario_id
data_upload
```

Tipos de foto:

```
maquina
embalagem
entrega
canhoto
```

---

## Tabela: fretes

```
fretes
id
pedido_id
transportadora
tipo_frete
valor
previsao_entrega
data_envio
```

---

## Tabela: ocorrencias

```
ocorrencias
id
pedido_id
tipo
descricao
custo_extra
data_ocorrencia
```

---

# 📱 Telas do Aplicativo Mobile

### Login

```
email
senha
```

---

### Minhas Tarefas

Lista de pedidos atribuídos ao usuário.

```
Pedido 4532
Cliente: XPTO
Status: Oficina
```

Filtros:

```
Oficina
Embalagem
Pronto envio
```

---

### Detalhes do Pedido

Informações exibidas:

```
cliente
vendedor
modelo
numero serie
status
```

Ações:

```
Enviar para oficina
Confirmar retorno oficina
Iniciar embalagem
Finalizar embalagem
```

---

### Checklist

Tela para marcar acessórios da máquina.

---

### Fotos

Botões para registro de imagens:

```
Foto da máquina
Foto embalagem
Foto entrega
Foto canhoto
```

---

### Finalização

Campos:

```
Data final
Observações
Confirmar envio
```

---

# 🌐 Estrutura da API

Base da API:

```
/api/
```

---

## Autenticação

```
POST /login
```

---

## Pedidos

Criar pedido

```
POST /pedidos
```

Listar pedidos

```
GET /pedidos
```

Detalhe do pedido

```
GET /pedidos/{id}
```

---

## Máquinas

Adicionar máquina

```
POST /pedidos/{id}/maquinas
```

Listar máquinas

```
GET /pedidos/{id}/maquinas
```

---

## Oficina

Enviar para oficina

```
POST /pedidos/{id}/oficina
```

Retorno da oficina

```
POST /pedidos/{id}/retorno-oficina
```

---

## Embalagem

Iniciar embalagem

```
POST /pedidos/{id}/embalagem/iniciar
```

Finalizar embalagem

```
POST /pedidos/{id}/embalagem/finalizar
```

---

## Fotos

Upload de imagens

```
POST /pedidos/{id}/fotos
```

---

## Frete

Registrar frete

```
POST /pedidos/{id}/frete
```

---

## Entrega

Confirmar entrega

```
POST /pedidos/{id}/entrega
```

---

## Ocorrência

Registrar sinistro

```
POST /pedidos/{id}/sinistro
```

---

# 🔁 Fluxograma Completo do Sistema

```
INÍCIO
   │
   ▼
Receber pedido
   │
   ▼
Cadastrar pedido
   │
   ▼
Cadastrar máquinas
   │
   ▼
Designar estoquista
   │
   ▼
Separar máquina
   │
   ▼
Enviar para oficina
   │
   ▼
Revisão da máquina
   │
   ▼
Retorno da oficina
   │
   ▼
Iniciar embalagem
   │
   ▼
Preencher checklist
   │
   ▼
Registrar fotos
   │
   ▼
Finalizar embalagem
   │
   ▼
Pronto para envio
   │
   ▼
Registrar frete
   │
   ▼
Mercadoria enviada
   │
   ▼
Entrega ao cliente
   │
   ▼
Anexar foto entrega
   │
   ▼
Anexar foto canhoto
   │
   ▼
Enviar e-mail automático
   │
   ▼
FINALIZADO
```

---

# 🚀 Resultado

Com essa documentação você possui:

* arquitetura completa do sistema
* estrutura profissional do banco de dados
* definição das telas
* estrutura da API
* fluxo operacional detalhado
* indicadores logísticos
* documentação pronta para desenvolvimento
* base para documentação no GitHub
