// 定义对象
let a: {name: string, [propsName: string]: unknown}; // a函数必须有name属性，还可以有0个或多个unknown属性

// 定义函数
let b: (a: number, b: number) => number; 
b = function(x, y) {
  return x + y;
}

// 定义数组
let c: number[];
c = [1, 2];
let d: Array<boolean|number>;
d = [true, false, 10]

// tuple 元组 固定长度的数组
let e: [number, string];
e = [1, 'e'];

// enum 枚举
enum Gender {
  male = 1,
  female = 0
}
let f: {name: string, gender: Gender};
f = {name:'huLu', gender: Gender.male};
console.log(f.gender === Gender.male);

// 类型的别名
type myType = 1|2|3|4|5;
let g: myType;
let h: myType;
g = 1;
// g = 6; // 错误