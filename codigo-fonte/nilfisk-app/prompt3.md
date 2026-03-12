# Criando o Prompt

Quero criar uma aplicação SaaS web responsiva. Seguem abaixo os detalhes do projeto:

## Nome do Projeto
Pedido Web

## Objetivo
Ajudar donos de empresas que vendem comida por delivery. Os donos das empresas farão a divulgação do link público de seu cardápio digital e os clientes poderão fazer seus pedidos de forma online.

## Tecnologias
- PHP
- MySQL

## Design, Cores e Layout
- Interface limpa, minimalista e profissional
- Paleta de cores: tons de verde, cinza escuro, preto e branco (#28313F, #004AAD, #797979, #38C682, #E5ECFC)
- Responsivo para qualquer dispositivo e tamanho de tela
- Focado na melhor experiência de UX
- Área administrativa: layout moderno com sidebar à esquerda (#28313F), logotipo no topo e menu de navegação
- Menu sidebar em arquivo separado: `menu.php`
- Fontes: "Poppins" e "Roboto"
- Botões: primário em #38C682, secundários em branco com borda cinza

## Requisitos Importantes
- Duas áreas separadas: cliente (cardápio público) e administrador (privada com login)
- Cardápio digital acessível sem login (área pública)
- Login exclusivo para área administrativa (sessões PHP nativas)
- Arquitetura multi-tenancy (cada empresa vê apenas seus dados)
- Código claro e preparado para evolução (pagamentos, notificações, WhatsApp)
- E-mails únicos por empresa
- Máscara de telefone: formato brasileiro (XX) XXXXX-XXXX
- Senhas: mínimo 6 caracteres
- Formato de moeda: R$ com separador de milhar
- Formato de data: dd/mm/yyyy
- Ícones modernos em formato outline

## Funcionalidades - Área do Cliente (Pública)

**Requisito:** Cliente só faz pedido se o estabelecimento estiver aberto

### Tela 1: Cardápio (página única)
- Foto do estabelecimento, nome e indicador de abertura
- Categorias na horizontal
- Produtos em destaque
- Produtos agrupados por categorias
- Clique em categoria: rola para seção correspondente
- Clique em produto: abre detalhes em modal

### Tela 2: Carrinho
- Produtos, quantidade, frete, valores unitários e totais
- Botão "Continuar para Entrega"

### Tela 3: Dados de Entrega
- Campos obrigatórios: nome completo, WhatsApp, endereço completo

### Tela 4: Pagamento
- Dinheiro
- PIX (exibir chave do restaurante)
- Cartão de débito
- Cartão de crédito (máquina no ato da entrega)

### Tela 5: Confirmação
- Dados do pedido
- Botão "Enviar confirmação no WhatsApp"
- Mensagem: `Olá! Acabei de realizar o pedido {pedido}. {itens} Valor Total: {total} Cliente: {cliente} Endereço de Entrega: {entrega}`

## Funcionalidades - Painel Administrativo (Com Login)

### Tela de Login
- E-mail e Senha

### Tela de Dashboard
- Pedidos do dia, pedidos pendentes, total faturado
- Histórico de faturamento (últimos 7 dias)
- Produtos mais vendidos (quantidade e valor)
- Pedidos recentes

### Tela de Clientes
- Nome, WhatsApp, endereço, quantidade de pedidos
- Botão para enviar WhatsApp

### Tela de Pedidos
- Cliente, data, valor total, forma de pagamento
- Status: Pendente, Aceito, Em Produção, Saiu para Entrega, Entregue, Cancelado

### Tela de Cardápio
- Criar categorias e produtos
- Informações por produto: nome, descrição, foto, preço, ativo (switch), destaque (switch), adicionais
- Botão para copiar link público

### Tela de WhatsApp
- Templates de textos para integração
- Preview do texto final com variáveis substituídas
- Confirmação de pedido
- Atualização de status

### Tela de Configurações
- Dados do estabelecimento: nome, endereço, foto, logotipo, WhatsApp, status de abertura (switch)
- Alterar senha
- Formas de pagamento: Dinheiro, PIX (com chave), Cartão de Débito, Cartão de Crédito

