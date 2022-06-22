/* 

제네릭..
타입을 마치 파라미터 형태로 받아들이게 되는..?
힘수를 정의할때 이 타입을 사용할거다 하고 호출한 시점에 정의하는것
그 타입을 추론을 해서 반환값까지 붙이는것!

*/

//유니온 타입의 문제점
function logText(text:string | number){
    console.log(text)
    //text -> 값에 api 프리뷰가 string number가 공통으로 쓸수있는 api만 보임
    return text
}
const a = logText('10')
a.split() // 에러가 남 왜냐면 타입이 string 또는 number 형태이라서 문자열 api활용이 안됨(정확이 이 타입이 스트링이여만 split를 쓸수잇어)
logText('a')
logText(10)



//제네릭의 장점
function loginText<T>(text:T):T{// t 타입이 들어갈건데 그게 파라미터에도 쓰이고 반환할거야
    console.log(text)
    return text
}

const str = loginText<string>('abc') //타입을 호출한 시점에 string으로 정의
str.split('') // 바로 가능
// 함수 중복사용이 가능하다! 반약 중복함수인데 값이 다른경우!! 유니온타입의 단점을 보완


//인터페이스에 제네릭 선언
//타입을 넘긴다!
//타입코드을 줄일수 있는 장점이 있다()
interface DropDown<T> {
    value : T;
    selected : boolean;
}
const obj: DropDown<number> = { value: 'abc', selected: false};