/*
    npm init
    npm i express

    package.json 에서 scripts에 "start" : "node index.js" 를 작성하면 npm start 로 실행할수있다.

    npm run-script build : 리액트 어플리케이션 빌드를 실행시킬수있다. 만든 자바스크립트들이 압축되어서 import된다.

    npm i path --save
    npm i nodemon --save  : 코드가 고쳐질때마다 서버를 재실행하지 않아도 되는. package.json에서 "start" : "nodemon index.js" 로 수정.

    MongoDB : mongodb+srv://asherpark:gusals8665@cluster0.ixgntvl.mongodb.net/?retryWrites=true&w=majority
    npm i mongoose --save

    서로다른 port들 끼리 통신을 하려면 cors이슈가 발생한다

    클라이언트에서 서버단으로 데이터를 보내려면 axios를 사용

    클라이언트에서 서버로 보내는 데이터를 읽기위해서 body-parser 필요
    내장모듈로 바뀌어서 설치할 필요는 없다.

*/
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/*
    model
*/
const { Post } = require('./Model/Post.js')

app.listen(port, () => {
    mongoose.connect('mongodb+srv://asherpark:test123@cluster0.ixgntvl.mongodb.net/Community?retryWrites=true&w=majority').then(() => {

        // 연결 성공했을때
        console.log(`Example app listening at http://localhost:${port}`);
        console.log("Connecting MongoDB...");

    }).catch((err) => {

        // 실패 했을때
        console.log(`${err}`);

    });

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


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

/*
app.post("/api/test", (req, res) => {

    console.log(req.body)

    res.status(200).json({ success: true, text: "안녕하세요" });
})
*?


/*

    1. POST MongoDB Model
    2. Client Css (Bootstrap, Emotion)

*/
app.post("/api/test", (req, res) => {

    const CommunityPost = new Post({ title: "Test", content: "테스트입니다." })

    CommunityPost.save().then(() => {
        res.status(200).json({ success: true, text: "안녕하세요" });
    })
})