## 📝과제 - styled-components + keyframes 눈알이 왔다갔다 애니메이션 만들기 프로젝트

> 1.  수업 시간에 공부한 리액트 styeld-components 애니메이션 프로젝트를 실습한다. (3일차 예제 중 App06.js 참고하세요)
> 2.  네트리파이 서비스를 이용해 배포하는 절차를 실습 및 정리한다.
> 3.  실습한 내용을 블로그에 정리 및 게시한다. (선택사항: 프로젝트를 배포한 링크가 있다면 첨부해주세요^^)

### styled-components

CSS-in-js 방식을 지원하는 패키지 중 styled-components는 사용하기 쉽고 작업을 효율적으로 진행하기에 도 좋아 인지도가 높다.

리액트에서 기본적으로 제공해주는 패키지가 아니므로 npm install을 통해 설치가 필요하다.

```
npm install styled-components
```

기존 리액트에서 객체 리터럴방식으로 CSS를 써왔다면 styled-component는 태그드 템플릿 리터럴 방식으로 사용할 수 있다. styled 함수를 이용해 태그를 선택하고 css 코드를 작성하여 전달하는 컴포넌트를 완성한다.

- 기존 CSS

```jsx
const circle = {
  width: "100px",
  height: "100px",
  backgroundColor: "red",
  borderRadius: "50%",
};

const App = () => {
  return <div style={circle}></div>;
};
```

- styled-components

```jsx
const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 50%;
`;

const App = () => {
  return <Circle />;
};
```

### 움직이는 눈

npx create-react-app my-app 으로 리액트 프로젝트를 생성한뒤 실습에서 했던 내용을 바탕으로 내 마음대로 움직이는 눈을 만들어 보았다.

```jsx
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
```

미니언즈 처럼 꾸미고 싶었는데 생각보다 어려웠다. 섬세하게 모양을 잡는 건 어려워서 느낌만 비슷하게 만들어 보았다. 그래도 미니언즈 느낌이 나오는 것 같아 마음에 든다.
![미니언즈](https://github.com/origin1508/nipa-ict-web/assets/108377283/f719dbaa-174c-45de-8838-b16af8919f1f)

### 배포

강의에서 netlify를 통해 배포를 했다. 마찬가지로 netlify로 배포를 해보았다. 먼저 netlify 홈페이지에서 가입을 한다. 나는 깃허브 계정을 연동하여 가입을 하였다.

https://www.netlify.com/?attr=homepage-modal

그리고 만든 리액트 프로젝트를 빌드를 하여 배포할 준비를 한다. 간단하게 명령어를 통해 할 수 있다.

```
npm run build
```

진행이 완료 되면 build폴더가 만들어 진다.

![image](https://github.com/origin1508/nipa-ict-web/assets/108377283/a6ec12bb-7bea-47e2-be0c-e09baa5f1e3b)

다시 netlify로 돌아와 로그인을 해준 뒤 왼쪽 탭에 Sites를 선택해주고 upload 위치에 build 폴더를 통째로 업로드 한다.

![image](https://github.com/origin1508/nipa-ict-web/assets/108377283/244ba7f8-b96f-4c98-8474-4f502917d901)

업로드가 완료가 되면 Open production deploy 버튼을 눌러 배포된 페이지에 접속이 가능하다.

![image](https://github.com/origin1508/nipa-ict-web/assets/108377283/14464bf6-213f-4abb-8a74-84a33cb6ca34)

### 배포 주소

https://64d45ab78732c821cc3a89ed--luxury-cendol-e0e83f.netlify.app/
