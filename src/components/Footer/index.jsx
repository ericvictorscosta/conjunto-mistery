import React, { useState } from "react"
import { ImLocation2 } from "react-icons/im"
import { HiOutlineClock } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import {
  BsBagCheckFill,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs"

import {
  ButtonClose,
  ButtonContainer,
  ButtonContato,
  CartoesImg,
  CompraSeguraImg,
  Container,
  Content,
  Copyright,
  CtnLogo,
  DivMobile,
  FormasPagamento,
  FormasPagamentoDesktop,
  LinkRastreio,
  Midias,
  ModalWrapper,
  PaginaInicial,
  Section,
  SectionMobile,
  SubtitleModal,
  SubtitleText,
  Text,
  TextModal,
  TextPages,
  Title,
  TitleModal,
  TitleSmall,
} from "./styles"
import { Link } from "react-router-dom"
import { CarouselFooter } from "../CarrosselFooter"
import { FrameDefault } from "../../pages/z-conjunto-mistery-neymar-jr/db"

const Footer = ({ paginaInicial, prazoEntrega }) => {
  const Db = FrameDefault

  const [openFirst, setOpenFirst] = useState(false)
  const [openSecond, setOpenSecond] = useState(false)
  const [openThird, setOpenThird] = useState(false)
  const [openFourth, setOpenFourth] = useState(false)
  const [openFifth, setOpenFifth] = useState(false)

  return (

    <>
      <CarouselFooter
        idProduto={Db.id}
      />

      <Container>
        <CtnLogo>
          <div className="line-lr"></div>
          {/* <img
            src="https://octanecdn.com/jacobandcocom/images/svg/logo-gray.svg"
            alt="Imagem do produto"
          /> */}
          <img
            src="https://cdn.shopify.com/s/files/1/0648/5904/6103/files/asuidskaudasiudw_black.png?v=1686575271"
            alt="Imagem do produto"
          />
          <div className="line-lr"></div>
        </CtnLogo>
        <Content>
          <Section className="informacoesLoja">
            <Text style={{ marginTop: "25px" }}>
              {/* <BsBagCheckFill size="18px" /> */}
              CNPJ: 42.250.253/0001-63
            </Text>
            <Text>
              {/* <ImLocation2 size="20px" /> */}
              OPERA GODFATHER LTDA
            </Text>

            <Text>
              Imperatriz/Ma - 65900-270
            </Text>

            <Text>
              Loja oficial e registrada®
            </Text>
          </Section>

          <Section className="servicosCliente">
            <Title>Serviço ao Cliente</Title>

            <SubtitleText onClick={() => setOpenFirst(true)}>
              Política de Privacidade
            </SubtitleText>
            <Modal open={openFirst} onClose={() => setOpenFirst(false)} center>
              <ModalWrapper>
                <TitleModal>Política de Privacidade</TitleModal>
                <TextModal>
                  Nós usamos cookies para melhorar sua experiência de navegação no
                  portal. Ao utilizar este site, você concorda com a política de
                  monitoramento de cookies. Para ter mais informações sobre como
                  isso é feito, acesse Política de cookies. Se você concorda,
                  clique em ACEITO.
                </TextModal>
                <SubtitleModal>O que são cookies?</SubtitleModal>
                <TextModal>
                  Cookies são arquivos salvos em seu computador, tablet ou
                  telefone quando você visita um site.Usamos os cookies
                  necessários para fazer o site funcionar da melhor forma possível
                  e sempre aprimorar os nossos serviços. Alguns cookies são
                  classificados como necessários e permitem a funcionalidade
                  central, como segurança, gerenciamento de rede e acessibilidade.
                  Estes cookies podem ser coletados e armazenados assim que você
                  inicia sua navegação ou quando usa algum recurso que os requer.
                </TextModal>
                <SubtitleModal>Cookies Primários</SubtitleModal>
                <TextModal>
                  Alguns cookies serão colocados em seu dispositivo diretamente
                  pelo nosso site - são conhecidos como cookies primários. Eles
                  são essenciais para você navegar no site e usar seus recursos.
                </TextModal>
                <SubtitleModal>Temporários</SubtitleModal>
                <Text>
                  Nós utilizamos cookies de sessão. Eles são temporários e expiram
                  quando você fecha o navegador ou quando a sessão termina.
                </Text>
                <SubtitleModal>Finalidade</SubtitleModal>
                <TextModal>
                  Estabelecer controle de idioma e segurança ao tempo da sessão.
                </TextModal>
                <SubtitleModal>Persistentes</SubtitleModal>
                <TextModal>
                  Utilizamos também cookies persistentes que permanecem em seu
                  disco rígido até que você os apague ou seu navegador o faça,
                  dependendo da data de expiração do cookie. Todos os cookies
                  persistentes têm uma data de expiração gravada em seu código,
                  mas sua duração pode variar.
                </TextModal>
                <SubtitleModal>Finalidade</SubtitleModal>
                <TextModal>
                  Coletam e armazenam a ciência sobre o uso de cookies no site.
                </TextModal>
                <SubtitleModal>Cookies de Terceiros</SubtitleModal>
                <TextModal>
                  Outros cookies são colocados no seu dispositivo não pelo site
                  que você está visitando, mas por terceiros, como, por exemplo,
                  os sistemas analíticos.
                </TextModal>
                <SubtitleModal>Temporários</SubtitleModal>
                <TextModal>
                  Nós utilizamos cookies de sessão. Eles são temporários e expiram
                  quando você fecha o navegador ou quando a sessão termina.
                </TextModal>
                <SubtitleModal>Persistentes</SubtitleModal>
                <TextModal>
                  Utilizamos também cookies persistentes que permanecem em seu
                  disco rígido até que você os apague ou seu navegador o faça,
                  dependendo da data de expiração do cookie. Todos os cookies
                  persistentes têm uma data de expiração gravada em seu código,
                  mas sua duração pode variar.
                </TextModal>
                <SubtitleModal>Finalidade</SubtitleModal>
                <TextModal>
                  Coletam informações sobre como você usa o site, como as páginas
                  que você visitou e os links em que clicou. Nenhuma dessas
                  informações pode ser usada para identificá-lo. Seu único
                  objetivo é possibilitar análises e melhorar as funções do site.
                </TextModal>
                <TextModal>
                  Você pode desabilitá-los alterando as configurações do seu
                  navegador, mas saiba que isso pode afetar o funcionamento do
                  site.
                </TextModal>
                <TextModal style={{ paddingLeft: "15px" }}>
                  Chrome
                  <br />
                  Firefox
                  <br />
                  Microsoft Edge
                  <br />
                  Internet Explorer
                </TextModal>
                <ButtonClose onClick={() => setOpenFirst(false)}>
                  FECHAR
                </ButtonClose>
              </ModalWrapper>
            </Modal>

            <SubtitleText onClick={() => setOpenSecond(true)}>
              Política de Reembolso
            </SubtitleText>
            <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
              <ModalWrapper>
                <TitleModal>Política de Reembolso</TitleModal>
                <SubtitleModal>CONDIÇÕES PARA TROCA</SubtitleModal>
                <TextModal>
                  A equipe <strong>GODFATHER</strong> está constantemente investindo
                  em políticas para que nossos clientes sempre saem satisfeitos.
                  Você pode solicitar a troca de um produto em até 7
                  dias corridos após o recebimento do mesmo, lembrando que trabalhamos apenas com o modelo de troca, não realizamos quaisquer tipo de devolução. Precisam ser
                  observadas as seguintes condições:
                </TextModal>
                <TextModal>
                  - O produto deve ser devolvido em sua embalagem original;
                  <br />
                  - O produto deve ser devolvido sem indícios de uso ou consumo,
                  isto é, da forma que foi recebido;
                  <br />- O produto deve ser devolvido com etiquetas (ou
                  protetores) afixados, manuais e todos os acessórios que o
                  acompanhem.
                </TextModal>
                <TextModal>
                  IMPORTANTE: Não aceitaremos devoluções caso as condições acima
                  não sejam respeitadas.
                </TextModal>
                <SubtitleModal>
                  O QUE FAZER PARA SOLICITAR TROCA OU DEVOLUÇÃO
                </SubtitleModal>
                <TextModal>
                  Envie um e-mail para
                  <strong> contato@operagodfather.store</strong> e informe:
                </TextModal>
                <TextModal>
                  - Nome do produto;
                  <br />
                  - Número do pedido;
                  <br />- E-mail cadastrado na compra;
                  <br />- Motivo para troca ou devolução;
                  <br />- IMAGEM OU VÍDEO QUE COMPROVE O DEFEITO, CASO HAJA.
                </TextModal>
                <TextModal>
                  Confirmadas todas as questões acerca da devolução do produto,
                  lhe informaremos o endereço para devolução do produto e lhe enviaremos um novo modelo do produto recebido.
                </TextModal>
                <ButtonClose onClick={() => setOpenSecond(false)}>
                  FECHAR
                </ButtonClose>
              </ModalWrapper>
            </Modal>

            <SubtitleText onClick={() => setOpenThird(true)}>
              Política de Envio
            </SubtitleText>
            <Modal open={openThird} onClose={() => setOpenThird(false)} center>
              <ModalWrapper>
                <TitleModal>Política de Envio</TitleModal>
                <SubtitleModal>
                  CUIDADOS COM ENDEREÇAMENTO DE PEDIDOS
                </SubtitleModal>
                <TextModal>
                  A <strong>GODFATHER</strong> providenciará o envio dos produtos
                  para o endereço que o cliente solicitar. Portanto, para que não
                  haja empecilhos para a entrega da sua encomenda, pedimos atenção
                  no momento de preencher o endereço no qual deseja receber o seu
                  pedido.
                </TextModal>
                <SubtitleModal>DESTINATÁRIO AUSENTE</SubtitleModal>
                <TextModal>
                  Certifique-se de que haverá alguém no endereço para receber seus
                  produtos. Os Correios realizam três tentativas de entrega dos
                  produtos, caso não haja ninguém no endereço para receber a
                  encomenda em nenhuma das tentativas, o pacote será levado para a
                  agência dos Correios mais próxima ao endereço, e, neste caso,
                  será necessário que o destinatário do pacote realize a retirada
                  do mesmo na agência dos Correios, em até 7 dias corridos. Caso o
                  destinatário da encomenda não realize a retirada, por norma dos
                  Correios, o pacote retornará ao remetente, sendo necessário o
                  pagamento de um novo frete para o reenvio do produto.
                </TextModal>
                <TextModal>
                  Todos os detalhes relacionados às tentativas de entrega, bem
                  como o endereço da agência dos Correios na qual o destinatário
                  deverá buscar seu pacote no caso de ausência no endereço, ficam
                  registrados no rastreio do pedido, que pode ser acompanhado pela{" "}
                  <LinkRastreio
                    href="https://www.jacobeco.com/duvidas-e-rastreio"
                    target="_blank"
                  >
                    Página de Rastreio
                  </LinkRastreio>
                  , utilizando o código de rastreio fornecido.
                </TextModal>
                <SubtitleModal>ENDEREÇO INCORRETO OU INCOMPLETO</SubtitleModal>
                <TextModal>
                  A <strong>GODFATHER</strong> não se responsabiliza pelo
                  preenchimento incorreto ou incompleto do endereço de destino dos
                  pedidos realizados na loja. Caso ocorra o endereçamento
                  incorreto ou incompleto, por norma dos Correios, o pacote
                  retornará ao remetente, e não serão mais realizadas outras
                  tentativas de entrega naquele endereço.
                </TextModal>
                <TextModal>
                  <strong>Atenção:</strong> Em caso da entrega não ser realizada
                  devido a divergência no endereço informado pelo cliente, o
                  cliente não tem direito ao reembolso, será necessário o
                  pagamento de um novo frete (valor do envio + taxa dos correios),
                  para reenvio do produto.
                </TextModal>
                <SubtitleModal>PRAZO DE PROCESSAMENTO</SubtitleModal>
                <TextModal>
                  Após seu pedido ser processado e o pagamento cair em nosso
                  sistema, os próximos passos são: separação, embalagem e
                  despacho. Este processo geralmente leva cerca de{" "}
                  <strong>2 a 5 horas após a conclusão do pagamento</strong>.
                </TextModal>
                <SubtitleModal>
                  PRAZO PARA ENVIO DO PRODUTO E CÓDIGO DE RASTREAMENTO
                </SubtitleModal>
                <TextModal>
                  Você receberá o código de rastreamento no e-mail cadastrado na
                  compra em até 7 dias úteis após o processamento do seu pedido.
                  As atualizações de rastreamento disponibilizadas pela empresa de
                  logística não são atualizadas no sistema imediatamente, sendo
                  assim, podem ocorrer delays nas atualizações reais do pacote.
                  Para rastrear seu pedido, basta entrar na página{" "}
                  <LinkRastreio
                    href="https://www.jacobeco.com/duvidas-e-rastreio"
                    target="_blank"
                  >
                    Acompanhar Pedido
                  </LinkRastreio>{" "}
                  aqui em nosso site.
                </TextModal>
                <TextModal>
                  Por ser uma encomenda internacional, para que o rastreamento
                  esteja disponível no site dos Correios é preciso que haja
                  deslocamento do produto até o Brasil, por isso, pode demorar
                  alguns dias para que ocorra a atualização do código de rastreio
                  no sistema, sendo possível visualizar o rastreamento do produto.
                </TextModal>
                <SubtitleModal>PRAZO DE ENTREGA</SubtitleModal>
                <TextModal>
                  O prazo de entrega exato para a sua região é informada no
                  momento da finalização da compra quando você digita o seu CEP,
                  podem haver variações no prazo de acordo com a época do ano, mas
                  normalmente, o prazo médio para todo o Brasil fica entre{" "}
                  <strong>{prazoEntrega}</strong>, variando de acordo com a
                  agilidade momentânea dos correios de cada região. Todavia,
                  fatores adversos tais como greve dos Correios, crises sanitárias
                  e humanitárias, impossibilidade de entrega devido a fatores
                  climáticos ou áreas de risco e feriados nacionais, podem
                  acrescer alguns dias na entrega do produto.
                </TextModal>
                <SubtitleModal>ORIGEM</SubtitleModal>
                <TextModal>
                  A <strong>GODFATHER</strong> realiza a Intermediação entre as
                  fábricas de origem do produto e o cliente final. Nossos produtos
                  são enviados diretamente de nossos fornecedores dos Estados
                  Unidos, Ásia e Europa. Possuímos autoridade no ramo e uma equipe
                  especializada na comercialização de produtos oriundos de
                  parcerias sólidas com fornecedores primários, oferecendo
                  produtos inovadores, exclusivos e com ótimos preços (sem custos
                  adicionais de revenda). Há situações em que a entrega de um
                  pedido pode ser feita em duas ou mais remessas, pois os produtos
                  podem ser enviados de fornecedores diferentes. Nesse caso, você
                  receberá um código de rastreamento para cada remessa.
                </TextModal>
                <SubtitleModal>FORMAS DE ENVIO</SubtitleModal>
                <TextModal>
                  Os produtos vendidos pela <strong>GODFATHER</strong> são sempre
                  entregues pelos Correios, no entanto, em alguns casos tais como
                  destinatário ausente, região com limitação de entrega ou até
                  endereço incorreto, pode ser que o cliente tenha que buscar o
                  produto na agência mais próxima de sua residência.
                </TextModal>
                <TextModal>
                  Caso o endereço não seja preenchido corretamente, é possível que
                  o produto retorne ao remetente. Pedimos atenção redobrada na
                  hora de preencher o endereço. Caso haja algum erro no
                  preenchimento do endereço e o produto não possa ser entregue, a
                  responsabilidade é do cliente.
                </TextModal>
                <TextModal>
                  Os Correios realizam três tentativas de entrega, caso não
                  consigam completá-la o produto ficará disponível para retirada
                  na agência mais próxima por até 7 dias. Após este prazo, o
                  produto retorna ao remetente.
                </TextModal>
                <TextModal>
                  <strong>
                    AO REALIZAR UMA COMPRA EM NOSSO SITE O CLIENTE DECLARA ESTAR
                    CIENTE E DE ACORDO COM TUDO QUE ESTÁ DESCRITO ACIMA.
                  </strong>
                </TextModal>
                <ButtonClose onClick={() => setOpenThird(false)}>
                  FECHAR
                </ButtonClose>
              </ModalWrapper>
            </Modal>

            <SubtitleText onClick={() => setOpenFourth(true)}>
              Página de Contato
            </SubtitleText>
            <Modal open={openFourth} onClose={() => setOpenFourth(false)} center>
              <ModalWrapper>
                <TitleModal>Página de Contato</TitleModal>
                <ButtonContainer>
                  <ButtonContato>
                    <FaPhoneAlt size="18px" />
                    (11) 99261-1063
                  </ButtonContato>
                  <ButtonContato>
                    <MdEmail size="18px" />
                    contato@operagodfather.store
                  </ButtonContato>
                </ButtonContainer>
                <ButtonClose onClick={() => setOpenFourth(false)}>
                  FECHAR
                </ButtonClose>
              </ModalWrapper>
            </Modal>

            <SubtitleText>
              <Link
                to={"/duvidas-e-rastreio"}
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Dúvidas e Rastreio
              </Link>
            </SubtitleText>

            <SubtitleText onClick={() => setOpenFifth(true)}>
              Termos de Serviço
            </SubtitleText>
            <Modal open={openFifth} onClose={() => setOpenFifth(false)} center>
              <ModalWrapper>
                <TitleModal>Termos de Serviço</TitleModal>
                <SubtitleModal>VISÃO GERAL</SubtitleModal>
                <TextModal>
                  Bem-vindo ao nosso termos e serviços, onde apresentamos o exclusivo Conjunto do Poderoso Chefão. Este conjunto premium é composto por três objetos icônicos: um relógio elegante, uma caneta sofisticada e um perfume envolvente. Ao adquirir o Conjunto do Poderoso Chefão, você receberá  um dos três objetos de acordo com a disponibilidade do estoque.
                </TextModal>
                <TextModal>
                  Entendemos que a escolha entre esses produtos extraordinários pode ser um desafio. Queremos tornar sua experiência conosco ainda mais empolgante. Ao comprar o Conjunto do Poderoso Chefão, você irá receber um desses objetos excepcionais, lembrando que o produto será enviado de acordo com a disponibilidade em nosso estoque.
                </TextModal>
                <TextModal>
                  Nosso processo é transparente e imparcial. Ao adquirir o Conjunto do Poderoso Chefão, você receberá um dos itens ou o conjunto completo. A emoção faz parte dessa experiência única.
                </TextModal>

                <TextModal>
                  Cada objeto do Conjunto do Poderoso Chefão é  selecionado para oferecer qualidade, estilo e sofisticação. Independentemente do que você receber, terá em mãos um símbolo de poder e distinção, representando o universo fascinante do Poderoso Chefão.
                </TextModal>

                <TextModal>
                  Aproveite essa oportunidade para adquirir o Conjunto do Poderoso Chefão e acrescentar um toque de autoridade à sua vida. Cada compra é uma chance de vivenciar a essência desse universo singular, onde cada objeto representa um elo com a grandiosidade do poder.
                </TextModal>

                <TextModal>
                  A caneta que a nossa Loja envia para os clientes, é uma caneta lisa, sem emblema ou detalhes específicos,  mas representa um dos objetos do conjunto. Deixamos bem claro, que será enviado cada objeto de acordo com a disponibilidade e forma que estiver disponível no Site.
                </TextModal>

                <SubtitleModal>SEÇÃO 1 - TERMOS DA LOJA VIRTUAL</SubtitleModal>
                <TextModal>
                  Ao comprar o Conjunto Misterioso do Poderoso Chefão em nossa loja virtual, você entende que poderá receber qualquer combinação dos seguintes itens: relógio, caneta e perfume do Poderoso Chefão. O(s) item(ns) exato(s) que você receberá são recebidos em segredo até que você abra. Lembrando que o produto com maior probabilidade de todos os clientes receberam é a caneta. com 99,8% de chance de vim o item Caneta do Conjunto Mistery.
                </TextModal>

                <SubtitleModal>SEÇÃO 2 - CONDIÇÕES GERAIS</SubtitleModal>
                <TextModal>
                  Nós nos reservamos o direito de limitar a ingestão de Conjuntos Misteriosos do Poderoso Chefão que são vendidos a cada cliente ou endereço.
                </TextModal>

                <SubtitleModal>
                  SEÇÃO 3 - PRODUTOS OU SERVIÇOS (se aplicável)
                </SubtitleModal>
                <TextModal>
                  Os Conjuntos Misteriosos do Poderoso Chefão são vendidos como estão, sem a possibilidade de escolha ou preferência por parte do cliente. A seleção do(s) item(ns) incluído(s) no Conjunto Misterioso do Poderoso Chefão é feita com a disponibilidade de nosso estoque.
                </TextModal>
                <SubtitleModal>
                  SEÇÃO 4 - PRECISÃO DE COBRANÇA E INFORMAÇÕES DA CONTA
                </SubtitleModal>
                <TextModal>
                  Cada compra do Conjunto Misterioso do Poderoso Chefão é considerada final e não é passível de devolução ou reembolso com base no(s) item(ns) recebido(s) no conjunto.
                </TextModal>

                <SubtitleModal>
                  SEÇÃO 5 - COMPRA E ENTREGA DO CONJUNTO
                </SubtitleModal>
                <TextModal>
                  Ao comprar o CONJUNTO Misterioso do Poderoso Chefão, o cliente concorda que a seleção do(s) produto(s) é realizada de acordo com a disponibilidade do nosso estoque e que o produto será enviado para o endereço fornecido no momento da compra. O vendedor não é responsável por quaisquer erros de envio resultantes de informações incorretas fornecidas pelo cliente.
                </TextModal>

                <SubtitleModal>
                  SEÇÃO 6 - GARANTIA E RESPONSABILIDADE
                </SubtitleModal>
                <TextModal>
                  O vendedor se isenta de todas as garantias, explicitamente ou implícitas, incluindo, mas não se limitando à garantia implícita de concorrência e obediência a uma finalidade específica. O vendedor não será responsável por qualquer dano resultante do uso ou incapacidade de usar o Conjunto Misterioso do Poderoso Chefão.
                </TextModal>

                <SubtitleModal>SEÇÃO 7 - PREÇO E PAGAMENTO</SubtitleModal>
                <TextModal>
                  O cliente concorda em pagar o preço total do Conjunto Misterioso do Poderoso Chefão conforme listado no momento da compra. O preço do conjunto é fixo e não está sujeito a alterações ou descontos, a menos que especificamente indicado pelo vendedor.
                </TextModal>

                <SubtitleModal>SEÇÃO 8 - COMENTÁRIOS E REVISÕES</SubtitleModal>
                <TextModal>
                  Após receber o Conjunto Misterioso do Poderoso Chefão, o cliente tem o direito de fornecer feedback e examinar o produto. No entanto, o vendedor se reserva o direito de monitorar, editar ou remover quaisquer comentários ou estimativas que consideram ofensivos, ilegais ou violem estes termos de serviço.
                </TextModal>

                <SubtitleModal>
                  SEÇÃO 9 - POLÍTICA DE DEVOLUÇÃO
                </SubtitleModal>
                <TextModal>
                  Devido à natureza misteriosa do conjunto Misterioso do Poderoso Chefão, todas as vendas são finais. O vendedor não aceitará devoluções ou trocas com base na insatisfação do cliente com o(s) item(ns) recebido(s).
                </TextModal>

                <SubtitleModal>SEÇÃO 10 - DISPONIBILIDADE DO CONJUNTO</SubtitleModal>
                <TextModal>
                  O Conjunto Misterioso do Poderoso Chefão está disponível para compra enquanto durarem os estoques. Caso um item se esgote, nos reservamos o direito de substituí-lo por um item de igual valor e qualidade.
                </TextModal>
                <SubtitleModal>
                  SEÇÃO 11 - CANCELAMENTO DO PEDIDO
                </SubtitleModal>
                <TextModal>
                  Nós reservamos o direito de cancelar qualquer pedido por qualquer motivo. Em caso de cancelamento de um pedido por nossa parte, o cliente receberá outro modelo semelhante ao solicitado caso esteja dentro das nossas politicas de Reembolso.
                </TextModal>

                <SubtitleModal>SEÇÃO 12 - ALTERAÇÕES NOS TERMOS DE SERVIÇO</SubtitleModal>
                <TextModal>
                  Podemos, a qualquer momento, rever e atualizar estes termos de serviço. É responsabilidade do cliente verificar periodicamente as alterações feitas nestes termos.
                </TextModal>
                <SubtitleModal>
                  SEÇÃO 13 - LEGISLAÇÃO APLICÁVEL
                </SubtitleModal>
                <TextModal>
                  Estes termos de serviço e qualquer contrato separado pelo qual nós forneçamos os Kits Misteriosos do Poderoso Chefão a você serão regidos e interpretados de acordo com as leis do Brasil.
                </TextModal>

                <SubtitleModal>SEÇÃO 14 - MUDANÇAS NOS TERMOS DE SERVIÇO</SubtitleModal>
                <TextModal>
                  Você pode revisar a versão mais atual dos Termos de serviço a qualquer momento nesta página.
                </TextModal>

                <TextModal>
                  Reservamo-nos o direito, a nosso critério, de atualizar, modificar ou substituir qualquer parte destes Termos de serviço ao publicar atualizações e alterações no nosso site. É sua responsabilidade verificar periodicamente se há alterações em nosso site. Seu uso contínuo ou acesso ao nosso site ou ao Serviço após a publicação de quaisquer alterações a estes Termos de serviço constitui aceitação dessas alterações.
                </TextModal>
                <SubtitleModal>SEÇÃO 15 - INFORMAÇÕES DE CONTATO</SubtitleModal>
                <TextModal>
                  Perguntas sobre os Termos de serviço devem ser enviadas para nós em contato@operagodfather.store
                </TextModal>

                <ButtonClose onClick={() => setOpenFifth(false)}>
                  FECHAR
                </ButtonClose>
              </ModalWrapper>
            </Modal>
          </Section>

          <Section className="funcionamento">
            <Title>Horários de Funcionamento</Title>
            <Text style={{ justifyContent: 'start' }}>
              Segunda a Sexta: 8h às 21h
            </Text>
            <Text style={{ justifyContent: 'start' }}>
              Sábado: 9h às 17h
            </Text>
            <Text style={{ justifyContent: 'start' }}>
              Domingo: 8h às 17h
            </Text>
            <Text style={{ justifyContent: 'start' }}>
              (98) 98108-7743
            </Text>
            <Text style={{ marginBottom: "15px", justifyContent: 'start' }}>
              contato@operagodfather.store
            </Text>
          </Section>

          <Section className="midiasSociais">
          </Section>

          <SectionMobile>
            <DivMobile>
              <div className="compraSeguraImg">
                <CompraSeguraImg
                  style={{ width: '25%' }}
                  src="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/SELO-02-removebg-preview.png?v=1670130522"
                  alt=""
                />
                <CompraSeguraImg
                  src="https://cdn.shopify.com/s/files/1/0685/7965/5974/files/SELO-01-removebg-preview.png?v=1670130522"
                  alt=""
                />
              </div>

              <br />
              <TitleSmall style={{ textAlign: "center", marginTop: '0px' }}>
                Pagamento
              </TitleSmall>
              <FormasPagamento>
                <CartoesImg
                  src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/visa.png"
                  alt=""
                />
                <CartoesImg
                  src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/master.png"
                  alt=""
                />
                <CartoesImg
                  src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/hipercard.png"
                  alt=""
                />
                <CartoesImg
                  src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/amex.png"
                  alt=""
                />
                <CartoesImg
                  src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/diners.png"
                  alt=""
                />
                <CartoesImg
                  src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/elo.png"
                  alt=""
                />
                <CartoesImg
                  src="https://e692dde2776249f6.cdn.gocache.net/app/core/assets/dist/img/payment/pix2.png"
                  alt=""
                />
              </FormasPagamento>
            </DivMobile>
          </SectionMobile>
        </Content>
        <Copyright>
          ©️ 2025 Ltda | Todos os direitos reservados a GodFather®
        </Copyright>
      </Container>
    </>
  )
}

export { Footer }
