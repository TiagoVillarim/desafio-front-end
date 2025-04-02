---
sidebar_position: 1
slug: /
---

## Visão Geral

O **Allintra.Framework.Exchanges** é uma plataforma que padroniza a comunicação com múltiplas exchanges, permitindo que a aplicação interaja com qualquer corretora sem precisar lidar com suas particularidades. Ele abstrai as diferenças entre **APIs, formatos de dados e protocolos**, oferecendo uma interface única e consistente para todas as corretoras integradas.

O namespace **Allintra.Framework.Exchanges.Abstractions** constitui o **núcleo do framework**, sendo responsável por gerenciar **containers de dependência** essenciais para garantir um funcionamento consistente da aplicação. Ele fornece a base para a implementação e a injeção de **Providers, Adapters e Extensões**, permitindo que o framework mantenha sua modularidade e flexibilidade.

---

### Funcionalidades

- Suporte à injeção de dependências do .NET.
- Abstrações para WebSocket Channels.
- Gerenciamento de limites de inscrição em WebSockets.
- Criação dinâmica de conexões WebSocket conforme limites configurados.
- Suporte a WebSocket Requests.
- Monitoramento do estado de notificações, WebSocket Channels e WebSocket Requests.
- Controle de Rate Limits em APIs HTTPS.
- Todas essas funcionalidades são adaptáveis para qualquer exchange.
- Estrutura modular para facilitar a adição de novas Exchanges.
- Estrutura modular para facilitar a criação de Extensões que podem conter novos Providers e Adapters.
- Exchanges podem implementar apenas os Adapters que lhes convêm.
- E muito mais...

---

## Filosofia

O **Allintra.Framework.Exchanges** foi desenvolvido para resolver um desafio:

> “Como conectar-se simultaneamente a várias corretoras, obter e processar dados de mercado sem tornar a aplicação excessivamente verbosa, complexa ou difícil de manter e expandir, considerando que cada corretora possui uma API com formatos distintos?”

O objetivo principal do framework é **abstrair a complexidade** dessas integrações, criando uma **camada única e unificada** que permita a adição de novas corretoras de forma simples e eficiente sem afetar a aplicação.

Para a **aplicação final**, não há distinção entre as exchanges: todas seguem o mesmo **modelo de comunicação, estrutura de dados e tipagem**, permitindo que qualquer corretora integrada seja utilizada da mesma maneira.

O **Allintra.Framework.Exchanges** transforma o processo de integração com múltiplas exchanges em algo **padronizado e previsível**, reduzindo a complexidade do desenvolvimento e melhorando a escalabilidade do sistema.

---

### Arquitetura

A arquitetura do **Allintra.Framework.Exchanges** é composta por quatro componentes principais:

- **Providers** → Serviços internos que oferecem suporte aos Adapters, fornecendo funcionalidades específicas.
- **Adapters** → Interfaces que conectam o framework às exchanges, garantindo um acesso padronizado.
- **Notificações** → Mecanismo que permite que múltiplas exchanges enviem notificações em **tempo real** para a aplicação, desde que ela esteja inscrita para receber atualizações sobre um determinado tipo de item ou objeto.
- **Extensões** → APIs que permitem que a aplicação interaja com os Adapters, além de fornecer um mecanismo para que as exchanges implementem seus próprios Adapters e Providers.

O framework foi desenvolvido sobre o modelo de **Injeção de Dependência**, utilizando **Microsoft.Extensions.DependencyInjection**, garantindo **modularidade, flexibilidade e escalabilidade** na integração com múltiplas exchanges.
