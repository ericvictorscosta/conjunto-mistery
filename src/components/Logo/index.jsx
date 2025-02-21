import React from "react"

import { Wrapper } from "./styles"
import { Link } from "react-router-dom"

const Logo = ({ rotaLink, logo, AltLogo }) => {
  return (
    <Wrapper>
      <Link to={rotaLink}>
        <Wrapper>
          {/* <img src={logo} alt={AltLogo} /> */}
          <img src="https://cdn.shopify.com/s/files/1/0727/5154/6617/files/Design_sem_nome_31.png?v=1737559024" alt={AltLogo} />
        </Wrapper>
      </Link>
    </Wrapper>
  )
}

export { Logo }
