## 📝과제 - 자기소개 페이지 만들기 with 리액트 부트스트랩

> 1. 수업 시간에 공부한 리액트 부트스트랩 자기소개 페이지를 완성합니다.
> 2. (선택사항) 네트리파이 서비스를 이용해 프로젝트를 배포합니다.
> 3. 실습한 내용을 블로그에 정리 및 게시합니다. 이때 자신이 수정한 내용에 대한 정리는 반드시 포함해주세요.
> 4. 또한 부트스트랩, 리액트 부트스트랩에 대한 조사를 하고 그에 대한 정리도 함께 포함해주세요.

### 부트스트랩

[Bootstrap · 세계에서 가장 인기있는 HTML, CSS, JS 라이브러리. (getbootstrap.kr)](https://getbootstrap.kr/)

부트스트랩은 웹 프로젝트 개발을 쉽게 만들 수 있도록 도와주는 HTML, CSS, JS 프레임 워크이다.  HTML, CSS 기반의 템플릿 양식, 버튼, 네비게이션 및 기타 페이지를 구성하는 요소를 제공하여 재사용이 가능해 일관성 있는 개발이 가능하다. 또한 모바일 디자인을 지원해 쉽게 반응형 웹을 만들 수 있다.



### 리액트 부트스트랩

[React Bootstrap | React Bootstrap (react-bootstrap.netlify.app)](https://react-bootstrap.netlify.app/)

리액트 부트스트랩(react-bootstrap)은 react에서 부트스트랩을 사용하도록 개발된 라이브러리이다. bootstrap.js 파일이 필요 없으며 요소들이 컴포넌트로 구성되어 있어 이를 불러와 사용이 가능하다.

#### 설치

npm 패키지를 이용해 react-bootstrap을 설치한다.

```
npm install react-bootstrap bootstrap
```

`App.js`또는 `index.js`에 bootstrap css 파일을 import한다.

```jsx
import 'bootstrap/dist/css/bootstrap.min.css'
```

#### 사용하기

bootstrap을 이용해 버튼을 생성해보자.

```jsx
import Button from 'react-bootstrap/Button';

const App = () => {
  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export default App;
```

![image-20230816094254655](https://github.com/origin1508/nipa-ict-web/assets/108377283/24febe99-e233-4062-bfdc-3fe2832b1da0)

부트스트랩 스타일이 적용된 버튼들을 가져올 수 있었다.

이처럼 [Bootstrap 문서](https://getbootstrap.com/docs/5.3/getting-started/introduction/), [React Bootstrap 문서](https://react-bootstrap.netlify.app/docs/components/accordion)들을 참조하면 부트스트랩에서 제공하는 다양한 요소들을 이용해 웹페이지를 개발할 수 있다.

### 자기소개 웹 만들기

#### Navbar

```jsx
<Navbar
    id="navbar"
    className="border-bottom bg-white"
    expand="lg"
    fixed="top"
>
    <Container>
        <Navbar.Brand href="#">Taekyung</Navbar.Brand>
        <Nav>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
    </Container>
</Navbar>
```

`Navbar`에는 class에 `border-bottom bg-white`를 추가해 바닥 테두리와 배경색을 흰색으로 변경하였고 `Navbar.Brand`를 추가하여 내 이름을 `Navbar`에 넣었다.

#### About

```jsx
<Container fluid id="about" className="py-5 bg-light">
	<Row className="mb-5">
        <Col>
            <h2 className="text-center fs-1">ABOUT ME</h2>
        </Col>
    </Row>
    <Row className="w-75 m-auto">
        <Col className="text-end">
            <Image
            src="./images/avatar.png"
            alt="프로필 사진"
            roundedCircle
            width={250}
            />
        </Col>
        <Col>
            <Container>
                <Row>
                  <h3>PROFILE</h3>
                </Row>
                <div>
                  <Image
                    src="./images/profile.png"
                    className="icon"
                    alt="프로필 아이콘"
                  />
                  <span>윤태경</span>
                </div>
                <div>
                  <Image
                    src="./images/school.png"
                    className="icon"
                    alt="학교 아이콘"
                  />
                  <span>물리학과 전공</span>
                </div>
                <div>
                  <Image
                    src="./images/edu.png"
                    className="icon"
                    alt="교육 아이콘"
                  />
                  <span>국비지원 프론트엔드 부트캠프</span>
                </div>
                <div>
                  <Image
                    src="./images/glass.png"
                    className="icon"
                    alt="정보 아이콘"
                  />
                  <span>포기하지 않고 끝까지 노력</span>
                </div>
            </Container>
        </Col>
    </Row>
</Container>
```

Grid system을 이용해서 프로필 사진과 내 정보를 넣을 공간을 나누었다. [flaticon.com](https://www.flaticon.com/kr/)에서 몇 가지 아이콘을 가져와 추가하였다.

#### Portfolio

```jsx
<Container fluid id="portfolio" className="py-5">
    <Row className="mb-5">
        <Col>
            <h2 className="text-center fs-1">PORTFOLIO</h2>
        </Col>
    </Row>
    <Row>
        <Carousel data-bs-theme="dark" className="w-50 py-5 m-auto">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/project1.jpeg"
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>첫 번째 프로젝트</h3>
                    <span>로또 번호 추첨기</span>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/project2.jpeg"
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>두 번째 프로젝트</h3>
                    <span>
                    움직이는 눈{" "}
                        <a href="https://luxury-cendol-e0e83f.netlify.app">Link</a>
                    </span>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/project3.png"
                alt="Third slide"
                />

                <Carousel.Caption className="text-white">
                    <h3>세 번째 프로젝트</h3>
                    <span>
                    Todo App{" "}
                        <a href="https://todo-biglight.netlify.app">Link</a>
                    </span>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Row>
</Container>
```

`Carousel`이 흰 배경에서는 `prev`, `next` 버튼들과 하단의 네비게이션이 보이질 않아 `data-bs-theme` 을 이용해 Color mode를 `dark`로 변경하였다.

#### Contact

```jsx
<Container
fluid
id="contact"
className="py-5 justify-content-center bg-light"
>
    <Row className="mb-5">
        <Col>
            <h2 className="text-center fs-1">CONTACT</h2>
        </Col>
    </Row>
    <Row className="w-80 justify-content-md-center">
        <Col md="auto">
            <Image src="./images/github.png" className="icon" />
            <a
            className="link-dark link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="https://github.com/origin1508"
            >
            https://github.com/origin1508
            </a>
        </Col>
        <Col md="auto">
            <Image src="./images/email.png" className="icon" />
            <a
            className="link-dark link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="mailto:origin1508@gmail.com"
            >
            origin1508@gmail.com
            </a>
        </Col>
        <Col md="auto">
            <Image src="./images/blog.png" className="icon" />
            <a
            className="link-dark link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover"
            href="https://velog.io/@biglight"
            >
            https://velog.io/@biglight
            </a>
        </Col>
    </Row>
    <Row className="justify-content-center py-5">
    Copyright &copy; Taekyung. All Right Reserved.
    </Row>
</Container>
```

`a`요소의 class에 `link-dark link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover`를 추가하여 링크 스타일을 변경하였다.

* `link-[dark]` : 링크의 색상
* `link-offset-[3]` : 밑줄의 위치
* `link-underline-opacity-[25]` : 밑줄의 투명도
* `link-underline-opacity-[100]-hover` : hover시 밑줄의 투명도

괄호 안에 원하는 값을 넣어 변경이 가능하다.

### 배포 주소

[React App (portfolio-taekyung.netlify.app)](https://portfolio-taekyung.netlify.app/)
