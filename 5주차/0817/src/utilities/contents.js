import { createStore } from "redux";

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

function reducer(state, action) {
  return { contents };
}

export const store = createStore(reducer);
