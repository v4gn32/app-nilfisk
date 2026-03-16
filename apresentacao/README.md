# Gestão Logística Nilfisk

Sistema web responsivo desenvolvido para apoiar o controle operacional
do fluxo logístico de máquinas, desde o recebimento do pedido até a
entrega final ao cliente.

A aplicação centraliza informações do processo logístico, garante
rastreabilidade das máquinas e permite acompanhar cada etapa da operação
em tempo real através de um sistema acessível pelo navegador.

------------------------------------------------------------------------

# Demonstração em Vídeo

Assista à apresentação do sistema:

[Assistir ao vídeo da
apresentação](./Apresentacao_Gestao_Logistica_Nilfisk.mp4)

------------------------------------------------------------------------

# Download da Apresentação em PDF

Também é possível visualizar ou baixar a apresentação completa em PDF:

[Baixar a apresentação em
PDF](./Apresentacao_Gestao_Logistica_Nilfisk.pdf)

------------------------------------------------------------------------

# Introdução

O **Gestão Logística Nilfisk** é um sistema web responsivo criado para
organizar e controlar o fluxo logístico de máquinas dentro da operação
da empresa.

A aplicação permite registrar cada etapa do processo logístico,
acompanhar responsáveis pelas atividades, registrar evidências
fotográficas e manter um histórico completo das operações realizadas.

O sistema foi projetado para funcionar em qualquer dispositivo com
navegador, como computadores, tablets e celulares, facilitando o acesso
das equipes envolvidas no processo.

------------------------------------------------------------------------

# Desafios Operacionais

Em operações logísticas é comum enfrentar alguns problemas como:

-   Falta de visibilidade sobre o andamento dos pedidos
-   Dificuldade em rastrear máquinas e números de série
-   Processos operacionais realizados de forma manual
-   Falta de registro padronizado das etapas do processo
-   Ausência de evidências fotográficas das entregas
-   Dificuldade em medir tempo de execução das atividades

Essas dificuldades podem impactar diretamente a eficiência operacional e
a qualidade do controle logístico.

------------------------------------------------------------------------

# Proposta da Solução

O sistema Gestão Logística Nilfisk foi desenvolvido para digitalizar e
padronizar o processo logístico.

Entre os principais objetivos da solução estão:

-   Centralizar o controle dos pedidos
-   Garantir rastreabilidade das máquinas
-   Registrar responsáveis por cada etapa
-   Padronizar o processo de embalagem
-   Registrar evidências fotográficas
-   Controlar transportadoras e fretes
-   Registrar ocorrências logísticas
-   Monitorar indicadores operacionais
-   Automatizar comunicações por e-mail

O sistema é totalmente acessado via navegador e possui interface
responsiva para diferentes tamanhos de tela.

------------------------------------------------------------------------

# Principais Funcionalidades

O sistema permite que a equipe logística execute e acompanhe diversas
atividades operacionais.

Entre elas:

-   Cadastro e gerenciamento de pedidos
-   Registro de máquinas vinculadas aos pedidos
-   Controle das etapas de oficina
-   Processo de embalagem com checklist de acessórios
-   Registro de fotos das máquinas e da entrega
-   Controle de transportadoras e fretes
-   Registro de ocorrências logísticas
-   Monitoramento de indicadores operacionais
-   Envio automático de e-mails após a conclusão da entrega

------------------------------------------------------------------------

# Tecnologias Utilizadas

  Camada               Tecnologias
  -------------------- -----------------------
  Interface Web        HTML, CSS, JavaScript
  Backend              PHP
  Banco de Dados       MySQL
  Comunicação          API REST
  Upload de arquivos   PHP Upload
  Envio de e-mails     SMTP / PHP Mail

------------------------------------------------------------------------

# Público-Alvo

O sistema foi projetado para equipes envolvidas no processo logístico da
empresa.

Principais usuários:

-   Administradores responsáveis pela gestão do sistema
-   Coordenadores logísticos responsáveis pela organização dos pedidos
-   Estoquistas responsáveis pelas tarefas operacionais
-   Responsáveis pelo transporte e entrega das máquinas

------------------------------------------------------------------------

# Benefícios

A implementação do sistema traz diversos benefícios para a operação
logística:

-   Maior controle sobre o fluxo operacional
-   Rastreabilidade completa das máquinas
-   Registro fotográfico das operações
-   Padronização dos processos logísticos
-   Melhor comunicação entre as equipes
-   Acompanhamento de indicadores de desempenho
-   Redução de erros operacionais
-   Histórico completo das entregas realizadas

------------------------------------------------------------------------

# Fluxo do Processo Logístico

``` mermaid
graph TD
A[Pedido Recebido] --> B[Cadastro do Pedido]
B --> C[Cadastro das Máquinas]
C --> D[Separação no Estoque]
D --> E[Envio para Oficina]
E --> F[Retorno da Oficina]
F --> G[Processo de Embalagem]
G --> H[Checklist de Acessórios]
H --> I[Registro de Fotos]
I --> J[Registro do Frete]
J --> K[Envio da Mercadoria]
K --> L[Entrega ao Cliente]
L --> M[Registro da Entrega]
M --> N[Envio Automático de E-mail]
```

------------------------------------------------------------------------

# Objetivo do Projeto

O principal objetivo do sistema é oferecer uma plataforma digital para
controle logístico, permitindo maior organização das operações e melhor
visibilidade sobre cada etapa do processo.

A solução foi pensada para apoiar a tomada de decisão, melhorar a
rastreabilidade das entregas e aumentar a eficiência das equipes
responsáveis pela logística.
