# Gestão Logística Nilfisk

O **Gestão Logística Nilfisk** é um aplicativo mobile desenvolvido para controlar todo o fluxo logístico de máquinas, desde o **registro da nota fiscal até a entrega ao cliente**.

O sistema permite acompanhar todas as etapas do processo:

- Entrada de pedido
- Oficina
- Embalagem
- Checklist
- Fotos da máquina
- Gestão de frete
- Entrega
- Ocorrências e sinistros

Tudo em um único aplicativo pensado para **operações logísticas industriais**.

---

# Funcionalidades

- Cadastro de pedidos e notas fiscais  
- Controle de fluxo logístico (Oficina → Embalagem → Envio → Entrega)  
- Checklist obrigatório de itens da máquina  
- Registro de fotos da máquina e acessórios  
- Controle de transportadoras e fretes  
- Registro de ocorrências e sinistros  
- Upload de documentos (canhoto da NF e CTe)  
- Envio automático de e-mail confirmando entrega  
- Dashboard com indicadores logísticos  
- Relatórios operacionais e de desempenho  

---

# Perfis de Usuário

O sistema possui **3 níveis de acesso**.

## Administrador

Responsável por:

- cadastrar usuários
- cadastrar clientes
- cadastrar transportadoras
- visualizar todos os processos
- acessar relatórios completos

Login inicial: Ja determinado no sistema e configurado direto no banco de dados

---

## Usuário de Entrada de Pedido

Responsável por:

- registrar pedidos
- registrar notas fiscais
- iniciar o processo logístico
- enviar equipamentos para oficina e embalagem

---

## Usuário de Logística

Responsável por:

- iniciar fluxo de frete
- registrar coleta
- registrar entrega
- anexar documentos
- registrar ocorrências ou sinistros

---

# 🛠️ Tecnologias Utilizadas

## Mobile App
- React Native

## Backend
- PHP (API REST)

## Banco de Dados
- MySQL

## Armazenamento
- Upload de fotos e documentos

## Integrações futuras
- Envio de e-mails automáticos  
- Notificações push  
- Sistema de rastreamento de entrega  

---

# 📂 Estrutura do Projeto
/mobile-app → Aplicativo mobile (React Native)

/backend → API do sistema em PHP

/database → Scripts SQL e estrutura do banco

/docs → Documentação técnica e fluxos do sistema


---

# 📊 Fluxo Operacional do Sistema

O aplicativo segue o fluxo logístico abaixo:
Entrada do Pedido / Nota Fiscal
↓
Oficina
↓
Embalagem
↓
Checklist obrigatório
↓
Fotos da máquina
↓
Finalização embalagem
↓
Pronto para envio
↓
Fluxo de frete
↓
Entrega
↓
Ocorrência ou Sinistro
↓
Envio automático de e-mail

---

git clone https://github.com/seu-usuario/gestao-logistica-nilfisk.git

cd gestao-logistica-nilfisk

# 📌 Como rodar o projeto localmente

Clone o repositório:


> Acesse: `http://localhost:5173` (frontend) e `http://localhost:5000` (backend)


---

# Backend
cd backend

configurar banco de dados MySQL
configurar arquivo .env com credenciais

php -S localhost:8000


---

# Mobile App
cd mobile-app

npm install
npx expo start


---

# 📍 Estrutura inicial de dados

O sistema inicia com um usuário administrador padrão:


⚠️ Após o primeiro login a senha deve ser alterada.

---

# 📈 Funcionalidades futuras

- Sistema de tracking para clientes acompanharem entregas  
- Dashboard avançado com métricas logísticas  
- Integração com ERP  
- Scanner de código de barras de notas fiscais  
- Notificações automáticas de status  

---

# 📄 Licença

Projeto desenvolvido para uso interno da operação logística **Nilfisk**.


# Documentação

<ol>
<li><a href="documentos/01-Documentação de Contexto.md"> Documentação de Contexto</a></li>
<li><a href="documentos/02-Especificação do Projeto.md"> Especificação do Projeto</a></li>
<li><a href="documentos/03-Projeto de Interface.md"> Projeto de Interface</a></li>
<li><a href="documentos/04-Testes de Software.md"> Testes de Software</a></li>
<li><a href="documentos/05-Implantação.md"> Implantação</a></li>
</ol>

## 📧 Contato

**Vagner de Oliveira Florencio**

<a href="https://www.linkedin.com/in/vagner-florencio-85679860/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>

<a href="https://www.instagram.com/v4gn32/" target="_blank">
  <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
</a>
