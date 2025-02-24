import React, { useEffect } from "react"
import * as S from "./styles";
import { GlobalStyle } from "../../../styles/global";
import { HeaderPromotion } from "../../../components/HeaderPromotion";
import { Logo } from "../../../components/Logo";
import { FaqFooter } from "../../../components/FaqFooter";

import { FrameDefault } from '../db';
import { DataBaseFooter } from "../../../assets/database/Footer/Db"

const ContactSupport = () => {
  
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
      
      <S.Title>Contato e Suporte</S.Title>

      <div className="orgTexts">

        <S.Bloco>
          <S.SubTitle>1. Fale Conosco</S.SubTitle>
          <S.Descricao><span>1.1</span>Estamos aqui para ajudar! Entre em contato por um dos canais abaixo:</S.Descricao>
          <S.Descricao>
            <ul>
              <li><strong>E-mail:</strong> contato@conjuntomistery.com</li>
              <li><strong>WhatsApp:</strong> (98) 98108-7743</li>
              <li><strong>Horário de Atendimento:</strong> Segunda a sexta, das 9h às 18h (exceto feriados).</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>2. Formulário de Contato</S.SubTitle>
          <S.Descricao><span>2.1</span>Preencha o formulário abaixo e nossa equipe retornará em até 1 dia útil:</S.Descricao>
          <S.Descricao>
            <ul>
              <li><strong>Nome:</strong></li>
              <li><strong>E-mail:</strong></li>
              <li><strong>Assunto:</strong></li>
              <li><strong>Mensagem:</strong></li>
            </ul>
          </S.Descricao>
        </S.Bloco>

      </div>

      <FaqFooter
        acessDb={DbFooter.Faq}
        titlePage="DÚVIDAS FREQUENTES"
      />

    </S.Container>
  );
};

export { ContactSupport };
