import React from "react"
import { BsCheckCircleFill } from "react-icons/bs"
import {
  Container,
  ContainerSpec,
  Table,
  Title,
  Content,
  ContentTitle,
  Row,
  Attribute,
  HeadEspecify,
} from "./styles"
import { ButtonUptoTop } from "../ButtonUptotop"

const Especificacoes = ({
  acessDb,
  titlePage,
  onclickBtnTop
}) => {
  return (
    <Container>

      <ButtonUptoTop onClick={onclickBtnTop} />

      <HeadEspecify>
        <div className="imgFB">
          <img src="https://cdn.shopify.com/s/files/1/0648/5904/6103/files/jacobandcocom_444291343.webp?v=1686412538" alt="FRENTE" />
          <span>FRENTE</span>
        </div>
        <div className="imgFB">
          <img src="https://cdn.shopify.com/s/files/1/0648/5904/6103/files/jacobandcocom_447616215.png?v=1686412538" alt="VERSO" />
          <span>VERSO</span>
        </div>
      </HeadEspecify>


      <Title >{titlePage}</Title>

      <Table>

        {
          acessDb.map((item, index) => (
            <ContainerSpec key={index}>
              <Content style={{ alignSelf: "start", marginLeft: "30px" }}>
                {/* <BsCheckCircleFill size="17.5px" /> */}
                <img className="imgRose" src="https://cdn.shopify.com/s/files/1/0648/5904/6103/files/jacobandcocom_322252581-removebg-preview.png?v=1686413373" alt="" />
                <ContentTitle>{item.title}</ContentTitle>
              </Content>

              {item.specs.map((spec, index) => (
                <Row key={index}>
                  <Attribute>
                    <strong>{spec.name}</strong>
                    {spec.value}
                  </Attribute>
                </Row>))}
            </ContainerSpec>))
        }
      </Table>

    </Container>
  )
}

export { Especificacoes }
