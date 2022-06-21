/* 
이넘 : 특정값들을 집합
*/


//숫자형 이넘
enum Shoes {
    Nike,
    Adidas
}

var myShoes = Shoes.Nike; // 이넘에 별도의 값을 쓰지 않으면 숫자형 이넘으로 됨
console.log(myShoes)// 0


//문자형 이넘 => 값을 집어넣으면 문자로 출력
enum Shoes {
    Nike = "나이키",
    Adidas = '아디다스'
}

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}
// 이넘은 약간 객체같다...
function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답')
    }
    if(answer === Answer.No){
        console.log('오답')
    }
}
askQuestion(Answer.Yes)
askQuestion('Yes')//에러: 이넘이 타입이기 때문

