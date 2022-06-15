//ts 문자열
let str: string = 'hi'
//ts 숫자
let num: number = 2
//ts 배열
let arr: Array<number> = [1,2,3]
let arr2: Array<string> = ['안뇽']
let arr3: number[] = [1,2,3]

//ts 튜플 (배열에 타입이 정해져있다!index 값 마다 지정)
let addressArr: [string, number] = ['jamsil',2]

//ts 객체
let obj: object = {};
// 그냥 얘는 객체다 하고 타입이 세세하기 보지않고 넘어감
// let person: object = {
//     name:'cy',
//     age:20
// }

//->속성마다 타입 지정
let person: {name: string,age: number} = {
    name:'cy',
    age:2
}