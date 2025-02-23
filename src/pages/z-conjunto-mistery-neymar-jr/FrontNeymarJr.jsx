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
import { FaqFooter } from "../../components/FaqFooter"
import { FrameDefault } from "./db"
import { useNavigate } from "react-router-dom"
import ObsDownButton from "../../components/ObsDownButton"

import { HeadLineImage } from '../../components/HeadLineImage/index'

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
  VideoContainer,
} from "./styles"
import { Titulo } from "../../components/Titulo"
import { Text } from "../../components/Text"
import { CardProductClean } from "../../components/CardProductClean"
import { Price02 } from "../../components/Price02"
import LinkModal from "../../components/LinkModal"
import ModalAddToCard from "../../components/ModalAddToCard"
import { ShowQuestions } from "../../components/ShowQuestions"
import { Logo } from "../../components/Logo"
import { DataBaseFooter } from "../../assets/database/Footer/Db"

function FrontNeymarJr() {
  const Db = FrameDefault
  const DbFooter = DataBaseFooter

  const [selectedColor, setSelectedColor] = useState("azul")
  const [selectedSize, setSelectedSize] = useState("68")
  const [price, setPrice] = useState(249.90)

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
      "azul-68": 249.90,
    }

    const newPrice = prices[`${color.toLowerCase()}-${size.toLowerCase()}`]
    setPrice(newPrice)
  }

  const navigate = useNavigate()

  const handleButtonClick = () => {
    window.location.href =
      "https://opera-godfather.mycartpanda.com/checkout/169779386:1"

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


  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

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
          <Logo logo={Db.LogoMarca.link} AltLogo={Db.LogoMarca.alt} />
          {/* <LogoComBanner logo={Db.LogoMarca.link} AltLogo={Db.LogoMarca.alt} /> */}

          <Row>
            <CarrosselMain acessDb={Db.CarouselPrincipal} />

            <PriceCtn id="sectionRef" ref={minhaSecaoRef}>
              <Price
                title={Db.Price.tituloProduto}
                parcelas={Db.Price.parcelas}
                cutPrice={showCortPrice.toFixed(2)}
                parcelaPrice={(price * 0.24998).toFixed(2)}
                valorTotal={price.toFixed(2)}
                valorPix={showPricePix.toFixed(2)}
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
              valor4x={(price * 0.24998).toFixed(2)}
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
              valorTotal4x={(price * 0.24998 * 4).toFixed(2)}
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
            <HeadLineImage
              bannerImage="https://cdn.shopify.com/s/files/1/0679/9946/5650/files/CLIQUE_PARA_ASSISTIR.png?v=1740236170"
              videoId="https://cdn.shopify.com/videos/c/o/v/b60c2361f5e543849bdd3bc415a33b11.mp4"
            />

            <Titulo tituloText='VOCÊ TERÁ A GARANTIA DE UM ESTILO FORA DA CURVA, CRAQUES NÃO SEGUEM TENDÊNCIAS. ELES CRIAM. AGORA, VOCÊ ESTÁ NO JOGO.' />

            <Text inlineStyle={{ margin: '10px 0' }} textItem='Do relógio que define lendas ao óculos mais ousado, passando pela gargantilha que impõe respeito – um conjunto de atitude e presença. E agora, pode ser seu.' />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem='O mistério pertence a quem domina o jogo e deixa sua marca. Três peças, uma experiência única. Você está à altura?' />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq1} />

          <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} tituloText='O RELÓGIO QUE DOMINA O TEMPO, ONDE CADA GIRO É UMA APOSTA NO DESTINO' />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem='No universo dos relógios icônicos, poucos capturam a emoção do jogo como este. Um giro na roleta, um instante no tempo – uma peça que representa ousadia, precisão e a mentalidade dos que apostam alto na vida' />
          </div>

        </Section>

        <VideoContainer>
          <video
            title="vimeo-player"
            src="https://cdn.shopify.com/videos/c/o/v/622cf1efc4994ac58af3cd9467b4eff0.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </VideoContainer>
        <Section className="description-page">


          <div className="text_space">
            <Titulo inlineStyle={{ fontSize: '24px', margin: '15px 0 10px', color: 'rgb(189 175 150)', fontStyle: 'italic', textAlign: 'start', fontWeight: '600' }} 
            tituloText='O Menino de Ouro' />

            <Text inlineStyle={{ marginBottom: '10px', textAlign: 'start', paddingRight: '5px' }} 
            textItem='Cada vez que Neymar Jr olha para suas conquistas, é como se o tempo parasse para reconhecer sua grandeza.' />
            
            <Text inlineStyle={{ marginBottom: '10px', textAlign: 'start', paddingRight: '5px' }} 
            textItem='Cada troféu erguido é a prova de sua genialidade, uma lembrança constante de que ele sempre esteve entre os melhores. Da Champions League à Libertadores, do ouro olímpico aos títulos nacionais, sua trajetória não é apenas sobre vitórias, mas sobre marcar época.' />
            
            <Text inlineStyle={{ marginBottom: '10px', textAlign: 'start', paddingRight: '5px' }} 
            textItem='Seu legado não se mede apenas em gols, mas no impacto que deixa a cada jogo, a cada drible, a cada momento decisivo' />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq02} />

          <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} 
            tituloText='UM COLAR QUE DEFINE SEU ESTILO' />

            <Text inlineStyle={{ marginBottom: '10px' }} 
            textItem='Entre os acessórios que elevam qualquer visual, a gargantilha de cruz cravejada de Neymar Jr é a peça que faltava no seu repertório.' />
            
            <Text inlineStyle={{ marginBottom: '10px' }} 
            textItem='Luxuosa, imponente e versátil, ela combina com qualquer ocasião, adicionando um toque de exclusividade a quem a usa. Seja com um look casual ou sofisticado, esse colar garante presença e atitude. Se estilo é poder, essa peça é indispensável' />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq3} />

          <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} 
            tituloText="COM ATITUDE E OUSADIA, VEJA O MUNDO COMO UM VERDADEIRO CRAQUE" />

            <Text inlineStyle={{ marginBottom: '10px' }} 
            textItem='No jogo do estilo, há um acessório que separa os comuns dos lendários. A Juliet Oakley Thump não é apenas um óculos – é a assinatura de quem impõe respeito e se destaca sem esforço.' />
            
            <Text inlineStyle={{ marginBottom: '10px' }} 
            textItem='Com um design ousado e presença marcante, ela completa o Conjunto Mistery, elevando sua identidade para outro nível. Porque enxergar além não é uma opção, é um privilégio de quem nasceu para ser diferente.' />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq4} />

          

          <div className="text_space">
            <Titulo inlineStyle={{ margin: '15px 0 10px' }} tituloText={Db.Descricao.nonoTitulo} />

            <Text inlineStyle={{ marginBottom: '10px' }} textItem={Db.Descricao.descricao10} />
          </div>
        </Section>

        <VideoContainer>
          <video
            title="vimeo-player"
            src="https://cdn.shopify.com/videos/c/o/v/cf3617c4e9df4c7cbfa4952305c88c85.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </VideoContainer>

        {/* <ElementDivision src={ThirdDivisor} /> */}

        <Especificacoes
          onclickBtnTop={() =>
            minhaSecaoRef.current.scrollIntoView({ behavior: "smooth" })
          }
          acessDb={Db.Especification}
          titlePage={Db.TituloEspecification}
        >

        </Especificacoes>
        

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

        <FaqFooter
          acessDb={DbFooter.Faq}
          titlePage="DÚVIDAS FREQUENTES"
        />
      </Container>
    </>
  )
}

export default FrontNeymarJr
