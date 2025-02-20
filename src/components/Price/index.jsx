import React from "react"

import {
  Row,
  Seamaster,
  TitleProduct,
  Text,
  CutPrice,
  ParcelaPrice,
} from "./styles"

import "react-responsive-modal/styles.css"

const Price = ({
  signature,
  title,
  subtitle,
  parcelas,
  cutPrice,
  parcelaPrice,

  valorTotal,
}) => {
  return (
    <main>
      <Seamaster>{signature}</Seamaster>
      <TitleProduct>
        {title}
        <br />
        {subtitle}
      </TitleProduct>
      <Text>
        apenas <strong>{parcelas} </strong>sem juros de:
      </Text>
      <Row>
        <CutPrice>
          <s>R${cutPrice}</s>
        </CutPrice>
        <ParcelaPrice>R${parcelaPrice}</ParcelaPrice>
      </Row>
    </main>
  )
}

export { Price }
