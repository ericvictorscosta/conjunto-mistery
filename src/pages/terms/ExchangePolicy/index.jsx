import React, { useEffect } from "react"
import * as S from "./styles";
import { GlobalStyle } from "../../../styles/global";
import { HeaderPromotion } from "../../../components/HeaderPromotion";
import { Logo } from "../../../components/Logo";
import { FaqFooter } from "../../../components/FaqFooter";

import { FrameDefault } from '../db';
import { DataBaseFooter } from "../../../assets/database/Footer/Db"

const ExchangePolicy = () => {
  
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
      
      <S.Title>Política de Trocas e Devoluções</S.Title>

      <div className="orgTexts">

        <S.Bloco>
          <S.SubTitle>1. Acerca da Introdução</S.SubTitle>
          <S.Descricao><span>1.1</span>A OMG Replics preza pela satisfação de seus clientes e segue rigorosamente o Código de Defesa do Consumidor. Confira nossa política para trocas e devoluções abaixo.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>2. Condições Gerais</S.SubTitle>
          <S.Descricao><span>2.1</span>O cliente pode solicitar a troca ou devolução de um produto em até 7 (sete) dias corridos após o recebimento, conforme o direito de arrependimento previsto na legislação.</S.Descricao>
          <S.Descricao><span>2.2</span>O produto deve estar sem sinais de uso, com todos os acessórios e na embalagem original.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>3. Passo a Passo para Trocas e Devoluções</S.SubTitle>
          <S.Descricao><span>3.1</span>Envie um e-mail para contato@omgreplics.com ou entre em contato pelo WhatsApp 47 99715-2385 informando:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Nome completo;</li>
              <li>Número do pedido;</li>
              <li>Motivo da troca ou devolução.</li>
            </ul>
          </S.Descricao>
          <S.Descricao><span>3.2</span>Aguarde as instruções de nossa equipe.</S.Descricao>
          <S.Descricao><span>3.3</span>Após a aprovação, o produto deverá ser enviado ao endereço indicado.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>4. Custos de Envio</S.SubTitle>
          <S.Descricao><span>4.1</span>Os custos de envio variam conforme o motivo da troca ou devolução:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Para produtos com defeito ou enviados incorretamente, o custo do envio será arcado pela OMG Replics.</li>
              <li>Para trocas por outros motivos, os custos de envio são de responsabilidade do cliente.</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>5. Acerca de Prazos</S.SubTitle>
          <S.Descricao><span>5.1</span>Os prazos para análise e resolução são os seguintes:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Análise do produto em até 5 dias úteis após o recebimento.</li>
              <li>Troca realizada ou reembolso processado em até 10 dias úteis após a aprovação.</li>
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

export { ExchangePolicy };