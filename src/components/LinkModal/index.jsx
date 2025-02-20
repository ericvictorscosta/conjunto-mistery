import React, { useState } from 'react';
import { Container, ContentModal, CtnModal, DentroModal, ForaModal, HeaderModal } from './styles';

const LinkModal = () => {
  const [modalOpenTrack, setModalOpenTrack] = useState(false);
  const [modalOpenPrioridade, setmodalOpenPrioridade] = useState(false);
  const [modalOpenSuporte, setmodalOpenSuporte] = useState(false);

  const handleModalOpenTrack = () => {
    setModalOpenTrack(true);
    document.body.classList.add('modal-open');
  };

  const handleModalCloseTrack = () => {
    setModalOpenTrack(false);
    document.body.classList.remove('modal-open');
  };

  const handleModalOpenPrioridade = () => {
    setmodalOpenPrioridade(true);
    document.body.classList.add('modal-open');
  };

  const handleModalClosePrioridade = () => {
    setmodalOpenPrioridade(false);
    document.body.classList.remove('modal-open');
  };

  const handleModalOpenSuporte = () => {
    setmodalOpenSuporte(true);
    document.body.classList.add('modal-open');
  };

  const handleModalCloseSuporte = () => {
    setmodalOpenSuporte(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <Container>
      <div className="ctn_track">
        <svg fill="none" focusable="false" width="26" height="24" class="icon icon--picto-delivery-truck   product-tabs__trust-icon">
          <path d="M17 17H8.68004C8.68004 17 8 16 7 16M17 17V8M17 17H19.32M17 8V3H1V17H5.31996M17 8H23.5L25 12.5V17H22.68C22.68 17 22 16 21 16M21 16C22 16 23 17 23 18C23 19 22 20 21 20C20 20 19 19 19 18C19 17.6527 19.1206 17.3054 19.32 17M21 16C20.3473 16 19.6946 16.426 19.32 17M7 16C8 16 9 17 9 18C9 19 8 20 7 20C6 20 5 19 5 18C5 17.6527 5.12061 17.3054 5.31996 17M7 16C6.3473 16 5.69459 16.426 5.31996 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span onClick={handleModalOpenTrack}>Rastreio</span>
      </div>

      <div className="ctn_track">
        <svg fill="none" focusable="false" width="24" height="24" class="icon icon--picto-credit-card   product-tabs__trust-icon" viewBox="0 0 24 24">
          <path d="M23 8V4H1V8M23 8V20H1V8M23 8H1M5 12H8M19 12V16H12V12H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span onClick={handleModalOpenPrioridade}>Prioridade</span>
      </div>

      <div className="ctn_track">
        <svg fill="none" focusable="false" width="24" height="24" class="icon icon--picto-customer-support   product-tabs__trust-icon" viewBox="0 0 24 24">
          <path d="M4.00571 10C4.00571 10 3.50018 2 12 2C20.4997 2 19.9943 10 19.9943 10M4.00571 10C3.33714 10.3333 2 11 2 12.5C2 14 3 15 4.00571 15C4.81028 15 5.67048 15 6 15V10H4.00571ZM19.9943 10C20.6629 10.1667 22 10.9 22 12.5C22 14.1 20.6629 14.8333 19.9943 15M19.9943 10H18V15H19.9943M19.9943 15C20.1629 16.5 19.6 19.5 16 19.5M16 19.5C16 19 15.8 18 15 18C14.2 18 13 18 12.5 18C12 18 10.8 18 10 18C9.2 18 9 19 9 19.5C9 20 9.2 21 10 21C10.8 21 12 21 12.5 21H15C15.8125 21 16 20 16 19.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span onClick={handleModalOpenSuporte}>Suporte Profissional</span>
      </div>

      {modalOpenTrack && (
        <CtnModal className="modal">
          <ForaModal onClick={handleModalCloseTrack}>

          </ForaModal>
          <DentroModal className="modal-content">
            <HeaderModal>
              <div className="title-modal">
                <svg fill="none" focusable="false" width="26" height="24" class="icon icon--picto-delivery-truck   product-tabs__trust-icon">
                  <path d="M17 17H8.68004C8.68004 17 8 16 7 16M17 17V8M17 17H19.32M17 8V3H1V17H5.31996M17 8H23.5L25 12.5V17H22.68C22.68 17 22 16 21 16M21 16C22 16 23 17 23 18C23 19 22 20 21 20C20 20 19 19 19 18C19 17.6527 19.1206 17.3054 19.32 17M21 16C20.3473 16 19.6946 16.426 19.32 17M7 16C8 16 9 17 9 18C9 19 8 20 7 20C6 20 5 19 5 18C5 17.6527 5.12061 17.3054 5.31996 17M7 16C6.3473 16 5.69459 16.426 5.31996 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span onClick={handleModalCloseTrack}>Rastreio</span>
              </div>
              <span className='close-modal' onClick={handleModalCloseTrack}>
                <svg focusable="false" width="14" height="14" class="icon icon--close   " viewBox="0 0 14 14">
                  <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
                </svg>
              </span>
            </HeaderModal>
            <ContentModal>
              <p>Você receberá automaticamente um código de rastreio para acompanhar todo o status do seu pedido. </p>
            </ContentModal>
          </DentroModal>
        </CtnModal>
      )}

      {modalOpenPrioridade && (
        <CtnModal className="modal">
          <ForaModal onClick={handleModalClosePrioridade}>

          </ForaModal>
          <DentroModal className="modal-content">
            <HeaderModal>
              <div className="title-modal">
                <svg fill="none" focusable="false" width="24" height="24" class="icon icon--picto-credit-card   product-tabs__trust-icon" viewBox="0 0 24 24">
                  <path d="M23 8V4H1V8M23 8V20H1V8M23 8H1M5 12H8M19 12V16H12V12H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span onClick={handleModalClosePrioridade}>Prioridade</span>
              </div>
              <span className='close-modal' onClick={handleModalClosePrioridade}>
                <svg focusable="false" width="14" height="14" class="icon icon--close   " viewBox="0 0 14 14">
                  <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
                </svg>
              </span>
            </HeaderModal>
            <ContentModal>
              <p>Pedidos realizados no cartão de crédito e pix são processados e enviados mais rapidamente.</p>
            </ContentModal>
          </DentroModal>
        </CtnModal>
      )}

      {modalOpenSuporte && (
        <CtnModal className="modal">
          <ForaModal onClick={handleModalCloseSuporte}>

          </ForaModal>
          <DentroModal className="modal-content">
            <HeaderModal>
              <div className="title-modal">
                <svg fill="none" focusable="false" width="24" height="24" class="icon icon--picto-customer-support   product-tabs__trust-icon" viewBox="0 0 24 24">
                  <path d="M4.00571 10C4.00571 10 3.50018 2 12 2C20.4997 2 19.9943 10 19.9943 10M4.00571 10C3.33714 10.3333 2 11 2 12.5C2 14 3 15 4.00571 15C4.81028 15 5.67048 15 6 15V10H4.00571ZM19.9943 10C20.6629 10.1667 22 10.9 22 12.5C22 14.1 20.6629 14.8333 19.9943 15M19.9943 10H18V15H19.9943M19.9943 15C20.1629 16.5 19.6 19.5 16 19.5M16 19.5C16 19 15.8 18 15 18C14.2 18 13 18 12.5 18C12 18 10.8 18 10 18C9.2 18 9 19 9 19.5C9 20 9.2 21 10 21C10.8 21 12 21 12.5 21H15C15.8125 21 16 20 16 19.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span onClick={handleModalCloseSuporte}>Suporte Profissional</span>
              </div>
              <span className='close-modal' onClick={handleModalCloseSuporte}>
                <svg focusable="false" width="14" height="14" class="icon icon--close   " viewBox="0 0 14 14">
                  <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
                </svg>
              </span>
            </HeaderModal>
            <ContentModal>
              <p>Contamos com uma equipe de suporte especializada, pronta para resolver todos os seus problemas e tirar suas dúvidas.</p>
            </ContentModal>
          </DentroModal>
        </CtnModal>
      )}
    </Container>
  );
};

export default LinkModal;   