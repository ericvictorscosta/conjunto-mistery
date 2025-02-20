import React from "react"

import { TituloText } from "./styles"

const Titulo = ({ inlineStyle, tituloText }) => {
    return (
        <TituloText style={inlineStyle}>{tituloText}</TituloText>
    )
}

export { Titulo }