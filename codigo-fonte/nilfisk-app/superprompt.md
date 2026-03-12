Você é um arquiteto de software sênior especializado em desenvolvimento de aplicativos mobile e sistemas logísticos.

Sua tarefa é gerar a estrutura completa de um sistema profissional.

O sistema será um aplicativo mobile para gestão logística da empresa Nilfisk.

O objetivo é controlar todo o fluxo de máquinas desde o pedido até a entrega final ao cliente.

---

# Nome do Projeto

Gestão Logística Nilfisk

---

# Objetivo do Sistema

Criar um aplicativo mobile que permita controlar o fluxo completo logístico de máquinas industriais, desde o recebimento do pedido até a entrega ao cliente.

O sistema deve permitir:

- cadastro de pedidos
- cadastro de máquinas
- controle de números de série
- envio para oficina
- retorno da oficina
- processo de embalagem
- checklist de acessórios
- registro de fotos
- registro de frete
- confirmação de entrega
- registro de ocorrências
- monitoramento de tempo de cada etapa

---

# Tecnologias Obrigatórias

Mobile App

- React Native
- Expo
- React Navigation
- Axios

Backend

- PHP 8+
- API REST
- JWT Authentication

Banco de Dados

- MySQL

Servidor compatível com hospedagem compartilhada.

---

# Arquitetura do Sistema

Arquitetura baseada em:

Mobile App → API REST → Banco de Dados

Fluxo:

App Mobile (React Native)
↓
API REST (PHP)
↓
Banco de Dados (MySQL)

---

# Gere automaticamente os seguintes itens

1) Estrutura completa de pastas do projeto

2) Banco de dados SQL completo

3) API REST em PHP

4) Telas do aplicativo em React Native

5) Integração entre mobile e API

---

# Estrutura de Pastas do Projeto

Gere uma estrutura profissional separando:

backend/
api/
controllers/
models/
services/
middleware/
config/
database/

mobile-app/
src/
screens/
components/
services/
navigation/
hooks/
utils/

---

# Banco de Dados

Gere o script SQL completo contendo as seguintes tabelas:

usuarios
clientes
vendedores
pedidos
pedido_maquinas
maquinas
oficina
embalagem
checklist
fotos
fretes
entregas
ocorrencias
logs

Cada tabela deve possuir:

- chave primária
- relacionamentos
- timestamps
- campos bem definidos

Exemplo de relacionamentos:

pedido → cliente
pedido → vendedor
pedido → maquinas
pedido → entrega
pedido → frete

---

# Estrutura de API

Crie endpoints REST organizados.

Exemplo:

POST /login
GET /usuarios
POST /usuarios

GET /pedidos
POST /pedidos
GET /pedidos/{id}

POST /pedidos/{id}/maquinas
POST /pedidos/{id}/oficina
POST /pedidos/{id}/retorno-oficina

POST /pedidos/{id}/embalagem/iniciar
POST /pedidos/{id}/embalagem/finalizar

POST /pedidos/{id}/fotos

POST /pedidos/{id}/frete
POST /pedidos/{id}/entrega

POST /pedidos/{id}/ocorrencia

---

# Telas do Aplicativo Mobile

Crie as seguintes telas completas em React Native.

Login

Campos:
email
senha

Dashboard

Indicadores:

pedidos em oficina
pedidos em embalagem
pedidos enviados
pedidos entregues

Lista de Pedidos

Filtro por:

status
data
cliente

Cadastro de Pedido

Campos:

numero do pedido
cliente
vendedor
email adicional
tipo de processo
observações

Cadastro de Máquinas

modelo
numero de série
codigo do ativo
quantidade

Processo Oficina

enviar para oficina
registrar retorno

Processo Embalagem

iniciar embalagem
checklist

Checklist

carregador
cabos
mangueira
manual
acessorios

Registro de Fotos

foto da máquina
foto da embalagem
foto da entrega
foto do canhoto

Frete

transportadora
tipo de frete
valor
previsão

Entrega

data da entrega
foto da entrega
foto do canhoto

Ocorrência

tipo
descrição
custo

Relatórios

tempo médio de oficina
tempo médio de embalagem
tempo médio total do pedido
produtividade dos estoquistas

---

# Funcionalidades Importantes

Upload de imagens

Salvar fotos no servidor

Controle de status do pedido

Status possíveis:

recebido
oficina
retorno_oficina
embalagem
pronto_envio
enviado
entregue
ocorrencia

---

# Requisitos Técnicos

Código organizado

Utilizar arquitetura MVC no backend

API documentada

Utilizar JSON em todas as respostas

Tratamento de erros

Validação de dados

Autenticação JWT

Upload de imagens via API

---

# Design do App

Interface simples e moderna.

Cores principais:

Azul #004AAD
Azul escuro #1E2A38
Cinza claro #E5ECFC
Branco #FFFFFF

Fonte:

Roboto

---

# Resultado esperado

Gerar:

- estrutura de pastas completa
- banco de dados SQL profissional
- API PHP funcional
- telas React Native
- integração com API
- exemplos de requisições

O código deve estar pronto para iniciar o desenvolvimento imediatamente.

---

# Arquitetura Profissional do Sistema

## App Mobile – Gestão Logística Nilfisk

---

# 1. Visão Geral da Arquitetura

Este projeto consiste em um **aplicativo mobile para gestão logística**, responsável por controlar todo o fluxo operacional das máquinas desde o recebimento do pedido até a entrega ao cliente.

A arquitetura segue um modelo **modular e escalável**, dividido em camadas para facilitar manutenção e crescimento futuro.

```
Mobile App (React Native)
        ↓
API REST (PHP)
        ↓
Camada de Serviços (Regras de Negócio)
        ↓
Camada de Dados
        ↓
Banco de Dados (MySQL)
```

---

# 2. Camadas do Sistema

## 2.1 Camada Mobile

Aplicativo utilizado pelos usuários operacionais da logística.

### Tecnologias

* React Native
* Expo
* React Navigation
* Axios

### Responsabilidades

* Interface do usuário
* Captura de fotos
* Preenchimento de formulários
* Consumo da API
* Controle de navegação
* Exibição de relatórios

---

## 2.2 Camada API

Responsável por intermediar o aplicativo com o banco de dados.

### Tecnologias

* PHP 8+
* API REST
* Autenticação JWT

### Responsabilidades

* autenticação de usuários
* validação de dados
* execução das regras de negócio
* comunicação com banco de dados
* upload de imagens
* controle de permissões

---

## 2.3 Camada de Serviços

Camada responsável pelas regras de negócio.

### Exemplos de serviços

```
PedidoService
EntregaService
EmbalagemService
OficinaService
FotoService
RelatorioService
```

### Responsabilidades

* validação de fluxo logístico
* cálculo de tempos de processo
* geração de relatórios
* automação de envio de e-mails

---

## 2.4 Camada de Dados

Responsável pelo acesso ao banco de dados.

### Responsabilidades

* execução de consultas SQL
* persistência de dados
* otimização de consultas
* gerenciamento de relacionamentos

---

# 3. Banco de Dados Avançado (Modelo ERP)

O banco foi projetado para permitir **rastreabilidade completa das operações logísticas**.

---

# Tabela: usuarios

```
usuarios
---------
id
nome
email
senha
perfil
telefone
ativo
data_criacao
```

### Perfis possíveis

```
administrador
coordenador
estoquista
transporte
```

---

# Tabela: clientes

```
clientes
---------
id
nome
cnpj
telefone
email
endereco
cidade
estado
cep
data_criacao
```

---

# Tabela: vendedores

```
vendedores
---------
id
nome
email
telefone
ativo
```

---

# Tabela: pedidos

Tabela central do sistema.

```
pedidos
---------
id
numero_pedido
cliente_id
vendedor_id
status
tipo_processo
observacoes
data_criacao
data_entrega
```

---

# Tabela: pedido_maquinas

Relaciona máquinas com pedidos.

```
pedido_maquinas
---------
id
pedido_id
modelo
numero_serie
codigo_ativo
quantidade
```

---

# Tabela: etapas_logisticas

Controla o fluxo logístico completo.

```
etapas_logisticas
---------
id
pedido_id
etapa
usuario_id
data_inicio
data_fim
tempo_total
```

### Exemplos de etapas

```
separacao
oficina
retorno_oficina
embalagem
envio
entrega
```

---

# Tabela: checklist_embalagem

```
checklist_embalagem
---------
id
pedido_id
item
status
usuario_id
data_check
```

---

# Tabela: fotos

Armazena imagens relacionadas ao pedido.

```
fotos
---------
id
pedido_id
tipo
arquivo
usuario_id
data_upload
```

### Tipos de foto

```
maquina
embalagem
entrega
canhoto
```

---

# Tabela: fretes

```
fretes
---------
id
pedido_id
transportadora
tipo_frete
valor
previsao_entrega
data_envio
```

---

# Tabela: entregas

```
entregas
---------
id
pedido_id
data_entrega
recebedor
observacoes
confirmado
```

---

# Tabela: ocorrencias

```
ocorrencias
---------
id
pedido_id
tipo
descricao
custo
data_ocorrencia
usuario_id
```

---

# Tabela: logs

Tabela utilizada para auditoria completa.

```
logs
---------
id
usuario_id
acao
tabela
registro_id
data_log
```

---

# 4. Estrutura Ideal do Projeto

Estrutura recomendada para permitir crescimento do sistema.

```
logistica-nilfisk
│
├── backend
│
│   ├── api
│   │   ├── auth
│   │   ├── pedidos
│   │   ├── maquinas
│   │   ├── fretes
│   │   ├── entregas
│   │   ├── fotos
│   │   └── relatorios
│
│   ├── controllers
│
│   ├── models
│
│   ├── services
│
│   ├── middleware
│
│   ├── config
│
│   └── database
│
├── mobile-app
│
│   ├── src
│   │
│   ├── screens
│   │
│   ├── components
│   │
│   ├── services
│   │
│   ├── navigation
│   │
│   ├── hooks
│   │
│   └── utils
│
└── docs
```

---

# 5. Sistema de Status Logístico

Padronização dos status do pedido.

```
recebido
separacao
oficina
retorno_oficina
embalagem
pronto_envio
enviado
entregue
ocorrencia
```

Isso permite geração de relatórios e automações.

---

# 6. Sistema de Métricas

O sistema deve calcular automaticamente os seguintes indicadores.

## Tempo de oficina

```
entrada_oficina → retorno_oficina
```

## Tempo de embalagem

```
inicio_embalagem → final_embalagem
```

## Tempo total do pedido

```
data_criacao → data_entrega
```

## Produtividade de operadores

```
tempo médio por tarefa
```

---

# 7. Estrutura de Upload de Fotos

Organização recomendada no servidor.

```
/uploads

/uploads/maquinas
/uploads/embalagem
/uploads/entregas
/uploads/canhotos
```

### Padrão de nome de arquivo

```
pedidoID_tipo_timestamp.jpg
```

Exemplo

```
1045_maquina_1715212121.jpg
```

---

# 8. Segurança do Sistema

Boas práticas recomendadas.

* autenticação JWT
* senha com hash bcrypt
* validação de dados na API
* controle de permissões por perfil
* logs de ações dos usuários

---

# 9. Preparação para Publicação na Play Store

Para publicar o aplicativo será necessário:

* Conta Google Developer
* Ícone do aplicativo
* Screenshots do aplicativo
* Política de privacidade
* Arquivo APK ou AAB

---

# Estrutura do App

```
com.nilfisk.logistica
```

Nome do aplicativo

```
Logística Nilfisk
```

---

# 10. Versão 1.0 do Produto

Funcionalidades essenciais da primeira versão.

* login
* cadastro de pedidos
* cadastro de máquinas
* fluxo logístico
* checklist de acessórios
* registro de fotos
* registro de frete
* confirmação de entrega
* registro de ocorrências
* relatórios operacionais

---

# 11. Evoluções Futuras do Sistema

Possíveis melhorias para próximas versões.

* rastreamento GPS de entregas
* integração com ERP
* assinatura digital de entrega
* QR Code nas máquinas
* notificações push
* dashboard gerencial avançado
* integração com transportadoras
* analytics logístico

---

# Conclusão

Com essa arquitetura o sistema possui:

* estrutura profissional
* banco de dados robusto
* rastreabilidade completa do processo
* capacidade de escalar para múltiplos usuários
* base preparada para evolução futura

Este modelo permite transformar o sistema futuramente em um **produto SaaS de gestão logística**.
