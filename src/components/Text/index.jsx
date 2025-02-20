import React from "react"

import { TextItem } from "./styles"

const Text = ({ inlineStyle, textItem, variant = "primary" }) => {
    return (
        <TextItem style={inlineStyle} variant={variant}>{textItem}</TextItem>
    )
}

export { Text }