import React, { useRef, useState } from 'react';
import ModalImage from 'react-modal-image'
import * as S from './styles'



function Advertorial ({ content }) {
  return (
    <S.Wrapper>
      <S.Title>{content}</S.Title>
      <S.CtnSwiper>    
      
      <S.CtnImage01>
        <S.ImageAdvertorial className='gallery'>
          <ModalImage  
            small="https://querovitalidade.com/nutridantas/assets/1/images/genoxidilinstitucionalcarrossel1.jpg"
            large="https://querovitalidade.com/nutridantas/assets/1/images/genoxidilinstitucionalcarrossel1.jpg"
            alt="Image O Globo"
            hideDownload
          />
        </S.ImageAdvertorial>
        
        <S.ImageAdvertorial className='gallery'>
          <ModalImage  
            small="https://querovitalidade.com/nutridantas/assets/1/images/genoxidilinstitucionalcarrossel2.jpg"
            large="https://querovitalidade.com/nutridantas/assets/1/images/genoxidilinstitucionalcarrossel2.jpg"
            alt="Reportagem sobre o Genoxidil"
            hideDownload
          />
        </S.ImageAdvertorial>
      
      </S.CtnImage01>
      
      <S.CtnImage02>
      <S.ImageAdvertorial className='gallery'>
        <ModalImage  
          small="https://querovitalidade.com/nutridantas/assets/1/images/genoxidilinstitucionalcarrossel3.jpg"
          large="https://querovitalidade.com/nutridantas/assets/1/images/genoxidilinstitucionalcarrossel3.jpg"
          alt="Reportagem sobre o Genoxidil"
          hideDownload
        />
      </S.ImageAdvertorial>
      </S.CtnImage02>
      </S.CtnSwiper>

      <S.Subtitle>Clique na imagem para abri-lá</S.Subtitle>

    </S.Wrapper>
  )
}

export { Advertorial };
