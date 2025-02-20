export const FrameDefault = {
  id: 21,
  BannerSup: {
    descricaoPromocao: "PROMOÇÃO 50% OFF+FRETE GRÁTIS",
    desconto: "DESCONTO",
    validoSomente: "VÁLIDO SOMENTE PARA ESSA",
    prazoValidade: "SEMANA!",
  },

  LogoMarca: {
    link: "https://cdn.shopify.com/s/files/1/0738/4249/1684/files/LOGO-ADQUIRA_3f3f009d-8e3c-42e9-8cfb-bfd31e11a1da.png?v=1680016762",
    alt: "Jacob & Co | Loja Oficial",
  },

  CarouselPrincipal: [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0549/0003/1545/products/escorre5.png?v=1684866989",
      alt: "Image 1",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0549/0003/1545/products/escorre3.webp?v=1684866989",
      alt: "Image 2",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0549/0003/1545/products/escorre4.webp?v=1684866989",
      alt: "Image 3",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0549/0003/1545/products/escorre2.webp?v=1684866989",
      alt: "Image 4",
    },
  ],

  Price: {
    tituloProduto:
      "ESCORREDOR PRO FIVE (PROMOÇÃO SOMENTE HOJE) + BRINDE EXCLUSIVO - FRETE GRÁTIS  🚚 ",
    preco: 89.9,
    precoPix: function () {
      return (this.preco - this.preco * 0.12).toFixed(2)
    },
    preco2x: function () {
      return (this.preco * 0.5225).toFixed(2)
    },
    preco3x: function () {
      return (this.preco * 0.3535).toFixed(2)
    },
    preco4x: function () {
      return (this.preco * 0.269).toFixed(2)
    },
    preco5x: function () {
      return (this.preco * 0.21832).toFixed(2)
    },
    preco6x: function () {
      return (this.preco * 0.1845).toFixed(2)
    },
    preco7x: function () {
      return (this.preco * 0.16045).toFixed(2)
    },
    preco8x: function () {
      return (this.preco * 0.1424).toFixed(2)
    },
    preco9x: function () {
      return (this.preco * 0.12837).toFixed(2)
    },
    preco10x: function () {
      return (this.preco * 0.1172).toFixed(2)
    },
    preco11x: function () {
      return (this.preco * 0.10798).toFixed(2)
    },
    preco12x: function () {
      return (this.preco * 0.1004).toFixed(2)
    },
  },

  infoCupom: {
    infoCupom: "CUPOM LIMITADO AOS",
    quantifyCupom: "200 PRIMEIROS CLIENTES ☀️",
  },

  Descricao: {
    image1:
      "https://cdn.shopify.com/s/files/1/0703/8491/0625/files/01.webp?v=1673648361",

    image2:
      "https://cdn.shopify.com/s/files/1/0703/8491/0625/files/01gif.gif?v=1673648430",

    image3:
      "https://cdn.shopify.com/s/files/1/0703/8491/0625/files/02.webp?v=1673648394",

    image4:
      "https://cdn.shopify.com/s/files/1/0703/8491/0625/files/04.webp?v=1673648447",

    image5:
      "https://cdn.shopify.com/s/files/1/0703/8491/0625/files/02gif_480x480.gif?v=1673648374",

    image6:
      "https://cdn.shopify.com/s/files/1/0703/8491/0625/files/06.webp?v=1673648819",

    // Finalização Descrição
    ItemFinal01: "📦 Envio mundial segurado",
    descricaoFinal01:
      "Cada pedido inclui detalhes de rastreamento e entrega 100% garantida e segura.",

    ItemFinal02: "💰 Garantia de devolução:",
    descricaoFinal02:
      "Se seus itens chegarem danificados ou apresentarem defeito dentro de 30 dias após o uso, teremos o prazer de emitir uma substituição ou reembolso.",

    ItemFinal03: "✉️ Suporte ao cliente 24 horas por dia, 7 dias por semana:",
    descricaoFinal03:
      "Somos uma equipe de representantes prontos para ajudá-lo a responder a quaisquer perguntas ou dúvidas que você tenha.",

    ItemFinal04: "🔒 Pagamentos Seguros:",
    descricaoFinal04:
      "Cada pedido inclui detalhes de rastreamento e entrega 100% garantida e segura.",

    imageProducao:
      "https://img-va.myshopline.com/image/store/2001167855/1669708913851/717b230d28445c8e675d9a2c09c8661f.gif?w=400&h=225",

    centerMensage: "🔒 Compre 100% sem risco 🔥 ",
  },

  Avaliables: [
    {
      name: "Manuela Santos S.",
      description:
        "Gostei bastante, foi conforme anunciado. Prático de montar, e as peças acessórias pode organizar de diversas maneiras, conforme o espaço e utilidade das mesmas, eu recomendo.",
      starsIcon: "1",
    },
    {
      name: "Luana Oliveira S.",
      description:
        "Amei meu produto, chegou muito antes do prazo, recomendo. Amei, ótima qualidade, ameii amei",
      starsIcon: "0",
      imageLink:
        "https://imgs.ryviu.com/1000201234/2023/5/fullxfull/jpg/7yEAYQ0Hde5Ibqyb6Je9.jpg",
    },
    {
      name: "Bruna Lima S.",
      description:
        "Amei a compra . Produto excelente e melhorou 100% a organização da minha cozinha .",
      starsIcon: "1",
      // imageLink: "https://down-ws-br.img.susercontent.com/0ccc4940fc7e0ee34a0a1f48ec9b544f"
    },
    {
      name: "Laura Costa S.",
      description:
        "Adorei a escorredeira, ficou muito bonito e organizada a cozinha, parece resistente, vamos ver com o tempo, produto chegou muito antes do prazo, estão de parabéns.",
      starsIcon: "0",
      // imageLink: "https://down-ws-br.img.susercontent.com/br-11134103-22100-h6w8sr5asiiv39.webp"
    },
    {
      name: "Júlia Rodrigues S.",
      description:
        "Fiz o pedido de duas suspensões, uma para minha mãe e outra a vó, por isso as imagens são de locais diferentes... E sinceramente, adorei! Chegou muito bem embalada, com avisos e acima de tudo fácil de montar. Com certeza farei mais compras na loja... Fora que a postagem e entrega vieram rapidinho 🙏",
      starsIcon: "1",
      // imageLink: "https://down-ws-br.img.susercontent.com/166c521ce0469c4aa349fc50a4fffd08"
    },

    ////////////

    {
      name: "Sophia Almeida S.",
      description:
        "Apaixonada!!! Essa é a palavra! Este escorredor é perfeito, lindo, super funcional eu amei! Superou minhas expectativas. Chegou rápido e muito bem embalado. Super recomendado a loja.",
      starsIcon: "1",
      // imageLink: "https://down-ws-br.img.susercontent.com/br-11134103-23020-e10r8ch0i2mvde.webp"
    },
    {
      name: "Isabela Pereira S.",
      description:
        "Muito bom, bem resistente! Só demorou um pouco a entrega, mas vem bem embalado",
      starsIcon: "1",
      // imageLink: "https://down-ws-br.img.susercontent.com/br-11134103-22060-0e4cqkjacmdv2e.webp"
    },
    {
      name: "Giovanna Ferreira S.",
      description: `Super recomendo, recebi depois de 7 dias o meu pedido. Produto muito bem embalado, encaixotado com 2 etiquetas grandes especificando "FRÁGIL", o que pra mim demonstrou cuidado com a remessa. Produto exatamente como o especificado. Adorei.`,
      starsIcon: "1",
      // imageLink: "https://down-ws-br.img.susercontent.com/br-11134103-22080-y1m14cirw3fve1.webp"
    },
    {
      name: "Rafaela Carvalho S.",
      description:
        "Produto ótimo. Conforme a descrição. O preço está ótimo, pois estou à procura desse tipo de escorredor há 1 ano, mas todos estavam muito caros. Chegou em 2 dias. Amei.",
      starsIcon: "0",
      // imageLink: "https://down-ws-br.img.susercontent.com/br-11134103-23020-1rdkuvrt9knv99.webp"
    },
  ],

  CardProduto: {
    infoPromo: "MAIS VENDIDO",
    tituloProduto: "ESCORREDOR PRO FIVE (PROMOÇÃO SOMENTE HOJE)",
    subtituloProduto: "+ BRINDE EXCLUSIVO - FRETE GRÁTIS  🚚",
    imageProduto:
      "https://cdn.shopify.com/s/files/1/0549/0003/1545/products/escorre5.png?v=1684866989",
  },

  FaqTitulo: "DÚVIDAS FREQUENTES ESCORREGOR PROMOÇÃO",
  FaqSubtitulo: "Confira as principais dúvidas dos clientes.",
  Faq: [
    {
      itemS: "item1",
      question: "Quais os cuidados devo ter  o meu Escorredor?",
      resposta:
        "É importante secar ou guardar seus utensílios/ produtos pessoais sempre secos, isso evita o aparecimento de manchas indesejadas e que deixam um aspecto de velho, passe levemente um pano limpo com álcool se desejar. Produtos de limpeza para inox em spray também podem ser utilizados.",
    },
    {
      itemS: "item2",
      question: "Posso fazer o pagamento no ato de recebimento?",
      resposta:
        "Não. Seu pedido é enviado mediante aprovação prévia do seu pagamento pela instituição bancária.",
    },
    {
      itemS: "item3",
      question: "Quais as formas de pagamento?",
      resposta:
        "Aceitamos todos cartões de crédito, pix e boleto bancário . No cartão, você pode parcelar sua compra em até 12 vezes, sendo até 3x sem Juros. Valendo Lembrar que pagamentos no Pix tem um desconto incluso de 12.02% !",
    },
    {
      itemS: "item4",
      question: "É seguro comprar neste site?",
      resposta:
        "Sim! Está loja é autenticada e possui certificado SSL de segurança, garantindo que seus dados de pagamentos sejam protegidos por criptografia de acordo com os mais altos padrões de segurança.",
    },
    {
      itemS: "item5",
      question: "Por qual empresa é feita a entrega e qual o prazo?",
      resposta:
        "Nosso produto é entregue pelas Agências dos Correios do Brasil. O prazo para entrega padrão é de aproximadamente 6 a 12 dias dias úteis com o Frete Grátis (Para todo o Brasil). Após aprovação do pagamento. Podendo ser entregue antes deste prazo ou após este prazo por alguma intercorrência.",
    },
    {
      itemS: "item6",
      question: "Como acompanhar o status do meu pedido?",
      resposta:
        "Todos os pedidos são enviados o código de rastreamento. Ele será enviado automaticamente para o seu e-mail e WhatsApp. Você pode rastrear seu pedido sempre que quiser.",
    },
  ],
}
