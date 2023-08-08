## 📝과제 - node.js 활용해 디지털 시계 만들기 실습

> 1. 수업 시간에 공부한 node.js 활용 디지털 시계 만들기 프로젝트를 실습한다. (addHTML.js & clock.html)
> 2. CSS 코드는 강사가 지도한 코드를 수정하여 자신만의 스타일로 탈바꿈한다.
> 3. 실습한 내용을 블로그에 정리 및 게시한다. (선택사항: 디지털 시계 결과물 캡처 후 함께 첨부해주세요^^)

### HTTP모듈

node.js에는 HTTP라는 내장 모듈이 있다. HTTP 서버 및 클라이언트를 사용하려면 HTTP 모듈을 사용해야한다. 서버를 구동하기 위해 먼저 HTTP모듈을 불러온다.

```js
const http = require("http");
```

불러온 http모듈을 가지고 웹 서버 객체를 생성한다. 이 때 createServer메소드를 이용한다. 그리고 생성한 server 객체에서 listen 메소드를 호출해 포트를 할당하면 서버를 실행해 대기중인 상태로 만들어준다.

```js
const server = http.createServer();

server.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000");
});
```

서버를 실행 후 http://127.0.0.1:3000에 접속했을 때 응답을 받으려면 response객체를 이용해야한다. createServer 메소드에 콜백함수로 req 와 res를 인자로 받아서 response객체를 사용한다. 이때 html파일을 보내주기 위해 fs모듈을 사용해 html파일을 읽어 보내줄 수 있다.

```js
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function (req, res) {
  fs.readFile("./public/clock.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

### clock

기존에 강사님이 제공해준 clock.html에서 달력을 추가하고 스타일을 바꿔보았다.

- before
  ![before](https://github.com/origin1508/nipa-ict-web/assets/108377283/599db9f6-39ef-46e4-baed-30cb779db193)

- after
  ![after](https://github.com/origin1508/nipa-ict-web/assets/108377283/15369691-f52a-4752-844c-7c457b00bfde)
