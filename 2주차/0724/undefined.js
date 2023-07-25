// 값이 할당되지 않은 경우
let value1;
console.log(value1); // undefined

// undefined를 할당한 경우
let value2 = undefined;
console.log(value2); // undefined

// 주어지지 않은 속성에 접근했을 경우
let people = {
  name: "홍길동",
  age: "25",
};
console.log(people.gender); // undefined

let subject = ["수학", "과학", "국어"];
console.log(subject[3]); // undefined

// return문이 없을 경우 함수를 호출했을 때
function func() {}
console.log(func()); // undefined
