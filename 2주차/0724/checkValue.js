function checkValue(value) {
  if (value === null) {
    console.log("null 입니다.");
  } else if (value === undefined) {
    console.log("undefined 입니다.");
  } else console.log(value);
}

let value = null;
let people = {
  name: "홍길동",
  age: "25",
};

checkValue(value); // null 입니다.
checkValue(people); // { name: '홍길동', age: '25' }
checkValue(people.name); // 홍길동
checkValue(people.gender); // undefined 입니다.
