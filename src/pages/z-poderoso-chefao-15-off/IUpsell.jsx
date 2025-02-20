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
import { Especificacoes } from "../../components/Especificacoes"
import { Garantia } from "../../components/Garantia"
import { AvaliablesText } from "../../components/AvaliablesText"
import { Faq } from "../../components/Faq"
import { Footer } from "../../components/Footer"
import { FrameDefault } from "./db"
import { useNavigate } from "react-router-dom"
import ObsDownButton from "../../components/ObsDownButton"

import {
  Container,
  Row,
  PriceCtn,
  ButtonCtn,
  Section,
  OfertaRelampago,
  DivLeftContent,
  BannerImage,
  DivRightContent,
} from "./styles"
import { Titulo } from "../../components/Titulo"
import { Text } from "../../components/Text"
import { CardProductClean } from "../../components/CardProductClean"
import { Price02 } from "../../components/Price02"
import LinkModal from "../../components/LinkModal"
import { CarouselFooter } from "../../components/CarrosselFooter"
import ModalAddToCard from "../../components/ModalAddToCard"
import { ShowQuestions } from "../../components/ShowQuestions"

function IUpsell() {
  const Db = FrameDefault

  const [selectedColor, setSelectedColor] = useState("azul")
  const [selectedSize, setSelectedSize] = useState("68")
  const [price, setPrice] = useState(187.09)

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
      "azul-68": 187.09,
    }

    const newPrice = prices[`${color.toLowerCase()}-${size.toLowerCase()}`]
    setPrice(newPrice)
  }

  const navigate = useNavigate()

  const handleButtonClick = () => {
    window.location.href =
      "https://go.perfectpay.com.br/PPU38CO1744"

    // fbq("track", "InitiateCheckout", {
    //   value: price,
    //   currency: "BRL",
    // })
  }

  const DbTimer = {
    horas: '01',
    minutos: '15',
    segundos: '35'
  }

  const showPricePix = price - price * 0.07
  const showCortPrice = price * 2
  const minhaSecaoRef = useRef(null)

  const [horas, setHoras] = useState(DbTimer.horas);
  const [minutos, setMinutos] = useState(DbTimer.minutos);
  const [segundos, setSegundos] = useState(DbTimer.segundos);

  useEffect(() => {
    const interval = setInterval(() => {
      const segundosAtual = parseInt(segundos);
      const minutosAtual = parseInt(minutos);
      const horasAtual = parseInt(horas);

      if (segundosAtual === 0) {
        if (minutosAtual === 0) {
          if (horasAtual === 0) {
            clearInterval(interval);
            // O cronômetro chegou a zero, faça algo aqui
          } else {
            setHoras((horasAtual - 1).toString().padStart(2, '0'));
            setMinutos('59');
            setSegundos('59');
          }
        } else {
          setMinutos((minutosAtual - 1).toString().padStart(2, '0'));
          setSegundos('59');
        }
      } else {
        setSegundos((segundosAtual - 1).toString().padStart(2, '0'));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [horas, minutos, segundos]);


  const [quantidade, setQuantidade] = useState(235);
  const [tempoAleatorio, setTempoAleatorio] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuantidade((prevQuantidade) => prevQuantidade + 1);
    }, tempoAleatorio * 1000);

    return () => clearInterval(timer);
  }, [tempoAleatorio]);

  useEffect(() => {
    const sequenciaTempos = [3, 7, 5];

    const timer = setInterval(() => {
      const proximoTempo = sequenciaTempos.shift();
      sequenciaTempos.push(proximoTempo);
      setTempoAleatorio(proximoTempo);
    }, 5000);

    return () => clearInterval(timer);
  }, []);


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
          {/* <Logo logo={Db.LogoMarca.link} AltLogo={Db.LogoMarca.alt} /> */}
          <LogoComBanner logo={Db.LogoMarca.link} AltLogo={Db.LogoMarca.alt} />

          <Row>
            <CarrosselMain acessDb={Db.CarouselPrincipal} />

            <PriceCtn id="sectionRef" ref={minhaSecaoRef}>
              <Price
                title={Db.Price.tituloProduto}
                parcelas={Db.Price.parcelas}
                cutPrice={showCortPrice.toFixed(2)}
                parcelaPrice={(price * 0.3333).toFixed(2)}
                valorTotal={price.toFixed(2)}
                valorPix={showPricePix.toFixed(2)}
                discountPix="7"
              />
            </PriceCtn>
          </Row>

          <OfertaRelampago>
            <DivLeftContent>
              <BannerImage>

              </BannerImage>

              <div className="price-show">
                <span className="price-before">R${showCortPrice.toFixed(2)}</span>
                <span className="price-now">R${price.toFixed(2)} <h6 className="a-vista">à Vista</h6></span>
              </div>
            </DivLeftContent>

            <DivRightContent>
              <span className="vendas">{quantidade} Vendidos</span>
              <div className="timer-counter">
                <span>TERMINA EM</span>

                <div className="ctn_ctn_timer">
                  <div className="hora">{horas}</div>
                  :
                  <div className="minuto">{minutos}</div>
                  :
                  <div className="segundo">{segundos}</div>
                </div>
              </div>
            </DivRightContent>
          </OfertaRelampago>

          <Row>
            <Price02
              valorTotal={price.toFixed(2)}
              valorPix={showPricePix.toFixed(2)}
              valor2x={(price * 0.5).toFixed(2)}
              valor3x={(price * 0.3333).toFixed(2)}
              valor4x={(price * 0.26898).toFixed(2)}
              valor5x={(price * 0.21832).toFixed(2)}
              valor6x={(price * 0.1845).toFixed(2)}
              valor7x={(price * 0.16045).toFixed(2)}
              valor8x={(price * 0.1424).toFixed(2)}
              valor9x={(price * 0.12837).toFixed(2)}
              valor10x={(price * 0.1172).toFixed(2)}
              valor11x={(price * 0.10798).toFixed(2)}
              valor12x={(price * 0.1004).toFixed(2)}
              valorTotal2x={(price * 0.5 * 2).toFixed(2)}
              valorTotal3x={(price * 0.33333 * 3).toFixed(2)}
              valorTotal4x={(price * 0.26898 * 4).toFixed(2)}
              valorTotal5x={(price * 0.21832 * 5).toFixed(2)}
              valorTotal6x={(price * 0.1845 * 6).toFixed(2)}
              valorTotal7x={(price * 0.16045 * 7).toFixed(2)}
              valorTotal8x={(price * 0.1424 * 8).toFixed(2)}
              valorTotal9x={(price * 0.12837 * 9).toFixed(2)}
              valorTotal10x={(price * 0.1172 * 10).toFixed(2)}
              valorTotal11x={(price * 0.10798 * 11).toFixed(2)}
              valorTotal12x={(price * 0.1004 * 12).toFixed(2)}
            />
          </Row>

          <ButtonCtn>
            <ModalAddToCard
              titleButton="APROVEITAR OFERTA"
              refClick={handleButtonClick}
            />

            <ObsDownButton
              infoCupom={Db.infoCupom.infoCupom}
              quantifyCupom={Db.infoCupom.quantifyCupom}
            />
          </ButtonCtn>

          <LinkModal

          />

        </section>

        <Section className="description-page">

          <div className="text_space">
            <iframe style={{ margin: '0 0 15px' }} title="vimeo-player" src="https://player.vimeo.com/video/762706298?h=401eaa33a8" width="100%" height="230px" frameborder="0" allowfullscreen=""></iframe>

            <Titulo tituloText={Db.Descricao.primeiroTitulo} />

            <Text inlineStyle={{ margin: '10px 0' }} textItem={Db.Descricao.descricao1} />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem={Db.Descricao.descricao2} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq1} />

          <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} tituloText={Db.Descricao.segundoTitulo} />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem={Db.Descricao.descricao3} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq11} />

          {/* <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} tituloText={Db.Descricao.decimoTitulo} />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem={Db.Descricao.descricao11} />
          </div>
            
          <Text inlineStyle={{ marginBottom: '10px' }} textItem={Db.Descricao.descricao11} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq9} /> */}

          <div className="text_space">
            <Titulo inlineStyle={{ fontSize: '24px', margin: '15px 0 10px', color: '#8c0505', fontStyle: 'italic', textAlign: 'start', fontWeight: '600' }} tituloText={Db.Descricao.terceiroTitulo} />

            <Text inlineStyle={{ marginBottom: '10px', textAlign: 'start', paddingRight: '5px' }} textItem={Db.Descricao.descricao4} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq02} />

          <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} tituloText={Db.Descricao.quartoTitulo} />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem={Db.Descricao.descricao5} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq3} />

          <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} tituloText={Db.Descricao.quintoTitulo} />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem={Db.Descricao.descricao6} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq4} />

          <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} tituloText={Db.Descricao.sextoTitulo} />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem={Db.Descricao.descricao7} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq5} />
          <ImageLp image={Db.Descricao.ImageLpSeq2} receptStyled={{ marginTop: '-5px' }} />

          <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} tituloText={Db.Descricao.setimoTitulo} />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem={Db.Descricao.descricao8} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq6} />

          <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} tituloText={Db.Descricao.nonoTitulo} />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem={Db.Descricao.descricao10} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq8} />

        </Section>

        {/* <ElementDivision src={ThirdDivisor} /> */}

        <Section className="especificacoes-page" style={{ padding: '0' }}>
          <Especificacoes
            onclickBtnTop={() =>
              minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
            }
            acessDb={Db.Especification}
            titlePage={Db.TituloEspecification}
          >

          </Especificacoes>
        </Section>

        <AvaliablesText acessDb={Db.Avaliables} />

        <CardProductClean
          onClick={() =>
            minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
          }
          nameOfProduct='CONJUNTO MISTERY GODFATHER'
          sinceXX='https://cdn.shopify.com/s/files/1/0648/5904/6103/files/313356563_3323876334534874_2630218426635507994_n_1_c1eadafc-2791-412e-8129-3a6182ec17ba.png?v=1686516754'
          linkButton={() =>
            minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
          }
          priceOfProduct={(price * 0.3333).toFixed(2)}
          cortPriceOfProduct={showCortPrice}
        />

        {/* <ShowQuestions /> */}

        <Footer
          paginaInicial="https://operagodfather.shop/"
          prazoEntrega="7 e 21 dias úteis"
        />
      </Container>
    </>
  )
}

export default IUpsell
