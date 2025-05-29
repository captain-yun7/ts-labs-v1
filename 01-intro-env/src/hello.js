// 타입스크립트 : 자바스크립트에 정적 타입을 추가한 언어
// tsc [파일명].ts -> js 파일로 컴파일(트랜스파일)
// node는 자바스크립트 런타임
console.log("hello, world!");
var a = 10; // 숫자 타입 지정
var str = "hello"; // 문자열 타입 지정
function printLength(str) {
    console.log(str.length);
}
printLength("hello");
// printLength(undefined); // strict 옵션이 true이면 에러 처리
