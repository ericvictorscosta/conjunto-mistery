import React, { useState, useRef, useEffect } from "react"
import { BsCheckCircle } from "react-icons/bs"
import { useLocation } from "react-router-dom"
import { addMinutes, parse } from "date-fns"
import {
  GlobalStyle,
  ButtonCopy,
  Container,
  CronometroStyle,
  DivCode,
  DivCopy,
  DivCronometro,
  DivIcon,
  DivPedido,
  DivQrcode,
  ImageLoja,
  Text,
  TextPedido,
  Title,
  WrapperInformations,
  CtnButtonCopiar,
  ContainerQrcode,
} from "./styles"
import CronometroPix from "./CronometroPix"

function PayPix() {
  const location = useLocation()
  const { dataFromApi, orderId } = location.state
  const [codePix, setCodePix] = useState(dataFromApi.data.pix_emv)
  const inputRef = useRef(null)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codePix)

    alert("COPIADO")
    // console.log(codePix, "Código Pix")
  }

  // captura da data de expiração do PIX via API
  const [pixCreationDate, setPixCreationDate] = useState(
    dataFromApi.data.pix_creation_date
  )
  const dateCreationFormat = parse(
    pixCreationDate,
    "yyyy-MM-dd HH:mm:ss",
    new Date()
  )
  const dateFinal = addMinutes(dateCreationFormat, 30)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Container>
      <GlobalStyle />

      <WrapperInformations>
        <DivQrcode>
          <DivPedido>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <DivIcon>
                <BsCheckCircle size="100%" fill="#202223" />
              </DivIcon>
              <h3>PIX gerado com sucesso!</h3>
            </div>
            <TextPedido style={{ color: "#A3A4A4" }}>
              Agora você só precisa finalizar o pagamento
            </TextPedido>
          </DivPedido>

          <DivCronometro>
            <CronometroStyle>
              <CronometroPix dataCompleta={dateFinal} />
            </CronometroStyle>
            <TextPedido>Tempo para a conclusão da operação</TextPedido>
            <TextPedido>
              Efetue o pagamento agora mesmo <br />
              Pague através do codigo <strong>PIX copia e Cola</strong>
            </TextPedido>
          </DivCronometro>

          <CtnButtonCopiar onClick={copyToClipboard}>
            <input className="dont_copy" />
            <input
              type="text"
              ref={inputRef}
              value={codePix}
              disabled
              readOnly
              onChange={(e) => setCodePix(e.target.value)}
            />
            <ButtonCopy type="button">COPIAR</ButtonCopy>
          </CtnButtonCopiar>

          {/* <strong style={{
            fontSize: '11px',
            color: '#2587ff',
            margin: '10px 0 0'
          }}>Obs:</strong>
          <span style={{
            fontSize: '11px',
            display: 'flex',
            textAlign: 'center',
            color: 'red',
            margin: '5px 0 15px'
          }}>DÊ APENAS UM CLIQUE NO TEXTO ACIMA OU NO BOTÃO CHAMADO "COPIAR" DO LADO DIRETO E SEU TEXTO JÁ ESTARÁ PRONTO PARA SER COLADO EM SEU APLICATIVO DE PAGAMENTO.</span> */}

          <DivCopy>
            <Title>Como pagar o seu pedido</Title>

            <div
              style={{
                marginLeft: "10px",
                display: "flex",
                alignItems: "flex-start",
                gap: "5px",
              }}
            >
              <DivIcon>
                <img
                  src="https://adquirindo.mycartpanda.com/images/print.svg"
                  style={{ width: "100%", marginTop: "4px" }}
                  alt=""
                />
              </DivIcon>

              <Text>
                <strong>Copie o código</strong> acima clicando no botão.
              </Text>
            </div>

            <div
              style={{
                marginLeft: "10px",
                display: "flex",
                alignItems: "flex-start",
                gap: "5px",
                marginTop: "8px",
              }}
            >
              <DivIcon>
                <img
                  src="https://adquirindo.mycartpanda.com/images/mobil.svg"
                  style={{
                    width: "20px",
                    height: "24px",
                    objectFit: "contain",
                    marginTop: "4px",
                  }}
                  alt=""
                />
              </DivIcon>
              <Text>
                Abra o aplicativo do seu banco e na opção de{" "}
                <strong>pagamento por PIX</strong> selecione{" "}
                <strong>Copia e Cola</strong>. Certifique-se que os dados estão
                corretos e finalize o pagamento.
              </Text>
            </div>
          </DivCopy>

          <ContainerQrcode>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "500",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              OU
            </Text>

            {dataFromApi && (
              <DivCode>
                <img
                  style={{ display: "block", width: "250px", height: "250px" }}
                  id="base64image"
                  src={`data:image/jpeg;base64, ${dataFromApi.data.pix_qrcode}`}
                  alt="QR Code"
                />
              </DivCode>
            )}
          </ContainerQrcode>

          <Text
            style={{
              fontSize: "0.875rem",
              fontWeight: "500",
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            PEDIDO{" "}
            <span style={{ fontWeight: "600", color: "#2587ff" }}>
              #{orderId}
            </span>
          </Text>
        </DivQrcode>
      </WrapperInformations>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImageLoja
          style={{ marginTop: "20px", marginBottom: "0px" }}
          src="https://assets.mycartpanda.com/static/theme_images/d0/0d/07/290462_2797921766.png"
          alt="Logomarca da loja"
        />
      </div>
    </Container>
  )
}

export default PayPix
