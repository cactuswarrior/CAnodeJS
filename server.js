const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

var db
MongoClient.connect('mongodb+srv://sooseungCHUN:lR79Czkt5JXw6pA0@cluster0.svcqw.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
    
    if (에러) return console.log('에러', 에러)
    
    // 데이터 저장 시 db 불러오고
    db = client.db('todoapp')
    // db에 어떤 파일에 넣을지 (여기선 오브젝트 타입으로) _id를 붙여야 됨 
    db.collection('post').insertOne({이름: 'Tolya', _id: 100, 나이: 31}, function(에러, 결과){
        console.log('저장완료')
    })

    app.listen(8080, function() {
      console.log('listening on 8080')    
    }) 
})

app.use(express.urlencoded({extended: true})) 

// app.listen(8080, function() {
//   console.log('listening on 8080')    
// })

app.get('/pet', function(요청, 응답){
  응답.send('펫용품 사시오')
})


app.get('/beauty', function(요청, 응답){
  응답.send('뷰티용품 사시오')
}) 

// ES6 화살표 함수
app.get('/', (요청, 응답) => {
  응답.sendFile(__dirname + '/index.html')
}) 

app.get('/write', function(요청, 응답){
  응답.sendFile(__dirname + '/write.html')
}) 

 // 어떤 사람이 /add 경로로 post 요청을 하면 어떤 코드를 실행해주세요

 app.post('/add', function(요청, 응답){
  db = client.db('todoapp')
    // db에 어떤 파일에 넣을지 (여기선 오브젝트 타입으로) _id를 붙여야 됨 
    db.collection('post').insertOne({이름: 'Tolya', _id: 100, 나이: 31}, function(에러, 결과){
        console.log('저장완료')
    })
  응답.send('전송완료')
  console.log(요청.body.title)
 })

 
