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
import DivisorSectionFourth from "../../assets/fourth-divisor.svg"
import { ImageLp } from "../../components/ImageLp"
import { Especificacoes } from "../../components/Especificacoes"
import { Garantia } from "../../components/Garantia"
import { Avaliables } from "../../components/Avaliables"
import { CardProduct } from "../../components/CardProduct"
import { Faq } from "../../components/Faq"
import { CarrosselSecundary } from "../../components/CarrosselSecundary"
import { Footer } from "../../components/Footer"
import { FrameDefault } from "./db"
import ObsDownButton from "../../components/ObsDownButton"
import { useNavigate } from "react-router-dom"
import { ImageComponent } from "../../components/ImagesComponent"

import {
  Container,
  Row,
  PriceCtn,
  ButtonCtn,
  ElementDivisionTwo,
  Section,
  ContainerSelect,
  Observacao,
} from "./styles"

function ColchaoDobravel() {
  const Db = FrameDefault

  const [selectedColor, setSelectedColor] = useState("azul")
  const [selectedSize, setSelectedSize] = useState("99")
  const [price, setPrice] = useState(99.9)

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
      "azul-99": 99.9,
      "azul-107": 107.9,
      "azul-117": 117.4,
      "azul-124": 124.4,
      "azul-130": 130.0,
    }

    const newPrice = prices[`${color.toLowerCase()}-${size.toLowerCase()}`]
    setPrice(newPrice)
  }

  const navigate = useNavigate()

  const handleButtonClick = () => {
    if (selectedColor === "azul" && selectedSize === "99") {
      navigate(`/checkout/16`)
    } else if (selectedColor === "azul" && selectedSize === "107") {
      navigate(`/checkout/17`)
    } else if (selectedColor === "azul" && selectedSize === "117") {
      navigate(`/checkout/18`)
    } else if (selectedColor === "azul" && selectedSize === "124") {
      navigate(`/checkout/19`)
    } else if (selectedColor === "azul" && selectedSize === "130") {
      navigate(`/checkout/20`)
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
                discountPix={12.02}
              />
              <ButtonCtn>
                <ContainerSelect>
                  <label style={{ display: "none" }} htmlFor="colors">
                    Cor:
                  </label>
                  <select
                    style={{ display: "none" }}
                    id="colors"
                    value={selectedColor}
                    onChange={handleColorChange}
                  >
                    <option value="azul">Azul</option>
                    {/* <option value="azul">Cinza</option>
                    <option value="azul">Bege</option>
                    <option value="azul">Castanho</option> */}
                  </select>

                  <label htmlFor="sizes">Tamanho:</label>
                  <select
                    style={{ marginTop: "5px" }}
                    id="sizes"
                    value={selectedSize}
                    onChange={handleSizeChange}
                  >
                    <option value="99">Berço</option>
                    <option value="107">Solteiro</option>
                    <option value="117">Casal</option>
                    <option value="124">Queen</option>
                    <option value="130">Superqueen</option>
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
              <Estoque quantidade={14} />
              <Cronometro time={1400000} />
            </PriceCtn>
          </Row>
        </section>

        <Section style={{ padding: "0 15px" }} className="description-page">
          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "7px",
              fontWeight: "500",
            }}
          >
            {Db.span01}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "3px",
              fontWeight: "500",
            }}
          >
            {Db.span02}
          </span>
          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span0201}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "3px",
              fontWeight: "500",
            }}
          >
            {Db.span03}
          </span>
          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span0301}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "3px",
              fontWeight: "500",
            }}
          >
            {Db.span04}
          </span>
          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span0401}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "3px",
              fontWeight: "500",
            }}
          >
            {Db.span05}
          </span>
          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span0501}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "3px",
              fontWeight: "500",
            }}
          >
            {Db.span06}
          </span>
          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span0601}
          </span>

          <span
            className="span_Initial"
            style={{
              textAlign: "center",
              marginBottom: "9px",
              fontWeight: "500",
            }}
          >
            {Db.span07}
          </span>

          <ImageLp image={Db.ImageLpSeq1} />

          <span
            style={{
              padding: "10px 0",
              marginTop: "-50px",
              marginBottom: "15px",
            }}
            className="hgKElc"
          >
            As características naturais do látex<span>&nbsp;</span>
            <b>
              impedem o crescimento de bactérias porque resiste aos efeitos do
              calor e da humidade.
            </b>
            <span>&nbsp;</span>
            <b>
              O látex também repele os ácaros e o pó que podem causar problemas
              respiratórios, como a asma e muito outros
            </b>
            .
          </span>

          <ImageLp
            receptStyled={{ padding: "15px 0" }}
            image={Db.ImageLpSeq2}
          />

          <span
            style={{ padding: "10px 0", fontSize: "20px", fontWeight: "600" }}
            className="hgKElc"
          >
            Durma com companhia sem stress!
          </span>

          <h3
            style={{ fontWeight: "400", lineHeight: "1.2", padding: "15px 0" }}
          >
            O Latex viscoelástico garante o bloqueio de movimento, para que você
            durma tranquilamente
            <strong>
              &nbsp;sem sentir a movimentação do seu parceiro durante a noite.
            </strong>
          </h3>

          <ImageLp
            receptStyled={{ padding: "15px 0" }}
            image={Db.ImageLpSeq3}
          />

          <p>
            <strong>
              Látex elástico macio antibacteriano antiácaros antipoeira sono
              profundo
            </strong>
          </p>

          <ImageLp
            receptStyled={{ padding: "15px 0" }}
            image={Db.ImageLpSeq4}
          />

          <p style={{ margin: "5px 0" }}>
            <strong>
              Você também tem os seguintes problemas e como resolvê-los?
            </strong>
          </p>

          <ImageLp
            receptStyled={{ padding: "15px 0", paddingTop: "0px" }}
            image={Db.ImageLpSeq5}
          />

          <ul
            style={{ margin: "0 0 17.5px 20px", padding: "15px 0" }}
            id="mylist"
          >
            <li style={{ marginTop: "0", textAlign: "start" }}>
              <strong>
                Promover o sono, para alguns pacientes com espondilose cervical
              </strong>
            </li>
            <li style={{ marginTop: "7px", textAlign: "start" }}>
              <strong>
                Também pode atingir o objetivo de prevenção e tratamento, às
                vezes para a hipertensão arterial
              </strong>
            </li>
            <li style={{ marginTop: "7px", textAlign: "start" }}>
              <strong>
                O ronco também é útil para alguns pacientes com condições como a
                asma.
              </strong>
            </li>
          </ul>

          <ImageLp
            receptStyled={{ padding: "15px 0", paddingTop: "0px" }}
            image={Db.ImageLpSeq6}
          />

          <ul
            style={{ margin: "0 0 17.5px 20px", padding: "15px 0" }}
            id="mylist"
          >
            <li style={{ marginTop: "0", textAlign: "start" }}>
              <strong>
                Ajuste perfeito e suporte eficaz para um sono saudável.
              </strong>
            </li>
            <li style={{ marginTop: "7px", textAlign: "start" }}>
              <strong>
                Manter a curvatura fisiológica natural da coluna vertebral,
              </strong>
            </li>
            <li style={{ marginTop: "7px", textAlign: "start" }}>
              <strong>
                Aumentar a área de força e dispersar completamente a pressão
                para alcançar o efeito de relaxamento.
              </strong>
            </li>
          </ul>

          <ImageLp
            receptStyled={{ padding: "15px 0", paddingTop: "0px" }}
            image={Db.ImageLpSeq7}
          />

          <p style={{ margin: "5px 0", padding: "0 10px 15px" }}>
            <strong>
              Jaqueta interna de proteção dupla com zip de duas vias para fácil
              remoção e lavagem Quatro cantos com cintas elásticas para fixar a
              posição
            </strong>
          </p>

          <ImageLp
            receptStyled={{ padding: "15px 0", paddingTop: "0px" }}
            image={Db.ImageLpSeq8}
          />

          <p style={{ margin: "5px 0", padding: "0 10px 15px" }}>
            <strong>
              Casaco amigo da pele Macio, delicado e elástico Refrescante e
              respirável Antibacteriano e anti-ácaros, boa elasticidade,
              adequado para pessoas de diferentes idades
            </strong>
          </p>

          <ImageLp
            receptStyled={{ padding: "15px 0", paddingTop: "0px" }}
            image={Db.ImageLpSeq9}
          />

          <p style={{ margin: "5px 0", padding: "0 10px 15px" }}>
            <strong>Especificação / Tamanho do colchão</strong>
          </p>

          <ImageLp
            receptStyled={{ padding: "15px 0", paddingTop: "0px" }}
            image={Db.ImageLpSeq10}
          />

          <ul
            style={{ margin: "0 0 17.5px 20px", padding: "15px 0" }}
            id="mylist"
          >
            <span style={{ textAlign: "center" }}>Altrua do Colchão:</span>
            <li style={{ marginTop: "5px", textAlign: "start" }}>15 cm</li>
            <li style={{ marginTop: "7px", textAlign: "start" }}>
              Material do colchão
            </li>
            <li style={{ marginTop: "7px", textAlign: "start" }}>
              Látex natural puro importado da Tailândia
            </li>
          </ul>

          <ImageLp
            receptStyled={{ padding: "0 0 10px 0", paddingTop: "0px" }}
            image={Db.ImageLpSeq11}
          />

          <Observacao>
            <strong>Obs: </strong>
            {Db.Observacao}
          </Observacao>

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
          titlePage="DÚVIDAS FREQUENTES COLCHÃO LÁTEX ORTOÉDICO?"
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

export default ColchaoDobravel
