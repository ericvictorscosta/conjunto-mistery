import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper"
import "swiper/css"
import "swiper/css/bundle"
import "swiper/css/thumbs"
import {
  CarrosselContainer,
  ImageMain,
  ThumbsContainer,
  ImageThumbs,
  VideoMain,
  VideoThumbs,
} from "./styles"
import ReactVideoPlayer from "../ReactVideoPlayer"

function CarrosselMain({ acessDb }) {
  const [activeThumb, setActiveThumb] = useState()

  return (
    <>
      <CarrosselContainer>
        <Swiper
          modules={[Navigation, Thumbs]}
          slidesPerView={1}
          navigation={true}
          thumbs={{ swiper: activeThumb }}
          loop={true}
        >
          {Object.entries(acessDb).map((i) => (
            <SwiperSlide key={i[1].alt}>
              {i[1].type === 'image' ?
                <ImageMain src={i[1].source} alt={i[1].alt} />
                :
                <ReactVideoPlayer posterThumb={i[1].thumbVideo} videoLink={i[1].source} />
                // <VideoMain controls src={i[1].source} alt={i[1].alt} />
              }
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setActiveThumb}
          watchSlidesProgress
          modules={[Navigation, Thumbs]}
          slidesPerView={4}
          spaceBetween={30}
          loop="true"
        >
          <ThumbsContainer>
            {Object.entries(acessDb).map((i) => (
              <SwiperSlide key={i[1].alt}>
                {i[1].type === 'image' ?
                  <ImageThumbs src={i[1].source} alt={i[1].alt} />
                  :
                  <VideoThumbs src={i[1].thumbVideo} alt={i[1].alt} />
                }
              </SwiperSlide>
            ))}
          </ThumbsContainer>
        </Swiper>
      </CarrosselContainer>
    </>
  )
}

export default CarrosselMain