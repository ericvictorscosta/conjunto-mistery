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

function SapateiraMinimalista() {
  const Db = FrameDefault

  const [selectedColor, setSelectedColor] = useState("branco")
  const [selectedSize, setSelectedSize] = useState("60")
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
      "branco-60": 98.9,
      "branco-70": 108.9,
      "branco-80": 118.9,
      "branco-90": 128.9,
      "branco-100": 138.9,

      "cinza-60": 98.9,
      "cinza-70": 108.9,
      "cinza-80": 118.9,
      "cinza-90": 128.9,
      "cinza-100": 138.9,
    }

    const newPrice = prices[`${color.toLowerCase()}-${size.toLowerCase()}`]
    setPrice(newPrice)
  }

  const navigate = useNavigate()

  const handleButtonClick = () => {
    if (selectedColor === "branco" && selectedSize === "60") {
      navigate(`/checkout/30`)
    } else if (selectedColor === "branco" && selectedSize === "70") {
      navigate(`/checkout/31`)
    } else if (selectedColor === "branco" && selectedSize === "80") {
      navigate(`/checkout/32`)
    } else if (selectedColor === "branco" && selectedSize === "90") {
      navigate(`/checkout/33`)
    } else if (selectedColor === "branco" && selectedSize === "100") {
      navigate(`/checkout/34`)
    } else if (selectedColor === "cinza" && selectedSize === "60") {
      navigate(`/checkout/35`)
    } else if (selectedColor === "cinza" && selectedSize === "70") {
      navigate(`/checkout/36`)
    } else if (selectedColor === "cinza" && selectedSize === "80") {
      navigate(`/checkout/37`)
    } else if (selectedColor === "cinza" && selectedSize === "90") {
      navigate(`/checkout/38`)
    } else if (selectedColor === "cinza" && selectedSize === "100") {
      navigate(`/checkout/39`)
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
                    <option value="branco">Branco</option>
                    <option value="cinza">Cinza</option>
                  </select>

                  <label htmlFor="sizes">Tamanho:</label>
                  <select
                    id="sizes"
                    value={selectedSize}
                    onChange={handleSizeChange}
                  >
                    <option value="60">60cm X 120cm</option>
                    <option value="70">70cm X 120cm</option>
                    <option value="80">80cm X 120cm</option>
                    <option value="90">90cm X 120cm</option>
                    <option value="100">100cm X 120cm</option>
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

          <ImageLp image={Db.ImageLpSeq1} />

          <p style={{ margin: "10px 0", padding: "0 15px" }}>
            <strong>
              Você ficará surpreso ao ver que economiza muito espaço em casa.
            </strong>
          </p>

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq2}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq3}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq4}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq5}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq6}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq7}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq8}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq9}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq10}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq11}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq12}
          />

          <ImageLp
            receptStyled={{ marginBottom: "-5px" }}
            image={Db.ImageLpSeq13}
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
          titlePage="DÚVIDAS FREQUENTES SAPATEIRA MINIMALISTA"
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

export default SapateiraMinimalista
