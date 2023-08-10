import { useState } from "react";
import "./App.css";

const ballColors = ["fbc400", "69c8f2", "ff7272", "aaaaaa", "b0d840"];

const LottoNumbers = () => {
  const [lottoNumbers, setLottoNumbers] = useState([]);

  const handleRaffleClick = () => {
    const temp = [];
    while (temp.length < 6) {
      const ran = Math.floor(Math.random() * 45) + 1;

      if (temp.indexOf(ran) === -1) temp.push(ran);
    }
    temp.sort((a, b) => a - b);
    setLottoNumbers(temp);
  };
  return (
    <div className="numbers">
      {lottoNumbers.length ? (
        <>
          <div className="button-backdrop">
            <button
              type="button"
              className="retry"
              onClick={() => setLottoNumbers([])}
            >
              다시
            </button>
          </div>
          {lottoNumbers.map((num, idx) => {
            const color = ballColors[parseInt((num - 1) / 10)];
            return (
              <div
                key={idx}
                className="eachnum"
                style={{ backgroundColor: `#${color}` }}
              >
                {num}
              </div>
            );
          })}
        </>
      ) : (
        <button onClick={handleRaffleClick}>추첨</button>
      )}
    </div>
  );
};

function App() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  const today = `${year}년 ${month}월 ${date}일`;
  return (
    <div className="container">
      <div className="lotto">
        <h3>
          <span>{today}</span> 로또번호 생성기
        </h3>
        <LottoNumbers />
        <LottoNumbers />
        <LottoNumbers />
        <LottoNumbers />
        <LottoNumbers />
      </div>
    </div>
  );
}

export default App;
