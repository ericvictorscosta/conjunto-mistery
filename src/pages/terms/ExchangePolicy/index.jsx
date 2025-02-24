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
        <S.SubTitle>1. Introdução</S.SubTitle>
        <S.Descricao>
          <span>1.1</span> O <strong>Conjunto Mistery Neymar Jr</strong> foi criado para oferecer exclusividade e qualidade aos nossos clientes. Prezamos pela sua satisfação e seguimos rigorosamente o Código de Defesa do Consumidor. Confira abaixo nossa política de trocas e devoluções.
        </S.Descricao>
      </S.Bloco>

      <S.Bloco>
        <S.SubTitle>2. Condições Gerais</S.SubTitle>
        <S.Descricao>
          <span>2.1</span> Você pode solicitar a troca ou devolução em até <strong>7 (sete) dias corridos</strong> após o recebimento, conforme o direito de arrependimento previsto em lei.
        </S.Descricao>
        <S.Descricao>
          <span>2.2</span> O produto deve estar <strong>sem sinais de uso</strong>, com todos os acessórios e na embalagem original.
        </S.Descricao>
        <S.Descricao>
          <span>2.3</span> Como trabalhamos com edições limitadas (apenas <strong>100 unidades</strong> disponíveis), a reposição pode estar sujeita à disponibilidade em estoque.
        </S.Descricao>
      </S.Bloco>

      <S.Bloco>
        <S.SubTitle>3. Como Solicitar Troca ou Devolução</S.SubTitle>
        <S.Descricao>
          <span>3.1</span> Entre em contato com nossa equipe pelo e-mail <strong>contato@conjuntomistery.com</strong> ou via WhatsApp <strong>(98) 98108-7743</strong> informando:
        </S.Descricao>
        <S.Descricao>
          <ul>
            <li>Nome completo;</li>
            <li>Número do pedido;</li>
            <li>Motivo da troca ou devolução;</li>
            <li>Fotos do produto, caso necessário.</li>
          </ul>
        </S.Descricao>
        <S.Descricao>
          <span>3.2</span> Nossa equipe responderá com as instruções detalhadas para o envio.
        </S.Descricao>
        <S.Descricao>
          <span>3.3</span> O produto deverá ser enviado ao endereço indicado, seguindo as orientações fornecidas.
        </S.Descricao>
      </S.Bloco>

      <S.Bloco>
        <S.SubTitle>4. Custos de Envio</S.SubTitle>
        <S.Descricao>
          <span>4.1</span> Os custos de envio podem variar de acordo com o motivo da troca ou devolução:
        </S.Descricao>
        <S.Descricao>
          <ul>
            <li>Para produtos com defeito ou enviados incorretamente, a <strong>Conjunto Mistery</strong> arca com o custo do envio.</li>
            <li>Para trocas por outros motivos, os custos de envio são de responsabilidade do cliente.</li>
          </ul>
        </S.Descricao>
      </S.Bloco>

      <S.Bloco>
        <S.SubTitle>5. Prazos para Processamento</S.SubTitle>
        <S.Descricao>
          <span>5.1</span> Nosso prazo para análise e processamento de trocas e devoluções é o seguinte:
        </S.Descricao>
        <S.Descricao>
          <ul>
            <li><strong>Análise do produto:</strong> Até 5 dias úteis após o recebimento.</li>
            <li><strong>Troca ou reembolso:</strong> Processado em até 10 dias úteis após a aprovação.</li>
          </ul>
        </S.Descricao>
      </S.Bloco>

      <S.Bloco>
        <S.SubTitle>6. Edição Limitada – Estoque Exclusivo</S.SubTitle>
        <S.Descricao>
          <span>6.1</span> O <strong>Conjunto Mistery Neymar Jr</strong> é uma coleção única, lançada apenas <strong>uma vez por ano</strong>. Como há apenas <strong>100 unidades</strong> disponíveis, recomendamos que sua solicitação de troca seja feita o mais rápido possível para garantir disponibilidade.
        </S.Descricao>
        <S.Descricao>
          <span>6.2</span> Caso o estoque esteja esgotado, oferecemos a opção de <strong>crédito para futuras edições</strong> ou reembolso total do valor pago.
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