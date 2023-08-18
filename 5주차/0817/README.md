## 📝과제 - 리액트 카드 앱 만들기 프로젝트

> 1. 수업 시간에 공부한 리액트 카드 앱 만들기 프로젝트를 실습한다. 깃허브 기준 8일차 소스 참고하시면 됩니다.
> 2. 네트리파이 서비스를 이용해 프로젝트를 배포한다.
> 3. 실습한 내용을 블로그에 정리 및 게시한다. 이때 게시 내용에는 스스로 신경써서 구현한 로직이나 스타일에 대한 정리를 포함해야 합니다(정해진 파트 없음. 스스로 선택해서 정리합니다).

### 주제 선정

이번에 크리스토퍼 놀란 감독의 영화 오펜하이머가 개봉했다. 그가 감독한 영화들을 모아볼 수 있는 카드앱을 만들려고 한다.

### 데이터 가져오기

[한국영화데이터베이스](https://www.kmdb.or.kr/main)에서 제공되는 데이터를 가지고 크리스토퍼 놀란 감독의 작품들을 가져오려고 한다. 오픈 API도 제공을 해서 이를 이용해 개발을 하려고 사용 신청을 했지만 아직 승인이 안나 직접 데이터를 입력하였다. 개봉일을 기준으로 오펜하이머, 테넷, 덩케르크 3개의 영화만 데이터를 넣었다.

```jsx
const contents = [
  {
    path: "/oppenheimer",
    imagePath: "./images/oppenheimer.jpg",
    title: "오펜하이머",
    detail: {
      movieRating: "15세관람가",
      countries: ["영국", "미국"],
      genre: ["드라마", "스릴러"],
      releaseDate: "2023-08-15",
      production: ["ATLAS ENTERTAINMENT", "Syncopy", "universal studios"],
      starring: [
        "킬리언 머피",
        "에밀리 블런트",
        "맷 데이먼",
        "로버트 다우니 주니어",
        "플로렌스 퓨",
        "조쉬 하트넷",
        "케네스 브래너",
        "톰 콘티",
        "데인 드한",
        "제이슨 클라크",
      ],
      summary:
        "“나는 이제 죽음이요, 세상의 파괴자가 되었다.” \n세상을 구하기 위해 세상을 파괴할 지도 모르는 선택을 해야 하는 천재 과학자의 핵개발 프로젝트. (출처 : 다음영화)",
      videoUrl: `<iframe src="https://www.youtube.com/embed/oSqK_v6zPoM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
  },
  {
    path: "/tenet",
    imagePath: "./images/tenet.jpg",
    title: "테넷",
    detail: {
      movieRating: "12세관람가",
      countries: ["영국", "미국"],
      genre: ["액션", "SF"],
      releaseDate: "2020-08-26",
      production: ["워너브러더스"],
      starring: [
        "존 데이비드 워싱턴 ",
        "로버트 패틴슨",
        "케네스 브래너",
        "엘리자베스 데비키",
        "애런 존슨",
        "마이클 케인",
        "클레멘스 포시",
        "히메쉬 파텔",
      ],
      summary:
        "당신에게 줄 건 한 단어 ‘테넷’\n시간을 추격하라!\n시간의 흐름을 뒤집는 인버전을 통해 현재와 미래를 오가며 세상을 파괴하려는 사토르(케네스 브래너)를 막기 위해 투입된 작전의 주도자(존 데이비드 워싱턴). 인버전에 대한 정보를 가진 닐(로버트 패틴슨)과 미술품 감정사이자 사토르에 대한 복수심이 가득한 그의 아내 캣(엘리자베스 데비키)과 협력해 미래의 공격에 맞서 제3차 세계대전을 막아야 한다! (출처 : 보도자료)",
      videoUrl: `<iframe src="https://www.youtube.com/embed/IW_khaePCBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
  },
  {
    path: "/dunkirk",
    imagePath: "./images/dunkirk.jpg",
    title: "덩케르크",
    detail: {
      movieRating: "12세관람가",
      countries: ["네덜란드", "영국", "프랑스", "미국"],
      genre: ["드라마", "전쟁", "역사"],
      releaseDate: "2017-07-20",
      production: [
        "Warner Bros",
        "Dombey Street Productions",
        "Kaap Holland Film",
        "StudioCanal",
        "Syncopy",
      ],
      starring: [
        "핀 화이트헤드",
        "마크 라이런스",
        "톰 하디",
        "해리 스타일스",
        "아뉴린 바나드",
        "톰 글린 카니",
        "잭 로던",
        "베리 케오간",
        "케네스 브래너",
        "킬리언 머피",
        "제임스 다시",
        "다미엔 보나드",
        "리 암스트롱",
      ],
      summary: `"우린 끝까지 싸울 것이다"
      살아남는 것이 승리다!
      해변: 보이지 않는 적에게 포위된 채 어디서 총알이 날아올지 모르는 위기의 일주일
      바다: 군인들의 탈출을 돕기 위해 배를 몰고 덩케르크로 항해하는 하루
      하늘: 적의 전투기를 공격해 추락시키는 임무, 남은 연료로 비행이 가능한 한 시간
      
      “우리는 해변에서 싸울 것이다. 우리는 상륙지에서 싸울 것이다. 우리는 들판에서 싸우고 시가에서도 싸울 것이다. 우리는 끝까지 싸울 것이다” (출처 : KOFIC)`,
      videoUrl: `<iframe src="https://www.youtube.com/embed/XUhRA_ObaDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
  },
];
```

### 프로젝트

강사님이 제공해 주신 8일차 소스를 바탕으로 프로젝트를 생성하였다. 

#### Card.js

title을 눌렀을 시 해당 페이지로 이동이 되지 않아 확인 해보니 `NavLink`로 `ColorBox` 컴포넌트를 감싸 이를 눌렀을 시에만 이동이 되는 것을 확인했다. 그래서 `useNavigate`를 사용해 `Item` 컴포넌트에 `onClick`이벤트를 적용하였다.

```jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Items, Item, ItemText, Menu } from "./styledComp";
import { useSelector } from "react-redux";

const Cards = () => {
  const contents = useSelector((state) => state.contents);
  const navigate = useNavigate();
  return (
    <>
      <Menu>
        <h2>크리스토퍼 놀란 감독 영화 모음</h2>
      </Menu>
      <Items>
        {contents.map((content, idx) => {
          return (
            <Item
              key={idx}
              $imagePath={content.imagePath}
              onClick={() => navigate(content.path)}
            >
              <ItemText>
                <h2>{content.title}</h2>
              </ItemText>
            </Item>
          );
        })}
      </Items>
    </>
  );
};
```

그리고 `ItemText`로 title을 감쌌다. 여기에 `display: none`을 적용해 `Item`에 hover시 나타나도록 스타일을 적용했다. 또 기존에 hover시 위로 올라가는 효과 대신 카드의 크기가 커지도록 수정했다.

```jsx
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

  @media all and (max-width: 800px) {
    width: 46%;
  }
  @media all and (max-width: 500px) {
    width: 98%;
  }
`;
```

#### Error : React does not recognize the `imagePath` prop on a DOM element.

![props error](https://github.com/origin1508/nipa-ict-web/assets/108377283/8a36fbd2-a765-4b7d-948e-725312c383da)

styled-components로 생성한 요소에 `prop`으로 전달한 `imagePath`에서 위와 같은 에러가 발생했다. 말 그대로 해당 `prop`이 DOM 요소의 `prop`으로 인지되지 못하고 의도적으로 `custom attribute`를 나타낸 것이라면 소문자로 작성해야 한다는 의미이다. 하지만 나는 `prop`을 카멜케이스로 작성을 하고 싶었고 해결 방안을  styled-components 공식 문서에서 찾았다.

[transient props](https://styled-components.com/docs/api#transient-props)를 이용하면 이를 해결할 수 있다. `transient props`는 단순히 스타일로 지정된 prop이 기본 React 노드로 전달되어 DOM 요소로 렌더링 되는 것을 방지하게 해준다. 간단하게 `$` 기호를 props 앞에 추가하기만 하면 된다.

```jsx
<Item
	key={idx}
	$imagePath={content.imagePath}
	onClick={() => navigate(content.path)}
>
	<ItemText>
		<h2>{content.title}</h2>
	</ItemText>
</Item>

export const Item = styled.div`
  cursor: pointer;
  width: 21%;
  height: 400px;
  margin: 2%;

  color: #ffffff;
  overflow: hidden;
  background-image: url(${({ $imagePath }) => $imagePath});
```

#### Detail.js

`Detail` 페이지에서 뒷 배경에 포스터를 넣고 싶어 `DetailWrapper`를 만들었다. 배경 이미지는 어둡게 하고 싶어서 `::after`를 이용해 가상 선택자를 만들어서  이용했다. 

전체 크기를 차지하게 너비와 높이를 100%로 설정을 한 후 `background-image` 속성으로 배경 이미지를 넣었다. 그리고 `opacity`를 이용해 투명도를 낮춰 어둡게 만들어 주었다. 이때 자식 요소도 같이 어두워 지지 않게 `position` 속성을 absolute로 변경한 후 `z-index`를 설정해 주었다.

```jsx
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
`
```

Iframe 요소를 이용해 유튜브 예고편 영상을 넣었다. 비율에 맞춰서 크기가 조절될 수 있도록  [How To Create Responsive Iframes (w3schools.com)](https://www.w3schools.com/howto/howto_css_responsive_iframes.asp)를 참조하며 `IframeContainer`와 `IframeBox` 요소를 만들어 스타일을 지정했다. 비율은 16:9을 유지하며 크기가 조절 되게 `padding-bottom` 을 56.25% 로 설정했다.

```jsx
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

```



```jsx
import { useNavigate } from "react-router-dom";
import {
  DetailWrapper,
  DetailContainer,
  DetailHeader,
  MovieTitle,
  MovieSub,
  MovieStar,
  IframeContainer,
  IframeBox,
  BackButton,
} from "./styledComp";

const Detail = ({ content }) => {
  const navigate = useNavigate();
  return (
    <DetailWrapper $imagePath={content.imagePath}>
      <DetailContainer>
        <DetailHeader>
          <MovieTitle>{content.title}</MovieTitle>
          <MovieSub>
            개봉 : {content.detail.releaseDate}
            <br />
            {content.detail.movieRating}|{content.detail.countries.join(", ")}|
            {content.detail.genre.join(", ")}
          </MovieSub>
        </DetailHeader>
        <div>
          <h3>주연</h3>
          <div>
            {content.detail.starring.map((item, idx) => (
              <MovieStar key={idx}>{item}</MovieStar>
            ))}
          </div>
        </div>
        <div>
          <h3>줄거리</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>{content.detail.summary}</p>
        </div>
        <div>
          <h3>예고편</h3>
          <IframeContainer>
            <IframeBox
              dangerouslySetInnerHTML={{ __html: content.detail.videoUrl }}
            ></IframeBox>
          </IframeContainer>
        </div>
        <BackButton onClick={() => navigate(-1)}>{"<<"}BACK</BackButton>
      </DetailContainer>
    </DetailWrapper>
  );
};

export default Detail;

```

### 배포 주소

[card-app-taekyung.netlify.app](https://card-app-taekyung.netlify.app/)
