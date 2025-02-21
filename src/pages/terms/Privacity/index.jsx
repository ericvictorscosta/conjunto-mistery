import React, { useEffect } from "react"
import * as S from "./styles";
import { GlobalStyle } from "../../../styles/global";
import { HeaderPromotion } from "../../../components/HeaderPromotion";
import { Logo } from "../../../components/Logo";
import { FaqFooter } from "../../../components/FaqFooter";

import { FrameDefault } from '../db';
import { DataBaseFooter } from "../../../assets/database/Footer/Db"

const Privacity = () => {
  
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
      
      <S.Title>Termos de Privacidade</S.Title>

      <div className="orgTexts">

        <S.Bloco>
          <S.SubTitle>1. Introdução</S.SubTitle>
          <S.Descricao><span>1.1</span>A OMG Replics valoriza sua privacidade e está comprometida em proteger os dados pessoais de seus clientes. Este Aviso de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações.</S.Descricao>
        </S.Bloco>
        
        <S.Bloco>
          <S.SubTitle>2. Dados Coletados</S.SubTitle>
          <S.Descricao><span>2.1</span>Ao utilizar nossos serviços, podemos coletar as seguintes informações:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Dados pessoais: nome, endereço, e-mail, telefone e informações de pagamento.</li>
              <li>Dados de navegação: endereço IP, tipo de navegador, páginas acessadas e tempo de navegação.</li>
              <li>Dados fornecidos voluntariamente: informações fornecidas por meio de formulários ou contato com nossa equipe.</li>
            </ul>
          </S.Descricao>
        </S.Bloco>
        
        <S.Bloco>
          <S.SubTitle>3. Uso dos Dados</S.SubTitle>
          <S.Descricao><span>3.1</span>Utilizamos seus dados para:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Processar e entregar seus pedidos.</li>
              <li>Enviar atualizações sobre pedidos e comunicações promocionais (se autorizado).</li>
              <li>Melhorar nosso site e serviços com base em sua experiência.</li>
              <li>Garantir segurança e prevenir fraudes.</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>4. Compartilhamento de Dados</S.SubTitle>
          <S.Descricao><span>4.1</span>Não compartilhamos suas informações pessoais com terceiros, exceto:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Provedores de serviços essenciais (transportadoras, gateways de pagamento, etc.).</li>
              <li>Para cumprir exigências legais ou ordens judiciais.</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>5. Segurança dos Dados</S.SubTitle>
          <S.Descricao><span>5.1</span>Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, perda, alteração ou divulgação indevida.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>6. Cookies e Tecnologias Semelhantes</S.SubTitle>
          <S.Descricao><span>6.1</span>Nosso site utiliza cookies para melhorar sua experiência. Você pode desativar os cookies no seu navegador, mas isso pode limitar algumas funcionalidades do site.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>7. Direitos do Usuário</S.SubTitle>
          <S.Descricao><span>7.1</span>Você tem o direito de:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
              <li>Solicitar a limitação ou oposição ao tratamento de seus dados.</li>
              <li>Retirar consentimento para o envio de comunicações promocionais.</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>8. Retenção de Dados</S.SubTitle>
          <S.Descricao><span>8.1</span>Manteremos suas informações pelo tempo necessário para cumprir as finalidades descritas neste Aviso de Privacidade ou conforme exigido por lei.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>9. Alterações neste Aviso</S.SubTitle>
          <S.Descricao><span>9.1</span>Podemos atualizar este Aviso de Privacidade periodicamente. Recomendamos revisá-lo regularmente para estar ciente de quaisquer mudanças.</S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>10. Contato</S.SubTitle>
          <S.Descricao><span>10.1</span>Para dúvidas ou solicitações relacionadas à privacidade, entre em contato:</S.Descricao>
          <S.Descricao>
            <ul>
              <li>E-mail: contato@omgreplics.com</li>
              <li>WhatsApp: 47 99715-2385</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>11. Legislação Aplicável</S.SubTitle>
          <S.Descricao><span>11.1</span>Este Aviso de Privacidade está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e outras normas aplicáveis no Brasil.</S.Descricao>
        </S.Bloco>

      </div>

      <FaqFooter
        acessDb={DbFooter.Faq}
        titlePage="DÚVIDAS FREQUENTES"
      />

    </S.Container>
  );
};

export { Privacity };
