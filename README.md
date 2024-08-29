# 🖥️ Workshop de Cypress
Neste README você encontrará os requisitos, passo a passo para rodar o projeto, sugestão de lista de exercícios para serem realizados posteriormente ao desafio, e recomendações de conteúdos sobre Cypress. 
Em caso de dúvidas, o contato com os facilitadores é sempre bem-vindo! 
<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQEkU6C6WECrQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702430149778?e=1730332800&v=beta&t=MzRBpBluixhwppzKWR92WAIeqb6mbkY117CrI_K-oj0" alt="Imagem 1" width="200" style="border-radius: 10px;"/>
        <p><strong>Raul de Souza</strong></p>
        <p>raul.santos@db.tec.br</p>
        <p><a href="https://www.linkedin.com/in/raul-de-souza/" target="_blank">LinkedIn</a></p>
      </td>
      <td align="center">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQGXqwUbDJ44JA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711630108544?e=1730332800&v=beta&t=tTwtZ_N6cN7i38S3FMNdUDGRzCP2WX0h5rKLsidcHiE" alt="Imagem 2" width="200" style="border-radius: 10px;"/>
        <p><strong>Matheus de Almeida</strong></p>
        <p>matheus.muller@db.tec.br</p>
        <p><a href="https://www.linkedin.com/in/matheusalmeida-qa/" target="_blank">LinkedIn</a></p>
      </td>
      <td align="center">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQHesvxl5Czfog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711560872796?e=1730332800&v=beta&t=nqshe2YGoG7z211AiI3dBByzFrOK_OBXJ3C5lDDgoN4" alt="Imagem 3" width="200" style="border-radius: 10px;"/>
        <p><strong>Yasmin Castro</strong></p>
        <p>yasmin.souza@db.tec.br</p>
        <p><a href="https://www.linkedin.com/in/castro-yasmin/" target="_blank">LinkedIn</a></p>
      </td>
    </tr>
  </table>
</div>


### Índice
- [Requisitos mínimos](#requisitos-mínimos)
- [Como executar o projeto](#como-executar-o-projeto)
- [Lista de exercícios](#lista-de-exercicios)
- [Recomendações de conteúdos sobre Cypress](#recomendações-de-conteúdos-sobre-cypress)

## 🛠 Requisitos mínimos <a id="requisitos-mínimos"></a>

- Node.js: v18.17.1 ou superior
- NPM: v9.6.7 ou superior
- GIT

## 🤔 Como executar o projeto <a id="como-executar-o-projeto"></a>

No seu terminal, execute os seguintes comandos:

- Clone o repositório
git clone https://github.com/r4ulzito/cypress-js-sample.git

- Acesse o diretório do projeto
cd cypress-js-sample

-  Instale as dependências
npm install

- Execute o Cypress
npm run cypress:open



## 📚 Exercícios para praticar <a id="lista-de-exercicios"></a>
<b>Faça um fork desse projeto e adicione mais cenários! Algumas sugestões:</b>

<b>DADO:</b> Que sou um usuário do Sauce Demo <br>
<b>E:</b> Acesso a tela de login <br>
<b>QUANDO:</b> Eu preencher o campo Username com ‘wrong_user’ <br>
<b>E:</b> Eu preencher o campo password com ‘wrong_password’ <br>
<b>E:</b> Clicar no botão Login <br>
<b>ENTÃO:</b> Devo ver uma mensagem de erro indicando credenciais incorretas. <br>
<br>
<b>DADO:</b> Que sou usuário do Sauce Demo <br>
<b>E:</b> Acesso à tela de produtos <br>
<b>QUANDO:</b> Eu acessar a tela de produtos <br>
<b>ENTÃO:</b> Devo ver a lista de produtos exibida com os nomes e preços corretos. <br>
<br>
<b>DADO:</b> Que sou usuário do Sauce Demo <br>
<b>E:</b> Adicionei um item ao carrinho <br>
<b>QUANDO:</b> Eu clicar no botão Remove ao lado do item no carrinho <br>
<b>ENTÃO:</b> O carrinho deve atualizar e o item deve ser removido. <br>
<br>
<b>DADO:</b> Que sou usuário do Sauce Demo <br>
<b>E:</b> Adicionei um item ao carrinho <br>
<b>QUANDO:</b> Eu alterar a quantidade de itens para 2 no carrinho <br>
<b>ENTÃO:</b> O carrinho deve mostrar a quantidade correta de itens. <br>
<br>
<b>DADO:</b> Que sou usuário do Sauce Demo <br>
<b>E:</b> Adicionei itens ao carrinho <br>
<b>QUANDO:</b> Eu clicar no botão Checkout e voltar para a tela de produtos <br>
<b>ENTÃO:</b> Os itens ainda devem estar no carrinho quando eu retornar.<br>
<br>
<b>DADO:</b> Que sou usuário do Sauce Demo <br>
<b>E:</b> Acesso à tela de produtos <br>
<b>QUANDO:</b> Eu redimensionar a janela do navegador <br>
<b>ENTÃO:</b> A tela deve ajustar corretamente e manter a usabilidade. <br>


## 🧵 Recomendações de conteúdos sobre Cypress <a id="recomendações-de-conteúdos-sobre-cypress"></a>

Blog do Walmyr Filho (embaixador do Cypress no Brasil), sobre testes:
https://talkingabouttesting.com/

Playlist também do Walmyr, sobre Cypress:
https://www.youtube.com/watch?v=w13JPmteGSM&list=PL-eblSNRj0QGDcVIccBBBp93fJbtRkKML

