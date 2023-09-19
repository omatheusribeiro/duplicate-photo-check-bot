# Duplicate Photo Check

O Duplicate Photo Check é uma aplicação desenvolvida em .NET Core 7, projetada para ajudar os usuários a encontrar e gerenciar fotos duplicadas em suas pastas. Ele consiste em uma API que permite aos usuários especificar um diretório e, em seguida, verifica se existem fotos duplicadas nesse diretório, movendo as duplicatas para uma pasta separada. Além disso, o projeto inclui uma interface de usuário amigável construída em Angular 16.

## Estrutura de Pastas

O projeto segue uma arquitetura limpa (clean architecture) para garantir uma separação clara das responsabilidades. A estrutura de pastas é organizada da seguinte maneira:

- **duplicate-photo-check.Api**: Esta é a camada de visualização que lida com as solicitações HTTP e interage com os clientes. A API expõe os endpoints necessários para interagir com a funcionalidade de verificação de fotos duplicadas.

- **duplicate-photo-check.Application**: Nesta camada, reside a lógica de aplicação e os serviços responsáveis por coordenar as ações da aplicação. Aqui, a verificação de fotos duplicadas é implementada.

- **duplicate-photo-check.Domain**: A camada de domínio é onde a lógica de negócios e as entidades do domínio são definidas. Ela encapsula as regras de negócios da aplicação.

- **duplicate-photo-check.Front**: Esta é a parte do front-end da aplicação construída em Angular 16. Ele fornece uma interface amigável para os usuários interagirem com a API e visualizarem os resultados da verificação de fotos duplicadas.

- **duplicate-photo-check.Infra**: A camada de infraestrutura lida com detalhes técnicos, como o acesso ao banco de dados (se necessário) e a configuração da aplicação. Ela mantém a separação entre as camadas de aplicação e infraestrutura.

## Como Usar

Para usar o Duplicate Photo Check, siga estas etapas:

1. Clone este repositório para o seu ambiente local.

2. Certifique-se de ter o .NET Core 7 e o Angular 16 instalados em sua máquina.

3. Navegue para a pasta `duplicate-photo-check.Api` e execute a aplicação .NET Core para iniciar a API:

   ```
   dotnet run
   ```

4. Navegue para a pasta `duplicate-photo-check.Front` e inicie o front-end Angular:

   ```
   ng serve
   ```

5. Acesse a interface de usuário em seu navegador e utilize a API para verificar e gerenciar fotos duplicadas.

## Contribuição

Se você deseja contribuir para o projeto Duplicate Photo Check, fique à vontade para abrir problemas (issues) ou enviar solicitações de pull (pull requests). Sua ajuda é muito bem-vinda!

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.