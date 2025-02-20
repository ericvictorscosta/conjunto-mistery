import React from "react"
import ReactDOM from "react-dom/client"

// 1 - configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import Checkout from "./pages/CheckoutTesteAplication/CheckoutAplication/Checkout"
import PayPix from "./pages/CheckoutTesteAplication/PayPix/PayPix"
import PayCreditCard from "./pages/CheckoutTesteAplication/PayCreditCard/PayCreditCard"
import PayBoleto from "./pages/CheckoutTesteAplication/PayBoleto/PayBoleto"
import Duvidas from "./pages/DuvidaseRastreio/DuvidaseRastreio"

import styled from "styled-components"
import IUpsell from "./pages/z-poderoso-chefao-15-off/IUpsell"
import PreSellPage from "./pages/pre-poderoso-chefao/PoderosoChefao"
import FrontNeymarJr from "./pages/z-conjunto-mistery-neymar-jr/FrontNeymarJr"

export const CtnClose = styled.div`
  @media screen and (min-width: 768px) {
    /* display: none !important; */
  }
`

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <CtnClose>
        <Home />
      </CtnClose>
  },

  {
    path: "pre-poderoso-chefao",
    element:
      <CtnClose>
        <PreSellPage />
      </CtnClose>
  },
  // RELÓGIOS | OFERTAS
  {
    path: "conjutno-mistery-nj",
    element:
      <CtnClose>
        <FrontNeymarJr />
      </CtnClose>
  },
  
  // CONJUNTO COM 15% OFF
  {
    path: "oferta-15-off",
    element:
      <CtnClose>
        <IUpsell />
      </CtnClose>
  },

  // PAGES
  {
    path: "checkout/:id",
    element:
      <CtnClose>
        <Checkout />
      </CtnClose>
  },
  {
    path: "duvidas-e-rastreio",
    element:
      <CtnClose>
        <Duvidas />
      </CtnClose>
  },
  {
    path: "payment-pix",
    element:
      <CtnClose>
        <PayPix />
      </CtnClose>
  },
  {
    path: "payment-credit-card",
    element:
      <CtnClose>
        <PayCreditCard />
      </CtnClose>
  },
  {
    path: "payment-boleto",
    element:
      <CtnClose>
        <PayBoleto />
      </CtnClose>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
)
