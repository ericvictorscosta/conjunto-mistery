import React, { useState } from "react"
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import * as S from "./styles"
import SomaIcon from "../../assets/icons/MaisIcon"
import MenosIcon from "../../assets/icons/MenosIcon"
import { useNavigate } from "react-router-dom"

const FaqFooter = ({
  titlePage,
  subtitlePage,
  acessDb
}) => {
  
  const [activeItemId, setActiveItemId] = useState(null)

  const handleItemClick = (itemId) => {
    setActiveItemId(itemId === activeItemId ? null : itemId)
  }

  const navigate = useNavigate();

  const termsOfUse = () => {
    navigate('/termos-de-uso')
  }
  
  const Privacity = () => {
    navigate('/politica-de-privacidade')
  }
  
  const ExchangePolicy = () => {
    navigate('/politica-de-trocas-e-devolucoes')
  }
  
  const PaymentPolicy = () => {
    navigate('/politica-de-pagamento-e-reembolsos')
  }
  
  const AboutUs = () => {
    navigate('/sobre-nos')
  }
  
  const Track = () => {
    navigate('/duvidas-e-rastreio')
  }
  
  const ContactSupport = () => {
    navigate('/contato-e-suporte')
  }
  
  const WarrantySupport = () => {
    navigate('/garantia-e-assistencia-tecnica')
  }

  return (
    <>
    <S.Container>
      <S.Table>

        {
          Object.entries(acessDb).map((i) => <S.Row>
            <S.Question onClick={() => handleItemClick(i[1].itemS)}>
              <S.QuestionText>{i[1].question}</S.QuestionText>
              <S.ImageCnt>
                {activeItemId === i[1].itemS ? (
                  <MenosIcon size="25px" />
                ) : (
                  <SomaIcon size="25px" />
                )}
              </S.ImageCnt>
            </S.Question>

            {activeItemId === i[1].itemS && (
              <S.Response open={activeItemId}>
                <S.ResponseText>{i[1].resposta}</S.ResponseText>
              </S.Response>
            )}
          </S.Row>)
        }
      </S.Table>
    </S.Container>
    <S.ContainerTerms>
      <ul className="terms">
        <li><a onClick={() => termsOfUse()}>Termos de Uso</a></li>
        <li className="divisor"><a onClick={() => Privacity()}>Política de Privacidade</a></li>
        <li className="divisor"><a onClick={() => ExchangePolicy()}>Política Devoluções</a></li>
        <li className="divisor"><a onClick={() => PaymentPolicy()}>Política Pagamento e ChargeBack</a></li>
        <li className="divisor"><a onClick={() => AboutUs()}>Sobre Nós</a></li>
        <li className="divisor"><a onClick={() => Track()}>Dúvidas e Rastreio</a></li>
        <li className="divisor"><a onClick={() => ContactSupport()}>Contato e Suporte</a></li>
        <li className="divisor"><a onClick={() => WarrantySupport()}>Garrantia e Assistência</a></li>
      </ul>

      <div className="contact">Email: contato@omgreplics.com | WhatsApp: (47) 9 9715-2385</div>
      <div className="copyright">Copyright OMG REPLICS SA. Todos os direitos reservados.</div>
      <div className="copyright">CNPJ: 40.596.247/0001-37 | Rua Daniel Campregher, Ilha da Figueira,   Guaramirim, 175, Santa Catarina - SC | CEP: 82970-000</div>
    </S.ContainerTerms>
    </>
  )
}

export { FaqFooter }
