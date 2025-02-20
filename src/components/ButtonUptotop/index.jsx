import React from "react"

import { ButtonCtn } from "../../pages/sofa-cama-dobravel/styles"
import { Button } from "../Button"
import { Selos } from "../Selos"

import {
  ThirdDescription
} from "./styles"

const ButtonUptoTop = ({
  onClick,
  setStyle
}) => {
  return (
    <ThirdDescription style={setStyle}>
      <ButtonCtn>
        <button onClick={onClick}>COMPRAR AGORA</button>
      </ButtonCtn>
    </ThirdDescription>
  )
}

export { ButtonUptoTop }
