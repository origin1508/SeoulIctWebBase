## 📝과제 - 리액트 로또 추첨 앱 만들기 프로젝트

> 1.  수업 시간에 공부한 리액트 로또 추첨 앱 프로젝트를 실습한다. (2일차 예제 중 App06.js 참고하세요)
> 2.  이때 CSS 코드는 강사가 지도한 코드를 수정하여 자신만의 스타일을 만들어 본다.
> 3.  실습한 내용을 블로그에 정리 및 게시한다 (선택사항: 로또 추첨 앱 결과물 캡처 후 함께 첨부해주세요^^)

### CRA를 이용해 프로젝트 생성하기

CRA(Create React App)을 이용하면 React 프로젝트를 손쉽게 시작할 수 있다. CRA는 React로 웹 앱 개발에 필요한 기본 환경과 모듈을 구성해주는 개발 도구로 보일러플레이트이다. CRA는 노드(node.js)기반으로 동작한다. 따라서 CRA를 사용하기 위해서는 node.js 설치가 선행되어야 한다. 프로젝트를 생성하기 위해 다음 명령어를 입력한다.

```
npx create-react-app 프로젝트명
```

> 보일러플레이트 : 컴퓨터 프로그래밍에서 보일러플레이트 또는 보일러플레이트 코드는 변경이 거의 없이 여러 곳에서 재사용할 수 있는 코드이다. 기본적인 템플릿을 만들어 주는 개발도구로 생각하면 될 것 같다.

> npx : npx를 이용하면 로컬에 설치없이 최신 버전의 패키지를 가져와 실행한다. 매번 최신 버전을 가져오기 때문에 버전에 대해 신경쓸 필요가 없다.

my-app 이라는 이름으로 프로젝트를 생성하였다.

```
npx create-react-app my-app
```

my-app 폴더가 생성되며 폴더 내에 초기 디렉터리 구조가 생성되며 필요한 모듈들을 받아온다.
![image](https://github.com/origin1508/nipa-ict-web/assets/108377283/d444c3ff-240f-4ccd-bf6b-24337666ceff)

### App.js

react가 실행될 때 최로로 index.js를 불러온다. index.js는 가장 먼저 되는 진입점의 역할을 한다. index.js 파일에 \<App /> 태그에 의해 App.js에 작성된 컴포넌트가 렌더링된다. App.js 파일을 수정하는 것이 CRA 프로젝트의 기본적인 수정 방법이다.

로또 추첨 앱을 만들기 위해 App.js를 수정해보았다.

```jsx
import { useState } from "react";
import "./App.css";

// 숫자별 공 색상을 달리하기 위한 색상 코드
const ballColors = ["fbc400", "69c8f2", "ff7272", "aaaaaa", "b0d840"];

// 로또 번호 컴포넌트
const LottoNumbers = () => {
  // 추첨된 번호를 저장하기 위한 state
  const [lottoNumbers, setLottoNumbers] = useState([]);

  // 추첨 버튼을 눌렀을 때 이벤트 핸들러
  const handleRaffleClick = () => {
    // 번호를 담을 임시 배열
    const temp = [];
    while (temp.length < 6) {
      // 1~45까지의 랜덤 숫자
      const ran = Math.floor(Math.random() * 45) + 1;

      // 같은 번호가 존재하지 않은 다면 temp배열에 추가
      if (temp.indexOf(ran) === -1) temp.push(ran);
    }
    // 숫자를 오름차순으로 정렬
    temp.sort((a, b) => a - b);
    // setLottoNumbers를 이용해 lottoNumbers state를 변경
    setLottoNumbers(temp);
  };
  return (
    <div className="numbers">
      {/*lottoNumbers가 존재할 경우 숫자들을 요소에 넣어 추가 없다면 추첨 버튼을 추가*/}
      {lottoNumbers.length ? (
        <>
          <div className="button-backdrop">
            {/*추첨을 다시할 버튼*/}
            <button
              type="button"
              className="retry"
              onClick={() => setLottoNumbers([])}
            >
              다시
            </button>
          </div>
          {/* map 메소드를 이용해 각각 숫자들을 div 요소 컨텐츠에 넣어 반환*/}
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
```

### App.css

강사님이 제공해준 css파일을 토대로 버튼 색 수정과 공 색상 변경, 가상 선택자 hover를 이용 등 간단하게 수정을 하였고 추후 더 꾸며볼 예정이다.

### 결과물

![image](https://github.com/origin1508/nipa-ict-web/assets/108377283/ddfb3d2d-f66e-4257-8c95-349a3a21839c)
