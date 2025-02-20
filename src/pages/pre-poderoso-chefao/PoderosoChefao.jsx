import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../components/Button";
import { HeaderPromotion } from "../../components/HeaderPromotion";
import { LogoComBanner } from "../../components/LogoComBanner";
import { GlobalStyle } from "../../styles/global";
import CarrosselMain from "../../components/CarrosselMain";
import { Price } from "../../components/Price";
import { Estoque } from "../../components/Estoque";
import { Cronometro } from "../../components/Cronometro";
import { EuQueroAgora } from "../../components/ButtonQueroAgora";
import { ImageLp } from "../../components/ImageLp";
import { Especificacoes } from "../../components/Especificacoes";
import { Garantia } from "../../components/Garantia";
import { AvaliablesText } from "../../components/AvaliablesText";
import { Faq } from "../../components/Faq";
import { Footer } from "../../components/Footer";
import { FrameDefault } from "./db";
import { useNavigate } from "react-router-dom";
import ObsDownButton from "../../components/ObsDownButton";

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
} from "./styles";
import { Titulo } from "../../components/Titulo";
import { Text } from "../../components/Text";
import { CardProductClean } from "../../components/CardProductClean";
import { Price02 } from "../../components/Price02";
import LinkModal from "../../components/LinkModal";
import { CarouselFooter } from "../../components/CarrosselFooter";
import ModalAddToCard from "../../components/ModalAddToCard";
import { ShowQuestions } from "../../components/ShowQuestions";
import { ButtonCard, ButtonCardPreSell } from "../../components/CardProductClean/styles";
import CarrosselNoThumb from "../../components/Pre-CarrosselMain-No-Thumb";
import axios from "axios";

function PoderosoChefao() {
  const sendToDiscord = async (ip, utms) => {
    const webhookUrl =
      "https://discord.com/api/webhooks/1329453314659713105/545fEYewu65NarYnMMcnFl2CG2DDtAgLJrx_OQEjiJh95pbKx2YYQBMELL5DOcAsITOh";
    const message = {
      content: `Cliente Foi Para A PV\nIP: ${ip}\nUTM Source: ${utms.utm_source}\nUTM Medium: ${utms.utm_medium}\nUTM Campaign: ${utms.utm_campaign}`,
    };

    try {
      await axios.post(webhookUrl, message);
      console.log("Notificação enviada ao Discord");
    } catch (error) {
      console.error("Erro ao enviar notificação ao Discord:", error);
    }
  };

  const getClientIP = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      return response.data.ip;
    } catch (error) {
      console.error("Erro ao capturar o IP:", error);
      return "Desconhecido";
    }
  };

  const getUTMs = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || "N/A",
      utm_medium: params.get("utm_medium") || "N/A",
      utm_campaign: params.get("utm_campaign") || "N/A",
    };
  };

  const handleButtonClick = async () => {
    const ip = await getClientIP();
    const utms = getUTMs();
    sendToDiscord(ip, utms);
    navigate("/poderoso-chefao-3-em-1");
  };

  const Db = FrameDefault;
  const [selectedColor, setSelectedColor] = useState("azul");
  const [selectedSize, setSelectedSize] = useState("68");
  const [price, setPrice] = useState(187.09);

  const campoRef = useRef(null);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    updatePrice(event.target.value, selectedSize);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    updatePrice(selectedColor, event.target.value);
  };

  const updatePrice = (color, size) => {
    const prices = {
      "azul-68": 187.09,
    };

    const newPrice = prices[`${color.toLowerCase()}-${size.toLowerCase()}`];
    setPrice(newPrice);
  };

  const navigate = useNavigate();

  const DbTimer = {
    horas: "01",
    minutos: "15",
    segundos: "35",
  };

  const showPricePix = price - price * 0.07;
  const showCortPrice = price * 2;
  const minhaSecaoRef = useRef(null);

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
          } else {
            setHoras((horasAtual - 1).toString().padStart(2, "0"));
            setMinutos("59");
            setSegundos("59");
          }
        } else {
          setMinutos((minutosAtual - 1).toString().padStart(2, "0"));
          setSegundos("59");
        }
      } else {
        setSegundos((segundosAtual - 1).toString().padStart(2, "0"));
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

          <Row>
            <CarrosselNoThumb acessDb={Db.CarouselPrincipal} />
          </Row>

          <ButtonCtn>
            <ButtonCardPreSell onClick={handleButtonClick}>CONTINUAR</ButtonCardPreSell>
          </ButtonCtn>
        </section>

         {/* <Section className="description-page">
          <div className="text_space">
            <Titulo tituloText={Db.Descricao.primeiroTitulo} />
            <Text inlineStyle={{ margin: "10px 0" }} textItem={Db.Descricao.descricao1} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq1} />

          <ButtonCtn>
            <ButtonCardPreSell onClick={handleButtonClick}>CONTINUAR</ButtonCardPreSell>
          </ButtonCtn>

           <div className="text_space">
            <Titulo
              inlineStyle={{
                fontSize: "24px",
                margin: "15px 0 10px",
                color: "#8c0505",
                fontStyle: "italic",
                textAlign: "start",
                fontWeight: "600",
              }}
              tituloText={Db.Descricao.segundoTitulo}
            />

            <Text inlineStyle={{ marginBottom: "10px" }} textItem={Db.Descricao.descricao3} />
          </div>

          <ImageLp image={Db.Descricao.ImageLpSeq2} />

          <ButtonCtn>
            <ButtonCardPreSell onClick={handleButtonClick}>CONTINUAR</ButtonCardPreSell>
          </ButtonCtn>
         <div className="text_space">
            <Titulo
              inlineStyle={{
                fontSize: "24px",
                margin: "15px 0 10px",
                color: "#8c0505",
                fontStyle: "italic",
                textAlign: "start",
                fontWeight: "600",
              }}
              tituloText={Db.Descricao.terceiroTitulo}
            />

            <Text
              inlineStyle={{ marginBottom: "10px", textAlign: "start", paddingRight: "5px" }}
              textItem={Db.Descricao.descricao4}
            />
          </div> 
        </Section>*/}

        {/* <Footer
          paginaInicial="https://operagodfather.shop/"
          prazoEntrega="7 e 21 dias úteis"
        /> */}
      </Container>
    </>
  );
}

export default PoderosoChefao;
