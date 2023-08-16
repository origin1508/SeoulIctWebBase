import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Image,
  Carousel,
} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
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
      <Container fluid id="main" className="px-0">
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
      </Container>
    </>
  );
}

export default App;
