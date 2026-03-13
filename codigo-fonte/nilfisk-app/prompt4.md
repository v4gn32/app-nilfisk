# Criando o Prompt

Quero criar uma aplicação **SaaS totalmente mobile para gestão logística**, onde todas as operações e gerenciamento serão realizados através de **aplicativo mobile**. Seguem abaixo os detalhes completos do projeto.

---

# Nome do Projeto

Gestão Logística Nilfisk

---

# Objetivo

Desenvolver um aplicativo mobile de gestão logística para a Nilfisk que permita controlar todo o fluxo operacional de máquinas, desde o recebimento do pedido até a entrega final ao cliente.

O sistema deve permitir:

* Cadastro e gerenciamento de pedidos
* Controle de máquinas e números de série
* Gestão do fluxo logístico (oficina, embalagem, envio e entrega)
* Registro de responsáveis por cada etapa
* Registro de fotos das máquinas e da entrega
* Checklist de acessórios
* Controle de transporte e frete
* Registro de ocorrências ou sinistros
* Monitoramento do tempo de cada etapa do processo
* Indicadores operacionais em tempo real
* Envio automático de e-mail após entrega

Todo o sistema deverá funcionar **exclusivamente através de aplicativo mobile**, sem necessidade de painel administrativo web.

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

Arquitetura:

* API REST
* Autenticação via JWT
* Upload de imagens
* Sistema preparado para evolução futura

---

# Design, Cores e Layout

Interface moderna, profissional e otimizada para uso em dispositivos móveis.

### Paleta de cores

* Azul principal: #1E2A38 (Padrão Nilfisk)
* Azul: #004AAD
* Cinza escuro: #2F2F2F
* Cinza claro: #E5ECFC
* Branco: #FFFFFF
* Verde: #38C682

### Diretrizes de Design

* Interface limpa e minimalista
* Foco em produtividade e rapidez
* Navegação simples e intuitiva
* Componentes grandes para fácil uso em celular
* Ícones modernos em estilo outline
* Layout otimizado para operação em ambientes logísticos

Fontes:

* Roboto (Padrão Nilfisk)

---

# Requisitos Importantes

* Sistema com controle de usuários e permissões
* Cada etapa do processo deve registrar data, responsável e status
* Registro obrigatório de fotos das máquinas e da entrega
* Cada pedido pode possuir várias máquinas
* Cada máquina possui número de série
* Sistema preparado para indicadores de performance
* Upload de imagens otimizado para dispositivos móveis
* Formato de data: dd/mm/yyyy
* Formato de moeda: R$
* Máscara de telefone: (XX) XXXXX-XXXX
* Senhas com mínimo de 6 caracteres
* Código organizado e preparado para evolução futura

---

# Usuários do Sistema

### Administrador

Responsável por:

* gerenciamento de usuários
* acompanhamento de indicadores
* visualização completa de pedidos

---

### Coordenador Logístico

Responsável por iniciar os processos logísticos.

Funções:

* cadastrar pedidos
* cadastrar máquinas
* definir fluxo logístico
* designar estoquistas

---

### Estoquistas

Utilizam o aplicativo para executar as tarefas operacionais.

Funções:

* atualizar status das etapas
* preencher checklist
* tirar fotos
* finalizar processos

---

### Responsável pelo Frete

Funções:

* registrar transportadora
* registrar frete
* acompanhar envio
* registrar entrega

---

# Fluxo Operacional do Sistema

Fluxo principal do processo logístico:

```id="b3s2m1"
Pedido recebido
   ↓
Cadastro do pedido (Nota Fiscal)
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

# Funcionalidades do Aplicativo Mobile

## Tela 0 - Boas Vindas

* Background - Cor: #1E2A38
* Logo - Branco 
* Textos - Branco
* Botão Entrar #38C682

---

## Tela 1 – Login

Campos:

* E-mail
* Senha

Autenticação via token JWT.

---

## Tela 2 – Dashboard

Tela inicial após login.

Informações exibidas:

* Pedidos em oficina
* Pedidos em embalagem
* Pedidos prontos para envio
* Pedidos enviados
* Pedidos entregues

Indicadores rápidos para acompanhamento em tempo real.

---

## Tela 3 – Lista de Pedidos

Lista completa de pedidos.

Informações exibidas:

* número do pedido
* cliente
* vendedor (Fazer Lista suspensa)
* status
* data

Filtros:

* status
* período
* cliente

---

## Tela 4 – Cadastro de Pedido

Campos:

* número do pedido
* cliente
* contato do cliente
* vendedor (Lista suspensa)
* emails adicionais
* tipo de processo (Saída ou Retorno)
* observações

---

## Tela 5 – Cadastro de Máquinas

Campos:

* modelo da máquina
* número de série
* código do ativo
* quantidade
* observações

Possibilidade de adicionar várias máquinas ao mesmo pedido.

---

## Tela 6 – Designação de Estoquista

Seleção do responsável pela execução da tarefa.

Lista de usuários cadastrados.

---

## Tela 7 – Oficina

Ações disponíveis:

* enviar máquina para oficina
* registrar data de envio
* registrar retorno da oficina

---

## Tela 8 – Embalagem

Processo de preparação da máquina.

Checklist:
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

## Tela 9 – Registro de Fotos

Permitir captura ou upload de fotos:

* foto da máquina
* foto da embalagem
* foto da entrega
* foto do canhoto

---

## Tela 10 – Finalização da Embalagem

Campos:

* data final da embalagem
* observações

Botão:

Confirmar embalagem

---

## Tela 11 – Registro de Frete

Campos:

* transportadora
* tipo de frete
* valor do frete
* previsão de entrega

---

## Tela 12 – Registro de Entrega

Campos:

* data da entrega
* foto da entrega
* foto do canhoto

---

## Tela 13 – Registro de Ocorrência

Caso ocorra problema logístico.

Campos:

* tipo de ocorrência
* descrição
* custo adicional
* data da ocorrência

---

## Tela 14 – Relatórios e Indicadores

Indicadores operacionais:

Tempo de oficina

```id="w3g2d1"
Entrada na oficina → retorno da oficina
```

Tempo de embalagem

```id="a9c5f2"
Retorno da oficina → embalagem finalizada
```

Tempo total do pedido

```id="l6p8t3"
Cadastro do pedido → entrega
```

Performance de estoquistas

Tempo médio de execução de tarefas.

Auditoria de entrega

```id="k7d4e5"
% de entregas com foto do canhoto anexada
```

---

# Estrutura de API

Base da API:

```id="u9m0n8"
/api/
```

Endpoints principais:

```id="q4t6v7"
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

# Automação de E-mail

Ao finalizar a entrega, o sistema deve enviar automaticamente um e-mail.

Destinatários:

* vendedor
* cliente
* e-mails adicionais

Conteúdo do e-mail:
``` 
Olá,

Informamos que o processo logístico referente à Nota Fiscal nº {numero_nota} foi finalizado com sucesso.

Informações da Entrega

Cliente: {cliente_nome}
Responsável pela entrega: {responsavel_entrega}
Data da entrega: {data_entrega}

A entrega foi realizada conforme o procedimento operacional da logística, incluindo:

* Conferência dos itens
* Registro fotográfico da máquina
* Registro fotográfico do comprovante de entrega (canhoto)

As imagens e registros do processo foram anexados a este e-mail para fins de controle e rastreabilidade.

Caso exista qualquer dúvida ou necessidade de informação adicional, nossa equipe logística está à disposição.

Atenciosamente,

Equipe de Logística Nilfisk
Sistema de Gestão Logística 

´´´


Confirmação de entrega com anexos:

* foto da entrega
* foto do canhoto

---

# Resultado Esperado

Um aplicativo mobile completo para gestão logística com:

* controle total do processo operacional
* rastreabilidade das máquinas
* registro fotográfico
* acompanhamento em tempo real
* indicadores de performance
* automação de comunicação
* operação totalmente via dispositivos móveis
