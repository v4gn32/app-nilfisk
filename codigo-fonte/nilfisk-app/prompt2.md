# Criando o Prompt

Quero criar uma aplicação **SaaS de gestão logística com aplicativo mobile e painel administrativo web responsivo**. Seguem abaixo os detalhes completos do projeto.

---

# Nome do Projeto

Gestão Logística Nilfisk

---

# Objetivo

Desenvolver um sistema de gestão logística para a Nilfisk que permita controlar todo o fluxo operacional das máquinas, desde o recebimento do pedido de venda até a entrega final ao cliente.

O sistema deve permitir:

* Cadastro e gerenciamento de pedidos
* Controle de máquinas e números de série
* Gestão do fluxo logístico (oficina, embalagem, envio e entrega)
* Registro de responsáveis por cada etapa
* Registro de fotos das máquinas e da entrega
* Controle de checklist de acessórios
* Controle de transporte e frete
* Registro de ocorrências ou sinistros
* Monitoramento do tempo de cada etapa do processo
* Indicadores operacionais em tempo real
* Envio automático de e-mail após entrega

O sistema deve funcionar com **aplicativo mobile para operadores logísticos e painel administrativo web para gestão**.

---

# Tecnologias

Backend:

* PHP
* MySQL

Aplicativo Mobile:

* React Native
* Expo
* React Navigation
* Axios

Painel Administrativo Web:

* PHP
* Bootstrap
* Chart.js para gráficos

Arquitetura:

* API REST
* Autenticação via JWT
* Upload de imagens
* Estrutura preparada para expansão futura

---

# Design, Cores e Layout

Interface moderna, profissional e focada em produtividade operacional.

### Paleta de cores

* Azul principal: #004AAD
* Azul escuro: #1E2A38
* Cinza escuro: #2F2F2F
* Cinza claro: #E5ECFC
* Branco: #FFFFFF
* Verde: #38C682

### Diretrizes de Design

* Interface limpa e minimalista
* Foco em produtividade e rapidez
* Responsivo para celular, tablet e desktop
* Ícones modernos em estilo outline
* Layout simples para uso em ambiente industrial
* Tipografia moderna

Fontes:

* Poppins
* Roboto

### Painel Administrativo

Layout com:

* Sidebar fixa à esquerda
* Menu em arquivo separado: `menu.php`
* Dashboard com gráficos e indicadores

---

# Requisitos Importantes

* Sistema com **controle de usuários e permissões**
* Aplicativo mobile focado nos estoquistas
* Painel web para gestores e administradores
* Cada etapa do processo deve registrar **data, responsável e status**
* Sistema deve registrar **fotos da máquina e da entrega**
* Cada pedido pode ter **várias máquinas**
* Cada máquina pode possuir **número de série**
* Sistema preparado para indicadores de performance
* Código organizado e preparado para evolução futura
* Upload de imagens otimizado
* Formato de data: dd/mm/yyyy
* Formato de moeda: R$
* Máscara de telefone: (XX) XXXXX-XXXX

---

# Estrutura do Sistema

O sistema possui duas áreas principais:

1️⃣ Aplicativo Mobile (Operacional)
2️⃣ Painel Administrativo (Gestão)

---

# Usuários do Sistema

### Administrador

Responsável por:

* gerenciamento de usuários
* acesso total ao sistema
* relatórios
* indicadores

---

### Coordenador Logístico (René)

Responsável por iniciar os processos.

Funções:

* cadastrar pedidos
* cadastrar máquinas
* definir fluxo
* designar estoquistas

---

### Estoquistas

Utilizam o aplicativo mobile.

Funções:

* executar tarefas
* atualizar status
* registrar checklist
* tirar fotos
* finalizar processos

---

### Responsável pelo Frete (Erivaldo)

Funções:

* registrar transportadora
* registrar frete
* acompanhar envio
* registrar entrega

---

# Fluxo Operacional do Sistema

Fluxo principal do processo logístico:

```id="e5ufxj"
Pedido recebido
   ↓
Cadastro do pedido
   ↓
Cadastro das máquinas
   ↓
Designação de estoquista
   ↓
Separação da máquina no estoque
   ↓
Envio para oficina
   ↓
Revisão na oficina
   ↓
Retorno da oficina
   ↓
Início da embalagem
   ↓
Checklist de acessórios
   ↓
Registro de fotos
   ↓
Finalização da embalagem
   ↓
Registro do frete
   ↓
Envio da mercadoria
   ↓
Entrega ao cliente
   ↓
Foto da entrega
   ↓
Foto do canhoto
   ↓
Envio automático de e-mail
   ↓
Processo finalizado
```

---

# Funcionalidades – Aplicativo Mobile

### Tela 0 - Boas Vindas

Detalhes:
* Fundo #1E2A38
* Logo Branco
* Texto Gestão Logistica Branco
* Botão Entrar #38C682

### Tela 1 – Login

Campos:

* E-mail
* Senha

---

### Tela 2 – Minhas Tarefas

Lista de tarefas atribuídas ao usuário.

Exemplo:

Pedido #4567
Cliente: Empresa XPTO
Status: Oficina

Filtros:

* Oficina
* Embalagem
* Pronto para envio

---

### Tela 3 – Detalhes do Pedido

Informações exibidas:

* Cliente
* Vendedor
* Modelo da máquina
* Número de série
* Status atual

Ações disponíveis:

* Enviar para oficina
* Confirmar retorno da oficina
* Iniciar embalagem
* Finalizar embalagem

---

### Tela 4 – Checklist da Máquina

Checklist com acessórios obrigatórios.

Lista:
* Cabo Carregamento
* Escova
* Suporte de Disco
* Carregador
* Chave
* Saia
* Rodo
* Manual
* Confirmação de N/S
* Confirmação de Qtde

Cada item deve possuir checkbox.

---

### Tela 5 – Registro de Fotos

Botões para registrar imagens:

* Fotos da máquina
* Fotos da embalagem
* Fotos da entrega
* Fotos do canhoto

---

### Tela 6 – Finalização da Embalagem

Campos:

* Data final da embalagem
* Observações

Botão:

Confirmar embalagem

---

### Tela 7 – Entrega

Campos:

* Data da entrega
* Foto da entrega
* Foto do canhoto

---

# Funcionalidades – Painel Administrativo

## Tela de Login

Campos:

* E-mail
* Senha

---

## Dashboard

Indicadores principais:

* Pedidos em oficina
* Pedidos em embalagem
* Pedidos enviados
* Pedidos entregues
* Tempo médio de oficina
* Tempo médio de embalagem
* Performance de estoquistas

Gráficos utilizando Chart.js.

---

## Tela de Pedidos

Lista com:

* número do pedido
* cliente
* vendedor
* status
* data

Filtros:

* período
* status
* cliente

---

## Tela de Máquinas

Informações:

* modelo
* número de série
* código do ativo
* quantidade

---

## Tela de Usuários

Gerenciamento de:

* administradores
* coordenadores logísticos
* estoquistas
* responsáveis pelo frete

---

## Tela de Clientes

Cadastro de clientes com:

* nome
* contato
* telefone
* email
* endereço

---

## Tela de Vendedores

Cadastro de vendedores com:

* nome
* email
* telefone

---

## Tela de Fretes

Registro de:

* transportadora
* tipo de frete
* valor
* previsão de entrega

---

## Tela de Ocorrências

Registro de problemas logísticos:

* tipo de ocorrência
* descrição
* custo adicional

---

## Tela de Relatórios

Relatórios disponíveis:

* tempo médio de oficina
* tempo médio de embalagem
* produtividade por estoquista
* entregas realizadas
* entregas com canhoto anexado

---

# Automação de E-mail

Ao registrar a entrega, o sistema deve enviar automaticamente um e-mail.

Destinatários:

* vendedor
* cliente
* e-mails adicionais

Conteúdo do e-mail:

Confirmação da entrega com anexos:

* foto da entrega
* foto do canhoto

---

# Estrutura de API

Base da API:

```
/api/
```

Principais endpoints:

```
POST /login
GET /pedidos
POST /pedidos
GET /pedidos/{id}
POST /pedidos/{id}/maquinas
POST /pedidos/{id}/oficina
POST /pedidos/{id}/retorno-oficina
POST /pedidos/{id}/embalagem/iniciar
POST /pedidos/{id}/embalagem/finalizar
POST /pedidos/{id}/frete
POST /pedidos/{id}/entrega
POST /pedidos/{id}/fotos
POST /pedidos/{id}/sinistro
```

---

# Indicadores do Sistema

O sistema deve gerar automaticamente indicadores como:

Tempo de oficina:

Entrada na oficina → retorno

Tempo de embalagem:

Retorno da oficina → embalagem finalizada

Tempo total do pedido:

Cadastro → entrega

Performance dos estoquistas:

Tempo médio de execução de tarefas

Auditoria de entrega:

% de entregas com foto do canhoto anexada

---

# Resultado Esperado

Um sistema moderno de gestão logística com:

* controle completo do processo
* rastreabilidade das máquinas
* registro fotográfico
* indicadores operacionais
* automação de comunicação
* aplicativo mobile para operação
* painel web para gestão
