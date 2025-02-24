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
          <S.SubTitle>1. Introdução</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>1.1</span> Seja bem-vindo(a) ao <strong>Conjunto Mistery Neymar Jr</strong>. Estes Termos de Uso regulam a utilização do nosso site e dos serviços prestados. Ao acessar ou utilizar nossos serviços, você concorda integralmente com as disposições aqui estabelecidas. Caso discorde de qualquer cláusula, recomendamos a não utilização do site.
          </S.Descricao>
        </S.Bloco>
        
        <S.Bloco>
          <S.SubTitle>2. Sobre o Conjunto Mistery</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>2.1</span> O <strong>Conjunto Mistery Neymar Jr</strong> é composto por três itens exclusivos. Todos os clientes que adquirirem o conjunto receberão a <strong>gargantilha</strong> e os <strong>óculos</strong>. O item principal, um <strong>relógio</strong>, será sorteado a cada 100 clientes, garantindo que um deles seja contemplado com essa peça de destaque.
          </S.Descricao>
        </S.Bloco>
        
        <S.Bloco>
          <S.SubTitle>3. Cadastro</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>3.1</span> Para efetuar compras, o usuário poderá ser solicitado a criar uma conta, fornecendo informações fidedignas e atualizadas. O usuário é integralmente responsável pela guarda e sigilo de seus dados de acesso, bem como pelas atividades realizadas em sua conta.
          </S.Descricao>
        </S.Bloco>
        
        <S.Bloco>
          <S.SubTitle>4. Produtos e Disponibilidade</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>4.1</span> A disponibilidade do <strong>Conjunto Mistery Neymar Jr</strong> está sujeita à limitação de estoque. Em caso de indisponibilidade, entraremos em contato para apresentar alternativas ou efetuar reembolsos.
          </S.Descricao>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>4.2</span> As imagens exibidas no site são meramente ilustrativas e podem apresentar leves variações em relação ao produto real.
          </S.Descricao>
        </S.Bloco>
        
        <S.Bloco>
          <S.SubTitle>5. Pagamentos e Preços</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>5.1</span> Os preços do <strong>Conjunto Mistery Neymar Jr</strong> estão sujeitos a alterações sem aviso prévio.
          </S.Descricao>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>5.2</span> São aceitos pagamentos via cartão de crédito, PIX e demais métodos especificados no site.
          </S.Descricao>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>5.3</span> Todas as transações financeiras são processadas com mecanismos avançados de segurança, garantindo a proteção dos dados dos usuários.
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>6. Entrega</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>6.1</span> O prazo de entrega varia conforme a localidade do destinatário e será informado no ato da compra.
          </S.Descricao>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>6.2</span> Não nos responsabilizamos por atrasos decorrentes de problemas operacionais dos serviços de transporte.
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>7. Trocas e Devoluções</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>7.1</span> O cliente dispõe de até 7 (sete) dias úteis após o recebimento do produto para solicitar a troca ou devolução, em conformidade com o Código de Defesa do Consumidor.
          </S.Descricao>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>7.2</span> O produto deverá estar intacto, sem indícios de uso, e na embalagem original para ser elegível à troca ou devolução.
          </S.Descricao>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>7.3</span> As despesas de envio em casos de troca ou devolução serão informadas previamente.
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>8. Limitação de Responsabilidade</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>8.1</span> Não nos responsabilizamos por danos indiretos, incidentais ou consequentes oriundos do uso dos produtos adquiridos.
          </S.Descricao>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>8.2</span> O <strong>Conjunto Mistery Neymar Jr</strong> é comercializado na forma "como está", não garantindo que atenderá a expectativas individuais específicas.
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>9. Propriedade Intelectual</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>9.1</span> Todos os conteúdos disponíveis no site, incluindo textos, imagens, logotipos e outros materiais, são de propriedade do <strong>Conjunto Mistery Neymar Jr</strong> ou de terceiros licenciados. A reprodução sem autorização prévia é expressamente vedada.
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>10. Alterações nos Termos de Uso</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>10.1</span> Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, sendo recomendada a revisão periódica por parte dos usuários.
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>11. Contato</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>11.1</span> Para dúvidas ou suporte, entre em contato pelo e-mail contato@conjuntomistery.com ou pelo WhatsApp (98) 98108-7743.
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>12. Foro e Legislação Aplicável</S.SubTitle>
          <S.Descricao style={{fontSize: '10px'}}>
            <span>12.1</span> Estes Termos de Uso são regidos pela legislação brasileira. Eventuais disputas serão dirimidas no foro competente da sede do <strong>Conjunto Mistery Neymar Jr</strong>, salvo disposição legal em contrário.
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

export { TermsOfUse };
