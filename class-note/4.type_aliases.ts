/* 타입별칭 */

type Person2 = {
    name: string;
    age: number;
}

var seho: Person2 = { // 타입별칭은 별칭에 드래그를 가져다 대면 타입정의가 나온다. 인터페이스는 x (인터페이스 : 컨트롤 + alt)
    name: '세호',
    age:30,
}

type MyString = string;
var str: MyString = 'hi' //str의 타입을 타입별칭으로 정의
