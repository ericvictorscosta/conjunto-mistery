import React, { useRef, useEffect } from "react"
import { Button } from "../../components/Button"
import { HeaderPromotion } from "../../components/HeaderPromotion"
import { LogoComBanner } from "../../components/LogoComBanner"
import { GlobalStyle } from "../../styles/global"
import CarrosselMain from "../../components/CarrosselMain"
import { Price } from "../../components/Price"
import { Estoque } from "../../components/Estoque"
import { Cronometro } from "../../components/Cronometro"
import DivisorSectionFourth from "../../assets/fourth-divisor.svg"
import { Garantia } from "../../components/Garantia"
import { CardProduct } from "../../components/CardProduct"
import { Faq } from "../../components/Faq"
import { Footer } from "../../components/Footer"
import { ImageComponent } from "../../components/ImagesComponent"
import { useNavigate } from "react-router-dom"
import { Avaliables } from "../../components/Avaliables"
import { FrameDefault } from "./db"
import ObsDownButton from "../../components/ObsDownButton"
import { CarrosselSecundary } from "../../components/CarrosselSecundary"
import { Container, Row, PriceCtn, ElementDivisionTwo, Section } from "./styles"

function KitPanelas() {
  const Db = FrameDefault
  const navigate = useNavigate()

  // const campoRef = useRef(null)
  const price = Db.Price.preco

  const handleButtonClick = () => {
    navigate(`/checkout/22`)

    fbq("track", "AddToCart", {
      content_type: Db.Price.tituloProduto,
      value: price,
      currency: "BRL",
    })
  }

  // const showPricePix = price - price * 0.07
  const showCortPrice = price * 2
  const minhaSecaoRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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

            <PriceCtn id="sectionRef" ref={minhaSecaoRef}>
              <Price
                title={Db.Price.tituloProduto}
                parcelas="3x"
                cutPrice={showCortPrice.toFixed(2)}
                parcelaPrice={(price * 0.3535).toFixed(2)}
                valorTotal={price}
                valor2x={Db.Price.preco2x()}
                valor3x={Db.Price.preco3x()}
                valor4x={Db.Price.preco4x()}
                valor5x={Db.Price.preco5x()}
                valor6x={Db.Price.preco6x()}
                valor7x={Db.Price.preco7x()}
                valor8x={Db.Price.preco8x()}
                valor9x={Db.Price.preco9x()}
                valor10x={Db.Price.preco10x()}
                valor11x={Db.Price.preco11x()}
                valor12x={Db.Price.preco12x()}
                valorTotal2x={(price * 0.5225 * 2).toFixed(2)}
                valorTotal3x={(price * 0.3535 * 3).toFixed(2)}
                valorTotal4x={(price * 0.269 * 4).toFixed(2)}
                valorTotal5x={(price * 0.21832 * 5).toFixed(2)}
                valorTotal6x={(price * 0.1845 * 6).toFixed(2)}
                valorTotal7x={(price * 0.16045 * 7).toFixed(2)}
                valorTotal8x={(price * 0.1424 * 8).toFixed(2)}
                valorTotal9x={(price * 0.12837 * 9).toFixed(2)}
                valorTotal10x={(price * 0.1172 * 10).toFixed(2)}
                valorTotal11x={(price * 0.10798 * 11).toFixed(2)}
                valorTotal12x={(price * 0.1004 * 12).toFixed(2)}
                valorPix={Db.Price.precoPix()}
                discountPix="7"
              />

              <Button
                title="COMPRAR AGORA"
                definedClick={handleButtonClick}
              ></Button>

              <ObsDownButton
                infoCupom={Db.infoCupom.infoCupom}
                quantifyCupom={Db.infoCupom.quantifyCupom}
              />

              <Estoque quantidade={18} />
              <Cronometro time={1400000} />
            </PriceCtn>
          </Row>
        </section>

        <Section className="description-page" style={{ padding: "0px" }}>
          <ImageComponent imagesrc={Db.Descricao.image1} />

          <ImageComponent imagesrc={Db.Descricao.image2} />

          <ImageComponent imagesrc={Db.Descricao.image3} />

          <ImageComponent imagesrc={Db.Descricao.image4} />

          <ImageComponent imagesrc={Db.Descricao.image5} />

          <ImageComponent imagesrc={Db.Descricao.image6} />

          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: "bold" }}>
              {Db.Descricao.ItemFinal01}:
            </span>{" "}
            <h5 style={{ fontWeight: "normal" }}>
              {Db.Descricao.descricaoFinal01}
            </h5>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: "bold" }}>
              {Db.Descricao.ItemFinal02}:
            </span>{" "}
            <h5 style={{ fontWeight: "normal" }}>
              {Db.Descricao.descricaoFinal02}
            </h5>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: "bold" }}>
              {Db.Descricao.ItemFinal03}:
            </span>{" "}
            <h5 style={{ fontWeight: "normal" }}>
              {Db.Descricao.descricaoFinal01}
            </h5>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: "bold" }}>
              {Db.Descricao.ItemFinal04}:
            </span>{" "}
            <h5 style={{ fontWeight: "normal" }}>
              {Db.Descricao.descricaoFinal01}
            </h5>
          </div>

          <ImageComponent imagesrc={Db.Descricao.imageProducao} />

          <span
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid #000",
              paddingBottom: 15,
              borderBottomStyle: "dashed",
            }}
          >
            {Db.Descricao.centerMensage}
          </span>

          <span style={{ fontSize: 12, marginBottom: 10 }}>
            Se você comprou e sentiu que não é para você, não se preocupe. Basta
            enviar uma mensagem para{" "}
            <strong>(contato@operagodfather.store)</strong> com as informações de
            contato e oferecemos um processo de substituição ou reembolso.
          </span>

        </Section>

        <ElementDivisionTwo
          style={{ marginTop: "20px", marginBottom: "0px" }}
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

        <Avaliables acessDb={Db.Avaliables} />

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

export default KitPanelas
