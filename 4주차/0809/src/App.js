import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0%{
    transform: rotate(0deg)
  }
  100%{
    transform: rotate(-180deg)
  }
`;

const moving = keyframes`
  0% {
    transform: translateX(0) rotate(-10deg)
  }
  100% {
    transform: translateX(-150%) rotate(10deg)
  }
`;

const Minion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5e050;
`;

const Face = styled.div`
  width: 600px;
  height: 600px;
  border: 15px solid black;
  border-bottom: none;
  border-radius: 50% 50% 0 0;
  background-color: inherit;
  position: relative;
  overflow: hidden;
`;

const Hair = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  position: absolute;
  top: -5%;
  left: 50%;
  transform: translateX(-50%);
`;

const Strand = styled.div`
  width: 10px;
  height: 100px;
  background-color: black;
`;

const Eyes = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Band = styled.div`
  position: absolute;
  width: 110%;
  height: 100px;
  background-color: black;
  display: flex;
  top: 55%;
  z-index: 0;
`;

const Glasses = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 260px;
  margin-top: 130px;
  border-radius: 50%;
  background-color: gray;
  z-index: 10;
`;

const Eye = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 240px;
  border: 20px solid black;
  border-radius: 50%;
  background-color: white;
`;

const Mouth = styled.div`
  width: 150px;
  height: 70px;
  margin: 80px;
  border: 10px solid black;
  border-bottom: none;
  border-radius: 75px 75px 0 0;
  position: absolute;
  right: 0;
  transform: rotate(-10deg);
  animation: ${moving} 2.5s ease-in-out alternate infinite;
`;

const Ball = styled.div`
  width: 70px;
  height: 70px;
  background-color: black;
  border-radius: 50%;
`;

const BallBox = styled.div`
  width: 100%;
  animation: ${rotate} 2.5s ease-in-out alternate infinite;
`;

function App() {
  return (
    <Minion>
      <Face>
        <Hair>
          {new Array(10).fill(0).map((_) => (
            <Strand />
          ))}
        </Hair>
        <Eyes>
          <Band />
          <Glasses>
            <Eye>
              <BallBox>
                <Ball />
              </BallBox>
            </Eye>
          </Glasses>
          <Glasses>
            <Eye>
              <BallBox>
                <Ball />
              </BallBox>
            </Eye>
          </Glasses>
        </Eyes>
        <Mouth />
      </Face>
    </Minion>
  );
}

export default App;
