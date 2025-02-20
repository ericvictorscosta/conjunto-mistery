import React from "react"
import { BsCheckCircle } from "react-icons/bs"

import {
  BodyCard,
  Container,
  Content,
  Main,
  ButtonCtn,
  ButtonCard,
  CtnTitle,
  PriceZone,
  DescriptionZone,
  ImgZone,
} from "./styles"

const CardProductClean = ({
  nameOfProduct,
  sinceXX,
  priceOfProduct,
  linkButton,
  onClick,
  cortPriceOfProduct
}) => {
  return (
    <Container onClick={onClick}>

      <BodyCard>

        <ImgZone>
          <img src="https://cdn.shopify.com/s/files/1/0679/9946/5650/files/10_Sem_Fundo.png?v=1740001880" alt="Banner Image" />
        </ImgZone>

        <Main>
          <CtnTitle>
            <h3>{nameOfProduct}</h3>

            <img src={sinceXX} alt="" />
            {/* <span>{sinceXX}</span> */}
          </CtnTitle>
          <Content>
            <DescriptionZone>
              <h6>O enigma | Menino de Ouro</h6>

              <span>Celebre o legado de um Craque com o Conjunto Mistery. Você terá tudo que precisa para impressionar alguém no alcance do seu toque. O jogo é para poucos, o estilo para menos ainda. Entre para a elite dos que fazem história.</span>

              <p>Edição Limitada</p>
            </DescriptionZone>

            <ButtonCtn>
              <PriceZone>
                <h5>Preço</h5>

                <p className="cort-price">
                  R${cortPriceOfProduct}
                </p>

                <div className="price-ctn">
                  <span> 3x de</span>
                  <p className="price-real">R${priceOfProduct}</p>
                </div>

              </PriceZone>
              <ButtonCard onClick={linkButton}>COMPRAR</ButtonCard>
            </ButtonCtn>
          </Content>
        </Main>

      </BodyCard>
    </Container>
  )
}

export { CardProductClean }
