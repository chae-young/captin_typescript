//함수의 파라미터에 타입을 정의하는 방식
function sum(a:number,b:number){
    return a + b
}
sum(10,20)

//함수의 반환 값에 타입을 정의하는 방식
function sum2():number{
    return 2
}

//함수에 타입을 정의하는 방식
function sum3(a:number,b:number):number{
    return a + b
}

//파라미터를 제한하는 특성
function sum4(a:number,b:number):number{
    return a + b
}
sum4(10,20,30,40) // 타입스크립트가 나머지의 타입지정 안해줬다고 알려줘여

//함수의 옵셔널 파라미터
function log(a: string,b: string,c?: string){//?를 쓰면 1개의 인자만 가져와도 2번째 인자가 선택적으로 된다,

}
log('hello',"22222")
log('hello','stromg',"33333")