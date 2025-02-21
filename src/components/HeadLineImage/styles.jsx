import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 0 30px;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  gap: 18.2822px;
`;

export const HeaderCarrossel = styled.div`
  font-family: 'omega-regular', sans-serif;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;
  letter-spacing: .24em;
  color: #555;
  
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  width: 91.666662%;
  margin-bottom: 20px;
`

export const Image = styled.img`
  width: 100%;
  padding-left: 4.166666%;
  padding-right: 4.166666%;
  margin-bottom: 12px;
`;

export const ImageBanner = styled.img`
  width: 100%;
  margin-bottom: 12px;
`;

export const VideoContainer = styled.div`
  position: relative;
  background-color: ${({ videoId }) => (videoId ? "#000" : "transparent")};
  padding-bottom: ${({ videoId }) => (videoId ? "56.25%" : "0")};
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const Banner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 3s ease-out;
  opacity: 0.81;
  transform: scale(1.01);
`;

export const PlayButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  svg {
    width: 77px;
    height: 77px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
