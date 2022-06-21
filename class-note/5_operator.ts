// 유니온 타입 : 하나의 타입 이상을 쓰는거

function logMessage(value: string | number){
    console.log(value)
}
logMessage('hello');
logMessage(100)



// 유니온 타입 장점: 파라미터나 변수에 한가지 이상의 타입을 쓰고 싶을때..!
var seho: string | number | boolean;
function logMessage(value: string | number){
    if(typeof value === 'number'){
        //value의 값의 타입이 맞으면 값에 해당하는 api를 바로바로 쓸수있다(any는 명확하지 않아서 vscode에서도 프리뷰가 안나옴)
        //타입 가드 : 타입을 좁혀나가는 과정
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }    
    throw new TypeError('value must be string or number')
}
logMessage('hello');
logMessage(100);


interface Developer {
    name:string;
    skill:string;
}
interface Person {
    name: string;
    age: number;
}
//유니온 타입 특징: 인터페이스를 유니온타입으로 썻을땐 공통된것만 제공(타입 세이프 문제)
function askSomeone(someoone:Developer | Person){
    someoone.name;
    someoone.skill;
    someoone.age;
}
askSomeone({name:'cy',skill:'ts'}) // 유니온 일 경우 각 인터페이스에 해당하는 속성 접근 가능
askSomeone({name:'cy',skill:'ts'}) // 인터섹션이면 오류남 왜냐? 속성 타입을 다 만족해야되서

//인터섹션 타입
var capt: string & number & boolean; //string 도 만족하고 number도 만족하고 boolean도 만족하는


/* 
유니온 : 선택지가 있는
인터섹션 : 타입을 모두 합친것 (합집합) 모두 만족해야함
*/


