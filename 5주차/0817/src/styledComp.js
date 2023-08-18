import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 0.4;
}
`;

const fadeInUp = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const Menu = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100px;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;

  @media all and (max-width: 1500px) {
    width: 80%;
  }
  @media all and (max-width: 1000px) {
    width: 100%;
  }
`;

export const ItemText = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Item = styled.div`
  cursor: pointer;
  width: 21%;
  height: 400px;
  margin: 2%;

  color: #ffffff;
  overflow: hidden;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    ${ItemText} {
      display: flex;
    }
  }

  animation: ${fadeInUp} 1s;

  @media all and (max-width: 800px) {
    width: 46%;
  }
  @media all and (max-width: 500px) {
    width: 98%;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  color: white;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${({ $imagepath }) => $imagepath});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
    animation: ${fadeIn} 0.2s ease-in;
  }
`;

export const DetailContainer = styled.div`
  width: 900px;
  margin: auto;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.8);
  position: relative;
`;

export const DetailHeader = styled.div`
  margin-bottom: 16px;
`;

export const DetailSection = styled.section`
  margin-bottom: 16px;
`;

export const MovieTitle = styled.h2`
  margin: 0;
  font-size: 48px;
`;

export const MovieSub = styled.span`
  color: rgb(200, 200, 200);
`;

export const MovieStar = styled.span`
  display: inline-block;
  height: 24px;
  margin: 2px;
  padding: 0 8px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const BackButton = styled.button`
  padding: 8px;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  background-color: white;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

export const IframeContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const IframeBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;

  & iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
