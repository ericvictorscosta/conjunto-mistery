import React, { useState, useEffect } from "react"
import { GlobalStyle } from "../../styles/global"
import { Footer } from "../../components/Footer"
import { Container, CtnDuvidas } from "./styles"

import { FrameDefault } from './db';
import { Title } from "../../components/Footer/styles";
import { LogoComBanner } from "../../components/LogoComBanner";
import { Link } from "react-router-dom";
import DropdownComponent from "../../components/DropDownDuvidas";
import { CarouselFooter } from "../../components/CarrosselFooter";

function DuvidaseRastreio() {
  const [trackingResult, setTrackingResult] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");

  const Db = FrameDefault

  const handleTrack = () => {
    if (trackingNumber === "") {
      alert("Por favor preencha o código de rastreio corretamente.");
      return;
    }

    YQV5.trackSingle({
      YQ_ContainerId: "YQContainer",
      YQ_Height: 560,
      YQ_Fc: "0",
      YQ_Lang: "pt",
      YQ_Num: trackingNumber,
      callback: function (result) {
        setTrackingResult(result);
      }
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <GlobalStyle />

        <LogoComBanner logo={Db.LogoMarca.link} AltLogo={Db.LogoMarca.alt} />

        <Title style={{ textAlign: 'center', margin: '25px', fontSize: '25px' }}>Dúvidas e Rastreio</Title>

        <CtnDuvidas>
          <div className="textRastreio">
            <h1>Rastreie Seu Pedido</h1>
            <span>Assim que o seu for enviado, nós enviaremos um e-mail com o seu código de rastreio. Caso ainda não tenha recebido seu ID de rastreamento entre e contato conosco <Link style={{ color: "rgb(18, 120, 74)" }}>aqui</Link>.</span>
          </div>
          <div className="inputRastreio">
            <span>Insira o ID de Rastreamento</span>
            <div className="alignInput">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />

              <button type="button" onClick={handleTrack} style={{ textAlign: 'center' }}>Rastrear</button>

              <img src="https://cdn.shopify.com/s/files/1/0648/5904/6103/files/c9471724c4d52d05cf781241e3c64ed2.png?v=1686358645" alt="Imagem Poderoso Chefão" />

            </div>
            <div style={{ marginTop: 10 }} id="YQContainer"></div>
          </div>

        </CtnDuvidas>

        {/* <DropdownComponent /> */}


        <Footer
          paginaInicial="https://operagodfather.shop/"
          prazoEntrega="7 e 21 dias úteis"
        />
      </Container>
    </>
  )
}

export default DuvidaseRastreio
