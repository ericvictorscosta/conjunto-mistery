import React from "react"
import { FrameDefault } from "../../pages/z-conjunto-mistery-neymar-jr/db"

import {
  Container,
  ContainerItem,
  Points,
  Title
} from "./styles"

const ShowQuestions = ({ idProduto }) => {
  const acessDb = FrameDefault.ShowQuestions

  return (
    <>
      <Title>Tem algum dúvida ? A gente responde:</Title>
      {Object.entries(acessDb).map((i) => {
        return (
          <Container key={i[1].id}>
            <ContainerItem>
              <Points>{i[1].point}</Points>
              <span className="description"><strong>{i[1].initiate}</strong>: {i[1].descricao}</span>
            </ContainerItem>
          </Container>
        )
      })}
    </>
  )
}

export { ShowQuestions }
