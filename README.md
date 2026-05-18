# Arabian Pods

Site estatico ficticio para catalogo de pods descartaveis, com carrinho local e checkout via WhatsApp.

## Arquivos principais

- `index.html`: estrutura da pagina.
- `styles.css`: visual, responsividade e animacoes.
- `script.js`: catalogo, carrinho, validacao de idade e checkout.
- `logo-arabian-pods.png`: logo usada no layout.
- `vercel.json`: configuracao simples para deploy na Vercel.

## Como publicar na Vercel

1. Crie um repositorio no GitHub.
2. Envie estes arquivos para o repositorio.
3. Entre em https://vercel.com e clique em `Add New Project`.
4. Importe o repositorio do GitHub.
5. Em framework, selecione `Other`.
6. Build command: deixe vazio.
7. Output directory: deixe vazio.
8. Clique em `Deploy`.

## Configuracoes uteis

No arquivo `script.js`, ajuste:

- `phoneNumber`: numero do WhatsApp da loja, no formato internacional sem simbolos.
- `products`: lista de produtos, precos, sabores e cores.

## Observacao

Este projeto nao possui backend, banco de dados ou pagamentos integrados. O checkout apenas monta uma mensagem e abre o WhatsApp.
