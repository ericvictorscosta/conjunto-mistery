import React, { useEffect } from "react"
import * as S from "./styles";
import { GlobalStyle } from "../../../styles/global";
import { HeaderPromotion } from "../../../components/HeaderPromotion";
import { Logo } from "../../../components/Logo";
import { FaqFooter } from "../../../components/FaqFooter";

import { FrameDefault } from '../db';
import { DataBaseFooter } from "../../../assets/database/Footer/Db"

const AboutUs = () => {
  
  const Db = FrameDefault
  const DbFooter = DataBaseFooter

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Container>
      <GlobalStyle />

      <HeaderPromotion
        descricaoPromocao={Db.BannerSup.descricaoPromocao}
        desconto={Db.BannerSup.desconto}
        validoSomente={Db.BannerSup.validoSomente}
        prazoValidade={Db.BannerSup.prazoValidade}
      />
      <Logo AltLogo={Db.LogoMarca.alt} />
      
      <S.Title>Sobre Nós</S.Title>

      <div className="orgTexts">

        <S.Bloco>
          <S.SubTitle>1. Nossa História</S.SubTitle>
          <S.Descricao><span>1.1</span>A OMG Replics nasceu da paixão por relógios e do desejo de oferecer produtos de alta qualidade para pessoas que valorizam elegância e funcionalidade.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>2. Nossa Missão</S.SubTitle>
          <S.Descricao><span>2.1</span>Entregar relógios sofisticados e duráveis, que complementam seu estilo e acompanham você em todos os momentos.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>3. Nossos Valores</S.SubTitle>
          <S.Descricao><span>3.1</span>Nossos valores fundamentais incluem:</S.Descricao>
          <S.Descricao>
            <ul>
              <li><strong>Qualidade:</strong> Produtos cuidadosamente selecionados.</li>
              <li><strong>Confiança:</strong> Atendimento transparente e comprometido.</li>
              <li><strong>Inovação:</strong> Sempre em busca das últimas tendências.</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>4. Por que escolher a OMG Replics?</S.SubTitle>
          <S.Descricao><span>4.1</span>Porque acreditamos que um relógio é mais do que um acessório – é uma expressão de quem você é.</S.Descricao>
        </S.Bloco>

      </div>

      <FaqFooter
        acessDb={DbFooter.Faq}
        titlePage="DÚVIDAS FREQUENTES"
      />

    </S.Container>
  );
};

export { AboutUs };
