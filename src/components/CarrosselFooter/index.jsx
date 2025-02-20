import React, { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/thumbs"
import { Link } from "react-router-dom"
import { FrameDefault } from "../../pages/z-conjunto-mistery-neymar-jr/db"

import {
  CarrosselContainer,
  SwiperContainer,
  TitleProduct,
  PriceComponent,
  EmAte,
  ContainerSlide,
} from "./styles"

const CarouselFooter = ({ imageFooter, idProduto }) => {
  const acessDb = FrameDefault.CarouselSecundario

  return (
    <>
      <CarrosselContainer>
        <SwiperContainer>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loopedSlides={1}
            spaceBetween={0}
            navigation={false}
            pagination={true}
            loop={true}
          // onNavigationShow={true}
          >
            {Object.entries(acessDb).map((i) => {
              if (idProduto == i[1].id) {
                return null
              }

              return (
                <SwiperSlide key={i[1].id}>
                  <ContainerSlide>
                    <div
                      style={{
                        position: "relative",
                        width: "90%",
                        margin: "auto",
                        width: "30px",
                        height: "30px",
                        verticalAlign: "middle",
                      }}

                      dangerouslySetInnerHTML={{ __html: i[1].image }}
                    >
                    </div>
                    <TitleProduct>{i[1].nome}</TitleProduct>
                    <PriceComponent>
                      <span className="description">{i[1].descricao}</span>
                    </PriceComponent>
                  </ContainerSlide>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </SwiperContainer>
      </CarrosselContainer>
    </>
  )
}

export { CarouselFooter }
