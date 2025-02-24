import React, { useEffect, useState } from 'react';
import { ButtonContainer, ContentModal, CronometroModal, CtnModal, DentroModal, FooterModal, ForaModal, HeaderModal } from './styles';
import { Button } from '../Button';

const ModalAddToCard = ({ titleButton, refClick }) => {
  const [modalOpenAddtoCard, setModalOpenAddtoCard] = useState(false);

  const handleModalOpenToCard = () => {
    setModalOpenAddtoCard(true);
    document.body.classList.add('modal-open');

    fbq("track", "AddToCart", {
      value: 187.09,
      currency: "BRL",
    })
  };

  const handleModalCloseTrack = () => {
    setModalOpenAddtoCard(false);
    document.body.classList.remove('modal-open');
  };

  const DbTimer = {
    horas: '00',
    minutos: '12',
    segundos: '49'
  }

  const [horas, setHoras] = useState(DbTimer.horas);
  const [minutos, setMinutos] = useState(DbTimer.minutos);
  const [segundos, setSegundos] = useState(DbTimer.segundos);

  useEffect(() => {
    const interval = setInterval(() => {
      const segundosAtual = parseInt(segundos);
      const minutosAtual = parseInt(minutos);
      const horasAtual = parseInt(horas);

      if (segundosAtual === 0) {
        if (minutosAtual === 0) {
          if (horasAtual === 0) {
            clearInterval(interval);
            // O cronômetro chegou a zero, faça algo aqui
          } else {
            setHoras((horasAtual - 1).toString().padStart(2, '0'));
            setMinutos('59');
            setSegundos('59');
          }
        } else {
          setMinutos((minutosAtual - 1).toString().padStart(2, '0'));
          setSegundos('59');
        }
      } else {
        setSegundos((segundosAtual - 1).toString().padStart(2, '0'));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [horas, minutos, segundos]);

  return (
    <>
      <ButtonContainer onClick={refClick}>
        <svg style={{ width: '35px', height: 'auto' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path fill="#FFF" d="M20.047 8h-8.124c-.8 0-1.423.917-1.423 2h11c0-1.083-.652-2-1.453-2zM23.311 12.736c-.059-.984-.89-1.736-1.898-1.736h-10.8c-1.008 0-1.839.752-1.898 1.736l-.712 10.268A1.9 1.9 0 0 0 9.902 25h12.193c1.098 0 1.988-.926 1.899-1.996l-.683-10.268zm-7.298 5.756c-2.403 0-4.361-1.91-4.361-4.223 0-.26.208-.463.475-.463s.474.202.474.463c0 1.822 1.513 3.268 3.383 3.268 1.869 0 3.382-1.475 3.382-3.268 0-.26.207-.463.474-.463s.475.202.475.463c.06 2.343-1.899 4.223-4.302 4.223zM5.842 21.75H.615c-.338 0-.615-.394-.615-.875S.277 20 .615 20h5.227c.338 0 .615.394.615.875s-.277.875-.615.875M6.09 18.75H2.324c-.346 0-.628-.394-.628-.875S1.978 17 2.324 17H6.09c.346 0 .628.394.628.875s-.282.875-.628.875M6.384 15.75H4.57c-.4 0-.726-.394-.726-.875S4.171 14 4.57 14h1.814c.399 0 .725.394.725.875s-.326.875-.725.875" />
        </svg>

        <span>{titleButton}</span>
      </ButtonContainer>

      {modalOpenAddtoCard && (
        <CtnModal className="modal">
          <ForaModal onClick={handleModalCloseTrack}>

          </ForaModal>
          <DentroModal className="modal-content">
            <HeaderModal>
              <div className="title-modal">
                <span onClick={handleModalCloseTrack}>Presente do Padrinho</span>
              </div>
              <span className='close-modal' onClick={handleModalCloseTrack}>
                <svg focusable="false" width="14" height="14" class="icon icon--close   " viewBox="0 0 14 14">
                  <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
                </svg>
              </span>
            </HeaderModal>

            <ContentModal>

              <CronometroModal>
                <span>🔥 Reservamos seu pedido por <strong>{minutos}:{segundos}</strong> minutos!</span>
              </CronometroModal>

              <div className="lineBlue">
                {/* <p>Parabéns! Você está levando <strong>FRETE GRÁTIS 🎉</strong></p> */}
                <p><strong>Brinde GODFATHER</strong>: 4 filmes para assistir durante a espera da entrega + <strong>Frete Grátis</strong> 🎉</p>
                <div className="line"></div>
              </div>
              <div className="cardProduct">
                <img src="https://cdn.shopify.com/s/files/1/0648/5904/6103/files/arte-1-alif.jpg1_4f59b30b-5e26-4c75-90b0-6449501ddb49_720x720_crop_center.jpg?v=1686282718" alt="Image Product" className="imgProduct" />
                <div className='contentName'>
                  <span className="nameOfProduct">COLEÇÃO MISTERY CORLEONE - Homenagem aos 50 Anos do Poderoso Chefão</span>
                  <div className="contentPrice">
                    <span className="cortPrice">R$ 374.18</span>
                    <span className="price">R$ 187.09</span>
                  </div>
                </div>
              </div>

              <div className="lineBlue" style={{ paddingTop: '0' }}>

                <div className='div-rose'>
                  <img class="imgRose" src="https://cdn.shopify.com/s/files/1/0648/5904/6103/files/jacobandcocom_322252581-removebg-preview.png?v=1686413373" alt="" />
                  <p style={{ textAlign: 'start' }}>
                    Ao adquirir nosso conjunto exclusivo, você receberá como cortesia uma inesquecível experiência cinematográfica: a <strong>trilogia completa do Poderoso Chefão</strong>.
                  </p>
                </div>
                <div className='div-rose'>
                  <img class="imgRose" src="https://cdn.shopify.com/s/files/1/0648/5904/6103/files/jacobandcocom_322252581-removebg-preview.png?v=1686413373" alt="" />
                  <p style={{ textAlign: 'start' }}>
                    Uma oportunidade de reviver esta obra-prima premiada enquanto aguarda a chegada do seu pedido. <strong> Um brinde nosso para você</strong>.
                  </p>
                </div>
              </div>

              <div className="ctn_images_01">
                <div className='movie'>
                  {/* <span>FILME 1</span> */}
                  <img src="https://cdn.shopify.com/s/files/1/0648/5904/6103/files/AddToCardBanner_01.png?v=1686782552" alt="" className="teste" />

                  <video
                    poster="https://cdn.shopify.com/s/files/1/0648/5904/6103/files/321345579_208633631641182_6676063647715558891_n.jpg?v=1686934773"
                    className="video-player"
                    controls="controls"
                    controlls preload="auto"
                    loop playsInline
                  >
                    <source src="https://cdn.shopify.com/videos/c/o/v/38bb5667cd634482997167e0f31466d9.mp4" type="video/mp4" />
                  </video>
                </div>

              </div>
            </ContentModal>
            <FooterModal>
              <Button
                receptStyled={{ background: '#0cb851' }}
                title="FINALIZE SUA COMPRA 👉"
                // definedClick={handleButtonClick} ADICIONAR NO BOTÃO DO MODAL
                definedClick={refClick}
              />
              <span className='parcel-span'>Pagamento seguro em até 3x sem juros</span>
            </FooterModal>
          </DentroModal>
        </CtnModal >
      )}

    </>
  );
};

export default ModalAddToCard;   