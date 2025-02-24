import React, { useEffect } from "react"
import * as S from "./styles";
import { GlobalStyle } from "../../../styles/global";
import { HeaderPromotion } from "../../../components/HeaderPromotion";
import { Logo } from "../../../components/Logo";
import { FaqFooter } from "../../../components/FaqFooter";

import { FrameDefault } from '../db';
import { DataBaseFooter } from "../../../assets/database/Footer/Db"

const WarrantySupport = () => {
  
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
      
      <S.Title>Garantia e Assistência Técnica</S.Title>

      <div className="orgTexts">

        <S.Bloco>
          <S.SubTitle>1. Garantia dos Produtos</S.SubTitle>
          <S.Descricao><span>1.1</span>Todos os relógios vendidos na OMG Replics possuem garantia de 12 meses contra defeitos de fabricação.</S.Descricao>
          <S.Descricao><span>1.2</span>Cobertura:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Problemas no mecanismo.</li>
              <li>Defeitos estruturais na caixa ou pulseira.</li>
            </ul>
          </S.Descricao>
          <S.Descricao><span>1.3</span>Exclusões:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Danos causados por mau uso, quedas ou contato excessivo com água (exceto em modelos à prova d’água).</li>
              <li>Troca de baterias.</li>
            </ul>
          </S.Descricao>            
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>2. Como Acionar a Garantia</S.SubTitle>
          <S.Descricao><span>2.1</span>Para acionar a garantia, siga os passos abaixo:</S.Descricao>
          <S.Descricao><span>2.2</span>Entre em contato pelo e-mail contato@conjuntomistery.com ou WhatsApp98 98108-7743.</S.Descricao>
          <S.Descricao><span>2.3</span> Informe:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Número do pedido.</li>
              <li>Descrição do problema.</li>
              <li>Fotos ou vídeos do produto.</li>
            </ul>
          </S.Descricao>
          <S.Descricao><span>2.4</span>Nossa equipe analisará a solicitação e fornecerá as instruções para envio do produto.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>3. Assistência Técnica</S.SubTitle>
          <S.Descricao><span>3.1</span>Após o período de garantia, oferecemos serviços de manutenção. Entre em contato para um orçamento e mais informações.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>4. Custos de Envio</S.SubTitle>
          <S.Descricao><span>4.1</span>Os custos de envio variam conforme a situação:</S.Descricao>
          <S.Descricao>
            <ul>
              <li><strong>Durante a garantia:</strong> custos de envio são de responsabilidade da OMG Replics.</li>
              <li><strong>Fora da garantia:</strong> custos de envio são do cliente.</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>5. Prazo de Análise e Conserto</S.SubTitle>
          <S.Descricao><span>5.1</span>Produtos enviados para garantia serão analisados em até 10 dias úteis após o recebimento.</S.Descricao>
        </S.Bloco>

      </div>

      <FaqFooter
        acessDb={DbFooter.Faq}
        titlePage="DÚVIDAS FREQUENTES"
      />

    </S.Container>
  );
};

export { WarrantySupport };
