const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
app.set('vuew engine', 'ejs')


var db
MongoClient.connect('mongodb+srv://sooseungCHUN:lR79Czkt5JXw6pA0@cluster0.svcqw.mongodb.net/?retryWrites=true&w=majority', function(에러, client){
    
    if (에러) return console.log('에러', 에러)
    
    // 데이터 저장 시 db 불러오고
    db = client.db('todoapp')
    // db에 어떤 파일에 넣을지 (여기선 오브젝트 타입으로) _id를 붙여야 됨 
    // db.collection('post').insertOne({이름: 'Tolya', _id: 100, 나이: 31}, function(에러, 결과){
    //     console.log('저장완료')
    // })

    app.listen(8081, function() {
      console.log('listening on 8080')    
    }) 
})

app.use(express.urlencoded({extended: true})) 

app.listen(8080, function() {
  console.log('listening on 8080')    
})

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
  console.log(요청.body) 
  client = MongoClient
  // db = client.db('todoapp')
    // db에 어떤 파일에 넣을지 (여기선 오브젝트 타입으로) _id를 붙여야 됨 
    db.collection('post').insertOne({제목: 요청.body.title , _id: 4, 날짜: 요청.body.date }, function(에러, 결과){
        console.log('저장완료')
    })
  응답.send('전송완료')
  console.log(요청.body.title)
 })

 // list로 get 요청으로 접속하면 
 // 실제 DB에 저장된 데이터들로 예쁘게 꾸며진 HTML을 보여줌

app.get('/list', function(요청, 응답){
    // 디비에 저장된 post라는 collection 안에 모든(혹은 아이디가 1인 등등)데이터 꺼내기
  db.collection('post').find().toArray(function(에러, 결과){
    console.log(결과)// 찾은 결과를 ejs에 집어넣어주세요
    응답.render('list.ejs', {posts: 결과})

  })
  
  
})
 
