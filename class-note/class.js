class Person { //타입스크립트 문법: 변수의 접근범위가 가능하다
    private name: String; // 클래스 안에서만 쓰겠다
    public age: Number; // 기본
    readonly log: String; //접근만 가능한

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}


