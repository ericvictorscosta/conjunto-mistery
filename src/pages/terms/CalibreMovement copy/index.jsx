import React, { useState, useRef } from "react";
import AutoEnrolamento from "../../assets/icons/AutoEnrolamento";
import Ondas from "../../assets/icons/Ondas";
import Velocimetro from "../../assets/icons/Velocimetro";
import Sound from "../../assets/icons/Sound";
import * as S from "./styles";

const CalibreMovement = ({ 
  title, 
  calibre, 
  model, 
  img, 
  textCurto, 
  textRestante, 
  iconColor, 
  items,
  audioFile,
  frequencia
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const handleReadMore = () => {
    setIsExpanded(true);
  };

  const handleAudioToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      
      <S.Model>
        <span>{calibre}</span>
        <span>{model}</span>
      </S.Model>

      <S.ImagePrincipal src={img} alt="Relógios Omega" />

      <S.Descricao>
        <p>
          {isExpanded ? (textCurto + textRestante) : textCurto}
          {!isExpanded && '...'}
        </p>
        {!isExpanded && (
          <S.Button onClick={handleReadMore}>
            Leia mais
          </S.Button>
        )}
      </S.Descricao>

      <S.Blocos>
        {(items || []).map((item, index) => (
          <li 
            key={index} 
            className={item.className || ""}
          >
            <div>
              {item.icon 
                ? React.createElement(item.icon, { color: iconColor }) 
                : null}
            </div>
            <span>{item.text}</span>
          </li>
        ))}

        <li className="III" onClick={handleAudioToggle}>
          <Ondas color={iconColor} />
          <div className="sound">
            <Sound color={iconColor} />
          </div>
          <span>FREQUÊNCIA {frequencia} HZ</span>
        </li>
      </S.Blocos>


      <audio ref={audioRef} src={audioFile} />
    </S.Container>
  );
};

export { CalibreMovement };
