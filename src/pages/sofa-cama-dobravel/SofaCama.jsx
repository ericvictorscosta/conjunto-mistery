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
import ThirdDivisor from "../../assets/third-divisor.svg"
import DivisorSectionFourth from "../../assets/fourth-divisor.svg"
import { ImageLp } from "../../components/ImageLp"
import { Especificacoes } from "../../components/Especificacoes"
import { Garantia } from "../../components/Garantia"
import { AvaliablesText } from "../../components/AvaliablesText"
import { CardProduct } from "../../components/CardProduct"
import { Faq } from "../../components/Faq"
import { CarrosselSecundary } from "../../components/CarrosselSecundary"
import { Footer } from "../../components/Footer"
import { FrameDefault } from "./db"
import { useNavigate } from "react-router-dom"
import ObsDownButton from "../../components/ObsDownButton"

import {
  Container,
  Row,
  PriceCtn,
  ButtonCtn,
  ElementDivision,
  ElementDivisionTwo,
  Section,
  ContainerSelect,
  Observacao,
} from "./styles"

function SofaCamaDobravel() {
  const Db = FrameDefault

  const [selectedColor, setSelectedColor] = useState("azul")
  const [selectedSize, setSelectedSize] = useState("68")
  const [price, setPrice] = useState(129.0)

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
      "azul-68": 129.0,
      "azul-120": 150.0,
      "azul-150": 170.0,
      "cinza-68": 129.0,
      "cinza-120": 150.0,
      "cinza-150": 170.0,
      "bege-68": 129.0,
      "bege-120": 150.0,
      "bege-150": 170.0,
      "castanho-68": 129.0,
      "castanho-120": 150.0,
      "castanho-150": 170.0,
    }

    const newPrice = prices[`${color.toLowerCase()}-${size.toLowerCase()}`]
    setPrice(newPrice)
  }

  const navigate = useNavigate()

  const handleButtonClick = () => {
    if (selectedColor === "azul" && selectedSize === "68") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/GCD919D541uY6h9yg00"

      // navigate(`/checkout/1`)
    } else if (selectedColor === "azul" && selectedSize === "120") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/p62Z9b9Xl561092"

      // navigate(`/checkout/2`)
    } else if (selectedColor === "azul" && selectedSize === "150") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/HY0JB9n95Xg639kX"

      // navigate(`/checkout/3`)
    } else if (selectedColor === "cinza" && selectedSize === "68") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/qpGt9h569GD0449h29p"

      // navigate(`/checkout/4`)
    } else if (selectedColor === "cinza" && selectedSize === "120") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/LJyKX960V59wp5d9V"

      // navigate(`/checkout/5`)
    } else if (selectedColor === "cinza" && selectedSize === "150") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/O36p0x6ZVMnm8q999K5"

      // navigate(`/checkout/6`)
    } else if (selectedColor === "bege" && selectedSize === "68") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/M959uE760nUD9W7"

      // navigate(`/checkout/7`)
    } else if (selectedColor === "bege" && selectedSize === "120") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/51bS90kQ684MPASuZ99"

      // navigate(`/checkout/8`)
    } else if (selectedColor === "bege" && selectedSize === "150") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/L9W7B99659WLCzj0h"

      // navigate(`/checkout/9`)
    } else if (selectedColor === "castanho" && selectedSize === "68") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/C61cd09tOU05sUR99pj"

      // navigate(`/checkout/10`)
    } else if (selectedColor === "castanho" && selectedSize === "120") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/db91SEy5n9xK61G9g"

      // navigate(`/checkout/11`)
    } else if (selectedColor === "castanho" && selectedSize === "150") {
      window.location.href =
        "https://adquirindo-ofertas.checkout.adoorei.com/r/e9Y1J99F8F65fu2"

      // navigate(`/checkout/12`)
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
                  <label htmlFor="colors">Cor:</label>
                  <select
                    id="colors"
                    value={selectedColor}
                    onChange={handleColorChange}
                  >
                    <option value="azul">Azul</option>
                    <option value="cinza">Cinza</option>
                    <option value="bege">Bege</option>
                    <option value="castanho">Castanho</option>
                  </select>

                  <label htmlFor="sizes">Tamanho:</label>
                  <select
                    id="sizes"
                    value={selectedSize}
                    onChange={handleSizeChange}
                  >
                    <option value="68">68 cm</option>
                    <option value="120">120 cm</option>
                    <option value="150">150 cm</option>
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
              <Estoque quantidade={27} />
              <Cronometro time={1400000} />
            </PriceCtn>
          </Row>
        </section>

        <Section className="description-page">
          <ImageLp image={Db.ImageLpSeq1} />

          <ImageLp image={Db.ImageLpSeq2} />

          <ImageLp receptStyled={{ padding: 15 }} image={Db.ImageLpSeq3} />

          <span style={{ color: "blue", fontWeight: "500" }}>
            {Db.Promocao}
          </span>

          <Observacao>
            <strong>Obs: </strong>
            {Db.Observacao}
          </Observacao>

          <EuQueroAgora
            onClick={() =>
              minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
        </Section>

        <ElementDivision src={ThirdDivisor} />

        <Section className="especificacoes-page">
          <Especificacoes
            acessDb={Db.Especification}
            titlePage={Db.TituloEspecification}
          />
        </Section>

        <EuQueroAgora
          onClick={() =>
            minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />

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

        <AvaliablesText acessDb={Db.Avaliables} />

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
          titlePage="DÚVIDAS FREQUENTES SOFÁ CAMA"
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

export default SofaCamaDobravel
