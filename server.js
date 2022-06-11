const express = require('express');
const app = express();

app.listen(8080, function(){
  // 서버를 띄울 포트 번호, 띄운 후  실행할 코드
  // 8080으로 들어오면 이걸 띄워줘
   console.log('listening on 8080')
}); 


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