const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname, "test.html"))

const app = express();
const PORT = 3000;

// mysql 3306

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "a1",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// conn.connect((err) => {
//     if (err) {
//         console.error('디비 연결실패');
//         return;
//     }
//     console.log('디비 연결 성공');
// });


// 미들웨어 설정: HTTP 요청의 본문(body)에 있는 JSON 데이터를 파싱하기 위함
app.use(express.json());

// 임시 데이터베이스 (메모리 배열)
let users = [
    { id: 1, name: '홍길동', email: 'hong@example.com' },
    { id: 2, name: '이순신', email: 'lee@example.com' }
];

// req 안에는 요청 데이터가 들어온다.
// res 응답하는 데이터가 들어간다.
// res.send() -> 문자열 보내기
// res.json() -> json 변수안에 값보내기

app.get("/", (req, res) => {
    res.send("main페이지");
});


// res.send() -> 브라우저 글자 전송
// res.jsom() -> 자바스크립트 객체 전송

app.get("/test", (req, res) => {
    res.sendFile(path.join(__dirname, "test.html"))
});

app.get("/users", async(req, res) => {
    // console.log(req.ip + "누가 백엔드로 요청함");
    // res.json({msg: "성공"});

    try{
        const [rows] = await pool.query('select * from users');
        res.json(rows);
    }catch(e){
        console.log(e)
        res.json({'msg' : '에러발생' + e});
    }
});

app.post("/adduser", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.send("^하하^");
})



app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중
입니다.
`);
});