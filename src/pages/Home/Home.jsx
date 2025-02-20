import React from "react"
import { GlobalStyle } from "../../styles/global"
import { Logo } from "../../components/Logo"
import ArrowDownImg from "../../assets/arrow-down-icon.svg"
import { FrameDefault } from "./Db"

import {
  ArrowCnt,
  ArrowDown,
  ButtonCnt,
  ButtonOne,
  Container,
  Header,
  ImageBackground,
  Section,
  SubtitlePresentation,
  TitlePresentation,
} from "./styles"
import { Footer } from "../../components/Footer"
import { LogoComBanner } from "../../components/LogoComBanner"
import { Link } from "react-router-dom"


const Home = ({
  linkLogo = "https://cdn.shopify.com/s/files/1/0648/5904/6103/files/asuidskaudasiudw.png?v=1686575009",
  imageBackground = "https://cdn.shopify.com/s/files/1/0648/5904/6103/files/arte-2-alif-psd.jpg?v=1686282166",
  titlePresentation = "CADA PEÇA DE NOSSA COLEÇÃO MISTERY GODFATHER É CUIDADOSAMENTE CRIADA, CELEBRANDO O ELEGANTE LEGADO DO PODEROSO CHEFÃO.",
  subtitlePresentation = "Nós acreditamos na força nostálgica e intemporal do Poderoso Chefão, refletindo isso em cada detalhe cuidadosamente selecionado em nossa coleção. Oferecemos uma ampla gama de peças inspiradas, do clássico ao contemporâneo, que se adaptam a qualquer estilo e ocasião.",
  subtitlePresentation2 = "Descubra as várias soluções da COLEÇÃO MISTERY GODFATHER que irão transformar o seu dia-a-dia, levando o poder e a ascensão do chefão onde quer que você vá.",
  titleBtn = "Descubra mais detalhes",
}) => {

  const Db = FrameDefault

  return (
    <>
      <GlobalStyle />
      <LogoComBanner logo={Db.LogoMarca.link} AltLogo={Db.LogoMarca.alt} />

      <Section className="presentation">
        <TitlePresentation>{titlePresentation}</TitlePresentation>
        <SubtitlePresentation>{subtitlePresentation}</SubtitlePresentation>
        <SubtitlePresentation style={{ paddingTop: '0' }}>{subtitlePresentation2}</SubtitlePresentation>

        <ButtonCnt>
          <Link to={'/conjutno-mistery-nj'}>
            <ButtonOne >{titleBtn}</ButtonOne>
          </Link>
        </ButtonCnt>
      </Section>

      <Header>
        <ImageBackground src={imageBackground} />
        <Container>
          <ArrowCnt>
            <ArrowDown src={ArrowDownImg} />
          </ArrowCnt>
        </Container>

      </Header>

      {/* <CarrosselSecundary
        acessDb={Db.CarouselSecundario}
        titleCarrossel={Db.CarouselSecundarioTitle}
      /> */}

      <Footer
        paginaInicial="https://operagodfather.shop/"
        prazoEntrega="7 e 21 dias úteis" />
    </>
  )
}

export default Home
