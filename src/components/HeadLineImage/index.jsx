import React, { useState } from "react";
import * as S from "./styles";
import PlayYT from '../../assets/icons/PlayYT.jsx';

const HeadLineImage = ({ Image, videoId, bannerImage, directionColumn, gap, imageNone, headerText, padTitle, padContainer }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (<>

    {headerText && (
      <S.HeaderCarrossel style={{ paddingTop: padTitle }}>
        {headerText}
      </S.HeaderCarrossel>
    )}

    <S.Container style={{ flexDirection: directionColumn, gap: gap, paddingTop: padContainer }}>
      {Image && (<S.Image src={Image} alt="Omega Image" style={{ display: imageNone }} />)}

      <S.VideoContainer videoId={videoId}>
        {videoId ? (
          isPlaying ? (
            <S.StyledIframe
              src={videoId}
              allow="autoplay; encrypted-media;"
              allowFullScreen
            />
          ) : (
            <S.Banner image={bannerImage} onClick={handlePlayClick}>
              <S.PlayButton><PlayYT /></S.PlayButton>
            </S.Banner>
          )
        ) : (
          bannerImage && <S.ImageBanner src={bannerImage} alt="Static Banner Image" />
        )}
      </S.VideoContainer>
    </S.Container>
  </>
  );
};

export { HeadLineImage };
