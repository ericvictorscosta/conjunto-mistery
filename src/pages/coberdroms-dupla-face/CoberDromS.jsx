import React, { useState, useRef, useEffect } from "react"
import { Button } from "../../components/Button"
import { HeaderPromotion } from "../../components/HeaderPromotion"
import { LogoComBanner } from "../../components/LogoComBanner"
import { GlobalStyle } from "../../styles/global"
import CarrosselMain from "../../components/CarrosselMain"
import { Price } from "../../components/Price"
import { Estoque } from "../../components/Estoque"
import { Cronometro } from "../../components/Cronometro"
import { EuQueroAgora } from "../../components/ButtonQueroAgora"
import { ImageLp } from "../../components/ImageLp"
import { Garantia } from "../../components/Garantia"
import { CardProduct } from "../../components/CardProduct"
import { Faq } from "../../components/Faq"
import { CarrosselSecundary } from "../../components/CarrosselSecundary"
import { Footer } from "../../components/Footer"
import { FrameDefault } from "./db"
import ObsDownButton from "../../components/ObsDownButton"
import { useNavigate } from "react-router-dom"
import { Avaliables } from "../../components/Avaliables"

import {
  Container,
  Row,
  PriceCtn,
  ButtonCtn,
  Section,
  ContainerSelect,
} from "./styles"

function CoberDroms() {
  const Db = FrameDefault

  const [selectedColor, setSelectedColor] = useState("todas")
  const [selectedSize, setSelectedSize] = useState("180")
  const [price, setPrice] = useState(98.9)

  const campoRef = useRef(null)

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value)
    updatePrice(event.target.value, selectedSize)
  }

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value)
    updatePrice(selectedColor, event.target.value)
  }

  const updatePrice = (color, size) => {
    const prices = {
      "todas-180": 109.9,
    }

    const newPrice = prices[`${color.toLowerCase()}-${size.toLowerCase()}`]
    setPrice(newPrice)
  }

  const navigate = useNavigate()

  const handleButtonClick = () => {
    if (selectedColor === "todas" && selectedSize === "180") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/5F5q9A69J9hRE39"

      // navigate(`/checkout/41`)
    } else {
      console.log("Selecione uma cor e um tamanho")
    }

    fbq("track", "AddToCart", {
      content_type: Db.Price.tituloProduto,
      value: price,
      currency: "BRL",
    })
  }

  const showPricePix = price - price * 0.07
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
                valorPix={showPricePix.toFixed(2)}
                discountPix="7"
              />
              <ButtonCtn>
                <ContainerSelect>
                  <label htmlFor="sizes">Tamanho:</label>
                  <select
                    id="sizes"
                    value={selectedSize}
                    onChange={handleSizeChange}
                  >
                    <option value="180">Casal 1.80m X 2.20m</option>
                  </select>

                  <label htmlFor="colors">Cor:</label>
                  <select
                    id="colors"
                    value={selectedColor}
                    onChange={handleColorChange}
                  >
                    <option value="todas">
                      Vermelho+Preto+Cinza+Rosa+Bege
                    </option>
                  </select>
                </ContainerSelect>

                <Button
                  ref={campoRef}
                  title="COMPRAR AGORA"
                  definedClick={handleButtonClick}
                />

                <ObsDownButton
                  infoCupom={Db.infoCupom.infoCupom}
                  quantifyCupom={Db.infoCupom.quantifyCupom}
                />
              </ButtonCtn>
              <Estoque quantidade={15} />
              <Cronometro setStyle={{ marginBottom: -5 }} time={1100000} />
            </PriceCtn>
          </Row>
        </section>

        <Section
          style={{ padding: "0 0 10px 0" }}
          className="description-page"
          onClick={() =>
            minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "7px",
              fontWeight: "500",
            }}
          >
            {Db.span01}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "3px",
              fontWeight: "500",
            }}
          >
            {Db.span02}
          </span>
          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span0201}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "3px",
              fontWeight: "500",
            }}
          >
            {Db.span03}
          </span>
          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span0301}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "3px",
              fontWeight: "500",
            }}
          >
            {Db.span04}
          </span>
          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span0401}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "3px",
              fontWeight: "500",
            }}
          >
            {Db.span05}
          </span>
          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span0501}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "3px",
              fontWeight: "500",
            }}
          >
            {Db.span06}
          </span>
          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span0601}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "start",
              padding: "0 15px",
              marginBottom: "15px",
              fontWeight: "500",
            }}
          >
            {Db.span07}
          </span>

          <ImageLp
            receptStyled={{ marginBottom: "-5px", padding: "5px 15px" }}
            image={Db.ImageLpSeq1}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px", padding: "5px 15px" }}
            image={Db.ImageLpSeq2}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px", padding: "5px 15px" }}
            image={Db.ImageLpSeq3}
          />
        </Section>

        <Garantia
          seloGarantia="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/10002427-removebg-preview.png?v=1676577219"
          titleGarantia="SATISFAÇÃO GARANTIDA!"
          textGarantiaOne="Nos orgulhamos em oferecer "
          textGarantiaStrongOne="produtos de alta qualidade e inspecioná-los antes do envio. "
          textGarantiaTwo="Entretanto, oferecemos Garantia incondicional de 30 dias para Trocas e Devoluções. Se o produto não atender sua expectativa nós devolvemos o seu dinheiro ou fazemos o envio de um novo pedido. Contate- nos em até 30 dias após o recebimento do pedido e solicite sua troca ou reembolso. Além dos 30 dias de troca, nossa empresa oferece mais 2 Anos corridos de "
          textGarantiaStrongTwo="Garantia Estendida "
          textGarantiaThree="para que você possa usufruir dessa experiência com mais tempo."
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
          titlePage="DÚVIDAS FREQUENTES COBERDROMS SHERPA"
          subtitlePage="Confira as principais dúvidas dos clientes."
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

export default CoberDroms
