/*
    npm init
    npm i express

    package.json 에서 scripts에 "start" : "node index.js" 를 작성하면 npm start 로 실행할수있다.

    npm run-script build : 리액트 어플리케이션 빌드를 실행시킬수있다. 만든 자바스크립트들이 압축되어서 import된다.

    npm i path --save
    npm i nodemon --save  : 코드가 고쳐질때마다 서버를 재실행하지 않아도 되는. package.json에서 "start" : "nodemon index.js" 로 수정.
*/
const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

/*
    "/" : URL
    req : 클라이언트 쪽에서 서버로 보내는 요청
    req : 서버에서 클라이언트로 보내는 응답
    sendFile : 경로를 입력하면 파일을 보내줄 수 있다.
    __dirname : 현재경로
*/
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

