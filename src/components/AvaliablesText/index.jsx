import React, { useState } from "react"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/thumbs"

import * as S from './styles'
import { Wrapper } from "../../styles/global"
import { MdVerified } from "react-icons/md"

import { BsStarFill, BsStarHalf } from "react-icons/bs"

const AvaliablesText = ({
  acessDb
}) => {

  const [indice, setIndice] = useState(5);

  const mostrarMais = () => {
    setIndice(indice + 5);
  };

  const resetarProvasSociais = () => {
    setIndice(5);
  };

  const provasSociais = acessDb.slice(0, indice);

  return (
    <Wrapper>
      <h1 style={{ fontSize: "20px", margin: "20px 0" }}>
        Experiência dos Nossos Clientes
      </h1>
      {provasSociais.map((i, index) => (
        <S.ContainerAvaliable key={index}>
          <div className="campText">
            <span className="ctnName">
              <h4 className="name">{i.name}</h4>
              <MdVerified fill="#f2c924" />
            </span>

            <div className="stars" style={{ display: 'none' }}>
              <ul>
                <li>
                  <BsStarFill style={{ width: '14px' }} color="#f2c924" />
                </li>
                <li>
                  <BsStarFill style={{ width: '14px' }} color="#f2c924" />
                </li>
                <li>
                  <BsStarFill style={{ width: '14px' }} color="#f2c924" />
                </li>
                <li>
                  <BsStarFill style={{ width: '14px' }} color="#f2c924" />
                </li>
                <li>
                  {i.starsIcon === "1" ? (
                    <BsStarFill style={{ width: '14px' }} color="#f2c924" />
                  ) : (
                    <BsStarHalf style={{ width: '14px' }} color="#f2c924" />
                  )}
                </li>
              </ul>
            </div>

            <h5 className="description">{i.description}</h5>
          </div>
        </S.ContainerAvaliable>
      ))}

      <S.ContainerButton>
        {provasSociais.length < acessDb.length ? (
          indice === acessDb.length ? (
            <S.ResetButton onClick={resetarProvasSociais}>
              Mostrar menos
            </S.ResetButton>
          ) : (
            <>
              <S.ShowMoreButton onClick={mostrarMais}>
                Mostrar Mais
              </S.ShowMoreButton>
              {indice > 5 && (
                <S.ResetButton onClick={resetarProvasSociais}>
                  Mostrar menos
                </S.ResetButton>
              )}
            </>
          )
        ) : (
          <S.ResetButton onClick={resetarProvasSociais}>
            Mostrar menos
          </S.ResetButton>
        )}
      </S.ContainerButton>
    </Wrapper>
  )
}

export { AvaliablesText }
