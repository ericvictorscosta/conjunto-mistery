import React, { useEffect } from "react"
import * as S from "./styles";
import { GlobalStyle } from "../../../styles/global";
import { HeaderPromotion } from "../../../components/HeaderPromotion";
import { Logo } from "../../../components/Logo";
import { FaqFooter } from "../../../components/FaqFooter";

import { FrameDefault } from '../db';
import { DataBaseFooter } from "../../../assets/database/Footer/Db"

const PaymentPolicy = () => {
  
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
      
      <S.Title>Política de Pagamentos e Reembolsos</S.Title>

      <div className="orgTexts">

        <S.Bloco>
          <S.SubTitle>1. Métodos de Pagamento</S.SubTitle>
          <S.Descricao><span>1.1</span>Aceitamos os seguintes métodos de pagamento:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Cartão de crédito (parcelamento disponível).</li>
              <li>PIX.</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>2. Segurança nas Transações</S.SubTitle>
          <S.Descricao><span>2.1</span>Todas as transações são protegidas por tecnologia de criptografia, garantindo a segurança dos seus dados financeiros.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>3. Reembolsos</S.SubTitle>
          <S.Descricao><span>3.1</span>Os reembolsos são realizados na mesma forma de pagamento utilizada:</S.Descricao>
          <S.Descricao><span>3.2</span>Prazo:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>PIX: até 3 dias úteis.</li>
              <li>Cartão de crédito: até 10 dias úteis, conforme regras da operadora do cartão.</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>4. Pagamentos Recusados</S.SubTitle>
          <S.Descricao><span>4.1</span>Caso o pagamento seja recusado, entre em contato com a operadora do cartão ou utilize outro método de pagamento.</S.Descricao>
        </S.Bloco>

      </div>

      <FaqFooter
        acessDb={DbFooter.Faq}
        titlePage="DÚVIDAS FREQUENTES"
      />

    </S.Container>
  );
};

export { PaymentPolicy };
