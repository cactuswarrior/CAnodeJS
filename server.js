const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 
var mongoPassword = process.env.mongoPassword;

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://sooseungCHUN:lR79Czkt5JXw6pA0@cluster0.svcqw.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
  if(에러) return console.log(에러)
  app.listen(8080, function(){
    // 서버를 띄울 포트 번호, 띄운 후  실행할 코드
    // 8080으로 들어오면 이걸 띄워줘
     console.log('listening on 8080')

}) })




// ~~ 경로로 들어오면 이런 화면을 보여주고 ## 경로로 들어오면 저런 화면을 보여주세요

// app.get('경로', function(요청, 응답){
// 	응답.send('반갑습니다')
// })

app.get('/pet', function(요청, 응답){
	응답.send('펫 용품 쇼핑할 수 있는 페이지입니다.')
})

app.get('/beauty', function(요청, 응답){
	응답.send('뷰티 용품 쇼핑할 수 있는 y페이지입니다.')
})

app.get('/', function(요청, 응답){
	응답.sendFile(__dirname + '/index.html') // sendFile(보낼 경로)
})

app.get('/write', function(요청, 응답){
	응답.sendFile(__dirname + '/write.html') // sendFile(보낼 경로)
})

// 어떤 사람이 /add 경로로 POST 요청을 하면 뭘 해주세요

app.post('/add', (요청, 응답) => {
  응답.send('전송완료')
  console.log(요청.body)
})