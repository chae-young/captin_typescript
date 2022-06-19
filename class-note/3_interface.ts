
//인터페이스 : 동일한 규칙을 우리가 사용한다, 상호간의 약속 한 규칙에 따라서 무조건 속성을 정의 해줘야 한다!\

interface User{
    age: number;
    name: string,
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
/* 
함수의 파라미터에 인터페이스를 넣어주고 
함수의 인자에 인터페이스의 속성이 알맞게 정의가 되었는지가 확인해주는게 타입스크립트의 인터페이스!
*/
function getUser(user: User){
    console.log(user)
}

const capt = {
    name: '캡틴',
    age: 100
}
// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number,b: number): number;
}
var sum: SumFunction;
sum = function(a: number,b: number): number{
    return a + b
}
getUser(capt) 

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr5: StringArray = ['a','b','c'];
arr5[1] = 10 // 이미 string인데 숫자는 할당 할 수 없음

//딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj3: StringRegexDictionary = {
    cssFile: /\.css$/,
}


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

// developer라는 인터페이스를 타이핑 하는데 developer가 person이라는 타입을 상속 받고 있으니 속한 타입을 모두 써줘야 한다
var captain: Developer = {
  language: 'ts',
  name: 'cy',
  age:20  
}