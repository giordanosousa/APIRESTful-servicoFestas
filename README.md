##API RESTful de Serviços de Festa

Bem-vindo ao projeto de API RESTful para gerenciamento de serviços e festas! 🎉 Este repositório contém uma aplicação construída com Node.js, Express e MongoDB, oferecendo uma solução completa para organização de eventos.

##Funcionalidades Principais
##Serviços
- Cadastro de Serviços: Adicione novos serviços com informações como nome, descrição, preço e imagem.
- Listagem de Serviços: Consulte todos os serviços disponíveis.
- Detalhes, Atualização e Exclusão: Visualize, atualize e exclua informações de serviços específicos.
##Festas
- Criação de Festas: Registre novas festas com título, autor, descrição, orçamento, imagem e serviços selecionados.
- Validação de Orçamento: Garanta que o orçamento seja suficiente para os serviços escolhidos.
- Listagem de Festas: Consulte todas as festas registradas.
- Detalhes, Atualização e Exclusão: Visualize, atualize e exclua informações de festas específicas.
  
##Estrutura do Projeto
📁 models: Define os esquemas dos documentos MongoDB para serviços e festas.
📁 controllers: Contém lógicas de controle para manipulação de serviços e festas.
📁 routes: Define as rotas da API utilizando o Express Router.
📁 db: Configuração e conexão com o MongoDB usando Mongoose.
📄 app.js: Ponto de entrada da aplicação, onde Express é configurado e as rotas são definidas.

##Tecnologias Utilizadas
- Node.js: Plataforma de execução para construir aplicações server-side em JavaScript.
- Express: Framework web para Node.js que simplifica o desenvolvimento de APIs.
- MongoDB: Banco de dados NoSQL altamente flexível e escalável.
- Mongoose: ODM (Object Data Modeling) para MongoDB, facilitando a interação com o banco de dados.
