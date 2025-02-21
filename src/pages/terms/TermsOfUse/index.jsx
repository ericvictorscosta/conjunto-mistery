import React, { useEffect } from "react"
import * as S from "./styles";
import { GlobalStyle } from "../../../styles/global";
import { HeaderPromotion } from "../../../components/HeaderPromotion";
import { Logo } from "../../../components/Logo";
import { FaqFooter } from "../../../components/FaqFooter";

import { FrameDefault } from '../db';
import { DataBaseFooter } from "../../../assets/database/Footer/Db"

const TermsOfUse = () => {
  
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
      <Logo logo={Db.LogoMarca.link} AltLogo={Db.LogoMarca.alt} />
      
      <S.Title>Termos de Uso</S.Title>

      <div className="orgTexts">

        <S.Bloco>
          <S.SubTitle>1. Acerca da Introdução</S.SubTitle>
          <S.Descricao><span>1.1</span>Seja bem-vindo(a) à OMG Replics. Estes Termos de Uso regulam o uso do nosso site e dos serviços oferecidos pela nossa loja de relógios. Ao acessar ou utilizar nossos serviços, você concorda com os termos descritos abaixo. Caso não concorde com algum ponto, pedimos que não utilize nosso site.</S.Descricao>
        </S.Bloco>
        
        <S.Bloco>
          <S.SubTitle>2. Sobre a <span style={{textDecoration: 'underline'}}>OMG Replics</span></S.SubTitle>
          <S.Descricao><span>2.1</span>A OMG Replics é especializada na venda de relógios de alta qualidade. Garantimos a autenticidade e excelência dos nossos produtos.</S.Descricao>
        </S.Bloco>
        
        <S.Bloco>
          <S.SubTitle>3. Cadastro</S.SubTitle>
          <S.Descricao><span>3.1</span>Para realizar compras, o usuário pode ser solicitado a criar uma conta, fornecendo informações precisas, completas e atualizadas. Você é responsável por manter a confidencialidade dos dados de acesso e por todas as atividades realizadas na sua conta.</S.Descricao>
        </S.Bloco>
        
        <S.Bloco>
          <S.SubTitle>4. Produtos e Disponibilidade</S.SubTitle>
          <S.Descricao><span>4.1</span>Os produtos apresentados no site estão sujeitos à disponibilidade em estoque. Caso o produto adquirido não esteja mais disponível, a OMG Replics entrará em contato para oferecer alternativas ou realizar o reembolso.</S.Descricao>
          <S.Descricao><span>4.2</span>As imagens dos produtos são meramente ilustrativas e podem apresentar variações de cor ou detalhes em relação ao produto real.</S.Descricao>
        </S.Bloco>
        
        <S.Bloco>
          <S.SubTitle>5. Pagamentos e Preços</S.SubTitle>
          <S.Descricao><span>5.1</span>Os preços dos produtos estão sujeitos a alterações sem prévio aviso.</S.Descricao>
          <S.Descricao><span>5.2</span>Aceitamos pagamentos via cartão de crédito, PIX, e outros métodos especificados no site.</S.Descricao>
          <S.Descricao><span>5.3</span>Todas as transações são processadas com segurança para proteger seus dados.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>6. Acerca da Entrega</S.SubTitle>
          <S.Descricao><span>6.1</span>O prazo de entrega varia de acordo com a região do cliente e será informado no momento da compra.</S.Descricao>
          <S.Descricao><span>6.2</span>A OMG Replics não se responsabiliza por atrasos decorrentes de problemas com os serviços dos correios ou transportadoras.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>7. Trocas e Devoluções</S.SubTitle>
          <S.Descricao><span>7.1</span>O cliente tem até 7 (sete) dias úteis após o recebimento do produto para solicitar a troca ou devolução, conforme o disposto no Código de Defesa do Consumidor.</S.Descricao>
          <S.Descricao><span>7.2</span>Para ser elegível, o produto deve estar em perfeito estado, sem sinais de uso, e na embalagem original.</S.Descricao>
          <S.Descricao><span>7.3</span>Os custos de envio em casos de troca ou devolução serão informados pela OMG Replics.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>8. Limitação de Responsabilidade</S.SubTitle>
          <S.Descricao><span>8.1</span>A OMG Replics não se responsabiliza por danos indiretos, incidentais ou consequentes decorrentes do uso dos produtos adquiridos.</S.Descricao>
          <S.Descricao><span>8.2</span>Os produtos são vendidos "como estão", e a OMG Replics não garante que atendam às expectativas específicas de cada cliente.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>9. Propriedade Intelectual</S.SubTitle>
          <S.Descricao><span>9.1</span>Todo o conteúdo do site (textos, imagens, logotipos e outros materiais) é de propriedade da OMG Replics ou de terceiros licenciados. É proibida a reprodução sem autorização prévia.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>10. Alterações nos Termos de Uso</S.SubTitle>
          <S.Descricao><span>10.1</span>A OMG Replics se reserva o direito de modificar estes Termos de Uso a qualquer momento. Recomendamos que os usuários revisem periodicamente esta página para se manterem informados.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>11. Entre em Contato</S.SubTitle>
          <S.Descricao><span>11.1</span>Caso tenha dúvidas ou precise de suporte, entre em contato conosco pelo e-mail contato@omgreplics.com ou pelo WhatsApp 47 99715-2385.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>12. Foro e Legislação Aplicável</S.SubTitle>
          <S.Descricao><span>12.1</span>Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca da sede da OMG Replics, salvo disposição contrária na legislação aplicável.</S.Descricao>
        </S.Bloco>

      </div>


      <FaqFooter
        acessDb={DbFooter.Faq}
        titlePage="DÚVIDAS FREQUENTES"
      />

    </S.Container>
  );
};

export { TermsOfUse };
