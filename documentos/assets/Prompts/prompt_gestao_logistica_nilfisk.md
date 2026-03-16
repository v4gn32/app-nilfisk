# Prompt para Desenvolvimento do Sistema

Quero criar uma aplicação **SAAS mobile responsiva**. Seguem abaixo os
detalhes do projeto:

------------------------------------------------------------------------

# 1. Nome do Projeto

**Gestão Logística Nilfisk**

------------------------------------------------------------------------

# 2. Objetivo

O objetivo é desenvolver um **aplicativo mobile de gestão logística para
a Nilfisk**, permitindo controlar todo o fluxo operacional de máquinas
desde o recebimento do pedido até a entrega final ao cliente.

O sistema deve permitir:

-   Cadastro e gerenciamento de pedidos\
-   Controle de máquinas e números de série\
-   Gestão do fluxo logístico (oficina, embalagem, envio e entrega)\
-   Registro de responsáveis por cada etapa\
-   Registro de fotos das máquinas e da entrega\
-   Checklist de acessórios\
-   Controle de transporte e frete\
-   Registro de ocorrências ou sinistros\
-   Monitoramento do tempo de cada etapa do processo\
-   Indicadores operacionais em tempo real\
-   Envio automático de e-mail após entrega

Todo o sistema deverá funcionar **exclusivamente através de aplicativo
mobile**, sem necessidade de painel administrativo web.

------------------------------------------------------------------------

# 3. Tecnologias

## Backend

-   PHP
-   MySQL

## Aplicativo Mobile

-   React Native
-   Expo
-   React Navigation
-   Axios

## Arquitetura

-   API REST
-   Autenticação via JWT
-   Upload de imagens
-   Sistema preparado para evolução futura

------------------------------------------------------------------------

# 4. Design, Cores e Layout

Interface moderna, profissional e otimizada para uso em dispositivos
móveis.

## Paleta de cores

-   Azul principal: **#1E2A38** (Padrão Nilfisk)
-   Azul: **#004AAD**
-   Cinza escuro: **#2F2F2F**
-   Cinza claro: **#E5ECFC**
-   Branco: **#FFFFFF**
-   Verde: **#38C682**

## Diretrizes de Design

-   Interface limpa, minimalista e profissional
-   Foco em produtividade e rapidez
-   Navegação simples e intuitiva
-   Componentes grandes para fácil uso em celular
-   Ícones modernos no estilo outline
-   Layout otimizado para operação em ambientes logísticos

Fonte:

-   Roboto

------------------------------------------------------------------------

# 5. Requisitos Importantes

-   Sistema com controle de usuários e permissões
-   Cada etapa do processo deve registrar **data, responsável e status**
-   Registro obrigatório de fotos das máquinas e da entrega
-   Cada pedido pode possuir várias máquinas
-   Cada máquina possui número de série
-   Sistema preparado para indicadores de performance
-   Upload de imagens otimizado para dispositivos móveis
-   Formato de data: dd/mm/yyyy
-   Formato de moeda: R\$
-   Máscara de telefone: (XX) XXXXX-XXXX
-   Senhas com mínimo de 6 caracteres
-   Código organizado e preparado para evolução futura

------------------------------------------------------------------------

# 6. Usuários do Sistema

## Administrador

Responsável por:

-   gerenciamento de usuários
-   acompanhamento de indicadores
-   visualização completa de pedidos

## Coordenador Logístico

Funções:

-   cadastrar pedidos
-   cadastrar máquinas
-   definir fluxo logístico
-   designar estoquistas

## Estoquistas

Funções:

-   atualizar status das etapas
-   preencher checklist
-   tirar fotos
-   finalizar processos

## Responsável pelo Frete

Funções:

-   registrar transportadora
-   registrar frete
-   acompanhar envio
-   registrar entrega

------------------------------------------------------------------------

# 7. Fluxo Operacional

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
    Checklist obrigatório
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

------------------------------------------------------------------------

# 8. Funcionalidades do Aplicativo

## Tela 0 -- Boas Vindas

-   Background #1E2A38
-   Logo Nilfisk
-   Textos em branco
-   Botão entrar #38C682

## Tela 1 -- Login

Campos:

-   Email
-   Senha

Autenticação via **JWT**.

## Tela 2 -- Dashboard

Indicadores:

-   Pedidos em oficina
-   Pedidos em embalagem
-   Pedidos prontos para envio
-   Pedidos enviados
-   Pedidos entregues

## Tela 3 -- Lista de Pedidos

Informações:

-   número do pedido
-   cliente
-   vendedor
-   status
-   data

Filtros:

-   status
-   período
-   cliente

## Tela 4 -- Cadastro de Pedido

Campos:

-   número do pedido
-   cliente
-   contato do cliente
-   vendedor
-   emails adicionais
-   tipo de processo
-   observações

## Tela 5 -- Cadastro de Máquinas

Campos:

-   modelo
-   número de série
-   código do ativo
-   quantidade
-   observações

Permitir várias máquinas por pedido.

## Tela 6 -- Designação de Estoquista

Seleção do responsável.

## Tela 7 -- Oficina

-   enviar máquina para oficina
-   registrar envio
-   registrar retorno

## Tela 8 -- Embalagem

Checklist:

-   Cabo de carregamento
-   Escova
-   Suporte de disco
-   Carregador
-   Chave
-   Saia
-   Rodo
-   Manual
-   Confirmação de N/S
-   Confirmação de quantidade

## Tela 9 -- Registro de Fotos

Fotos:

-   máquina
-   embalagem
-   entrega
-   canhoto

## Tela 10 -- Finalização da Embalagem

Campos:

-   data final
-   observações

## Tela 11 -- Registro de Frete

Campos:

-   transportadora
-   tipo de frete
-   valor
-   previsão

## Tela 12 -- Registro de Entrega

Campos:

-   data
-   foto da entrega
-   foto do canhoto

## Tela 13 -- Registro de Ocorrência

Campos:

-   tipo
-   descrição
-   custo
-   data

## Tela 14 -- Relatórios

Indicadores:

-   Tempo de oficina
-   Tempo de embalagem
-   Tempo total do pedido
-   Performance de estoquistas
-   Auditoria de entrega

------------------------------------------------------------------------

# 9. Estrutura da API

Base:

    /api/

Endpoints:

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

------------------------------------------------------------------------

# 10. Automação de E-mail

Ao finalizar a entrega enviar e-mail automático para:

-   vendedor
-   cliente
-   e-mails adicionais

Conteúdo:

Olá,

Informamos que o processo logístico referente à Nota Fiscal nº
{numero_nota} foi finalizado com sucesso.

Cliente: {cliente_nome}\
Responsável pela entrega: {responsavel_entrega}\
Data da entrega: {data_entrega}

Atenciosamente,\
Equipe de Logística Nilfisk

Anexos:

-   foto da entrega
-   foto do canhoto

------------------------------------------------------------------------

# Resultado Esperado

Aplicativo mobile completo com:

-   controle do processo logístico
-   rastreabilidade das máquinas
-   registro fotográfico
-   acompanhamento em tempo real
-   indicadores de performance
-   automação de comunicação
-   operação totalmente mobile

------------------------------------------------------------------------

# Instrução antes do desenvolvimento

Antes de começar o desenvolvimento, gere **3 sugestões de estrutura de
projeto**:

1.  Estrutura simples (todos arquivos juntos)\
2.  Estrutura intermediária (backend + mobile separados)\
3.  Estrutura profissional escalável (API + Mobile)

O sistema será um **app mobile React Native consumindo API PHP**.
