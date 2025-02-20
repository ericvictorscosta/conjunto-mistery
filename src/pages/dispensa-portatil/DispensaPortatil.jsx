import React, { useRef, useEffect } from "react"
import { Button } from "../../components/Button"
import { HeaderPromotion } from "../../components/HeaderPromotion"
import { LogoComBanner } from "../../components/LogoComBanner"
import { GlobalStyle } from "../../styles/global"
import CarrosselMain from "../../components/CarrosselMain"
import { Price } from "../../components/Price"
import { Estoque } from "../../components/Estoque"
import { Cronometro } from "../../components/Cronometro"
import { EuQueroAgora } from "../../components/ButtonQueroAgora"
import DivisorSectionFourth from "../../assets/fourth-divisor.svg"
import { CarrosselSecundary } from "../../components/CarrosselSecundary"
import { Footer } from "../../components/Footer"
import { Titulo } from "../../components/Titulo"
import { Text } from "../../components/Text"
import { ImageComponent } from "../../components/ImagesComponent"
import { FrameDefault } from './db';
import { Garantia } from "../../components/Garantia"
import { CardProduct } from "../../components/CardProduct"
import { Faq } from "../../components/Faq"
import ObsDownButton from "../../components/ObsDownButton"
import { useNavigate } from "react-router-dom"

import {
  Container,
  Row,
  PriceCtn,
  ButtonCtn,
  Section,
  ElementDivisionTwo,
} from "./styles"

function DispensaPortatil() {
  const Db = FrameDefault;

  const price = Db.Price.preco;
  const campoRef = useRef(null);
  const minhaSecaoRef = useRef(null);

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate(`/checkout/${Db.id}`)

    fbq('track', 'AddToCart', {
      content_type: Db.Price.tituloProduto,
      value: price,
      currency: 'BRL'
    })
  };

  const showPricePix = price - (price * 0.12);
  const showCortPrice = price * 2;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <GlobalStyle />
        <section className="first-page">
          <HeaderPromotion
            descricaoPromocao={Db.BannerSup.descricaoPromocao}
            desconto={Db.BannerSup.desconto}
            validoSomente={Db.BannerSup.validoSomente}
            prazoValidade={Db.BannerSup.prazoValidade}
          />
          <LogoComBanner logo={Db.LogoMarca.link} AltLogo={Db.LogoMarca.alt} />
          <Row>
            <CarrosselMain acessDb={Db.CarouselPrincipal} />

            <PriceCtn id="sectionRef">
              <Price
                title={Db.Price.tituloProduto}
                parcelas={Db.Price.parcelas}
                cutPrice={showCortPrice.toFixed(2)}
                parcelaPrice={(price * 0.3535).toFixed(2)}
                valorTotal={price.toFixed(2)}
                valor2x={(price * 0.5225).toFixed(2)}
                valor3x={(price * 0.3535).toFixed(2)}
                valor4x={(price * 0.269).toFixed(2)}
                valor5x={(price * 0.21832).toFixed(2)}
                valor6x={(price * 0.1845).toFixed(2)}
                valor7x={(price * 0.16045).toFixed(2)}
                valor8x={(price * 0.1424).toFixed(2)}
                valor9x={(price * 0.12837).toFixed(2)}
                valor10x={(price * 0.1172).toFixed(2)}
                valor11x={(price * 0.10798).toFixed(2)}
                valor12x={(price * 0.1004).toFixed(2)}
                valorPix={showPricePix.toFixed(2)}
                discountPix="7"
              />
              <ButtonCtn>
                <Button
                  ref={campoRef}
                  title="COMPRAR AGORA"
                  definedClick={handleButtonClick}
                />
              </ButtonCtn>

              <ObsDownButton
                infoCupom={Db.infoCupom.infoCupom}
                quantifyCupom={Db.infoCupom.quantifyCupom}
              />

              <Estoque quantidade={35} />
              <Cronometro time={1050000} />
            </PriceCtn>
          </Row>
        </section>

        <Section className="description-page" style={{ paddingBottom: 20 }}>
          <Container style={{ padding: 20 }}>
            <Titulo tituloText={Db.Descricao.primeiroTitulo} />
            <Text textItem={Db.Descricao.descricao1} />
            <ImageComponent imagesrc={Db.Descricao.image1} />

            <Titulo tituloText={Db.Descricao.segundoTitulo} />
            <Text textItem={Db.Descricao.descricao2} />
            <ImageComponent imagesrc={Db.Descricao.image2} />

            <Titulo tituloText={Db.Descricao.terceiroTitulo} />
            <Text textItem={Db.Descricao.descricao3} />
            <ImageComponent imagesrc={Db.Descricao.image3} />

            <Titulo tituloText={Db.Descricao.quartoTitulo} />
            <Text textItem={Db.Descricao.descricao4} />
            <ImageComponent imagesrc={Db.Descricao.image4} />

            <Titulo tituloText={Db.Descricao.quintoTitulo} />
            <Text textItem={Db.Descricao.descricao5} />
            <ImageComponent imagesrc={Db.Descricao.image5} />

            <Titulo tituloText={Db.Descricao.sextoTitulo} />
            <Text textItem={Db.Descricao.descricao6} />
            <ImageComponent imagesrc={Db.Descricao.image6} />

            <Titulo tituloText={Db.Descricao.setimoTitulo} />
            <Text textItem={Db.Descricao.descricao7} />
            <ImageComponent imagesrc={Db.Descricao.image7} />

            <div
              style={{ display: "flex", justifyContent: "center", gap: "5px" }}
            >
              <Text textItem={Db.Descricao.material} variant="second" />
              <Text textItem={Db.Descricao.materialItem} />
            </div>

            <div
              style={{ display: "flex", justifyContent: "center", gap: "5px" }}
            >
              <Text textItem={Db.Descricao.tamanho} variant="second" />
              <Text textItem={Db.Descricao.dimensoes} />
            </div>

            <Text textItem={Db.Descricao.cores} variant="second" />
            <Text textItem={Db.Descricao.coresdisponiveis} />

            <Titulo tituloText={Db.Descricao.oitavoTitulo} />
            <Text textItem={Db.Descricao.descricao8} />
            <ImageComponent imagesrc={Db.Descricao.image8} />
          </Container>

          <EuQueroAgora
            onClick={() =>
              minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
        </Section>

        <ElementDivisionTwo
          style={{ marginTop: "20px" }}
          src={DivisorSectionFourth}
        />
        <Garantia
          seloGarantia="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/10002427-removebg-preview.png?v=1676577219"
          titleGarantia="SATISFAÇÃO GARANTIDA!"
          textGarantiaOne="Nos orgulhamos em oferecer "
          textGarantiaStrongOne="produtos de alta qualidade e inspecioná-los antes do envio. "
          textGarantiaTwo="Entretanto, oferecemos Garantia incondicional de 30 dias para Trocas e Devoluções. Se o produto não atender sua expectativa nós devolvemos o seu dinheiro ou fazemos o envio de um novo pedido. Contate- nos em até 30 dias após o recebimento do pedido e solicite sua troca ou reembolso. Além dos 30 dias de troca, nossa empresa oferece mais 2 Anos corridos de "
          textGarantiaStrongTwo="Garantia Estendida "
          textGarantiaThree="para que você possa usufruir dessa experiência com mais tempo."
        />
        <ElementDivisionTwo
          src={DivisorSectionFourth}
          style={{ transform: "rotate(180deg)", transform: "scaleY(-1)" }}
        />

        <CardProduct
          infoPromo={Db.CardProduto.infoPromo}
          titleProduct={Db.CardProduto.tituloProduto}
          subtitleProduct={Db.CardProduto.subtituloProduto}
          imageProduct={Db.CardProduto.imageProduto}
          cutPriceValue={"R$ " + showCortPrice}
          parcelas="12"
          valorParcelas={(price * 0.1004).toFixed(2)}
          valorTotal={price.toFixed(2)}
          linkButton={() =>
            minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />

        <Faq
          acessDb={Db.Faq}
          titlePage={Db.FaqTitulo}
          subtitlePage={Db.FaqSubtitulo}
        />

        <EuQueroAgora
          onClick={() =>
            minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />

        <CarrosselSecundary
          idProduto={Db.id}
        // subtitleCarrosselOne={Db.CarouselSecundarioTitle}
        />

        <Footer
          paginaInicial="https://operagodfather.shop/"
          prazoEntrega="7 e 21 dias úteis"
        />
      </Container>
    </>
  )
}



export default DispensaPortatil
