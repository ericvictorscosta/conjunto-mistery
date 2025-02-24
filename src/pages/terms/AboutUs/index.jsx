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
          <S.Descricao>
            <span>1.1</span> O <strong>Conjunto Mistery</strong> nasceu de uma ideia ousada: trazer para você, que valoriza estilo e autenticidade, a essência do visual dos grandes artistas e ícones do esporte. Criamos algo exclusivo, uma única vez por ano, inspirados nos kits usados por personalidades que definem tendências. Dessa vez, fomos além do comum: não são apenas três camisas, mas um conjunto que representa moda, atitude e exclusividade.
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>2. Nossa Missão</S.SubTitle>
          <S.Descricao>
            <span>2.1</span> Mais do que vender um produto, queremos proporcionar a experiência de vestir-se como um craque dentro e fora dos campos. Combinamos peças icônicas que unem sofisticação e identidade, tornando acessível um estilo que antes parecia distante. Nosso compromisso é fazer com que cada cliente se sinta parte da elite do estilo, sem precisar gastar uma fortuna para isso.
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>3. Nossos Valores</S.SubTitle>
          <S.Descricao>
            <span>3.1</span> Nosso propósito vai além da moda – queremos impactar positivamente a forma como você se enxerga. Acreditamos que o vestuário não é apenas um detalhe, mas uma declaração de quem você é.
          </S.Descricao>
          <S.Descricao>
            <ul>
              <li><strong>Exclusividade:</strong> Criamos coleções únicas, uma vez ao ano, para quem busca algo além do óbvio.</li>
              <li><strong>Acessibilidade:</strong> Tornamos o luxo acessível, porque estilo de verdade não precisa ter um preço inalcançável.</li>
              <li><strong>Confiança:</strong> Produtos de qualidade, selecionados para elevar seu visual com autenticidade.</li>
            </ul>
          </S.Descricao>
        </S.Bloco>

        <S.Bloco>
          <S.SubTitle>4. Por que escolher o Conjunto Mistery Neymar Jr?</S.SubTitle>
          <S.Descricao>
            <span>4.1</span> Porque você merece mais do que o básico. Este conjunto não é apenas um combo de acessórios, mas uma experiência completa de estilo, inspirada em um dos maiores craques do futebol. Se vestir bem não é um privilégio – é uma atitude. E agora, você tem a chance de entrar no jogo com presença e exclusividade.
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

export { AboutUs };
