let isDone: boolean = true;

let num: number = 1;
let colorNumber: number = 0x409eff;

let str: string = '我是str';

let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3,];
let arr3: [number, string] = [7, 'senven'];
let arr4: [string, number];
arr4 = ['arr4', 77];
arr4.push(1); // 可push声明时的类型
console.log('arr4: ', arr4);

// 枚举 enum
enum NameEnum { XiaoWen, WenLi, Hulu, ZhuMei }
let n: NameEnum = NameEnum.Hulu;  // 打印下标
console.log('n: ', n);
enum NameEnum1 { XiaoWen = 2, WenLi, Hulu, ZhuMei }
let n1: string = NameEnum1[2];
console.log('n1: ', n1);

// 特殊类型：any、void、undefind、null
let arr5: any[] = [1, '1', true];
arr5[3] = 7;
arr5[4] = null; // 默认情况下null和undefined是所有类型的子类型，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
console.log('arr5: ', arr5);
function voidFunc(): void { // 表示没有返回值
  console.log('我是voidFunc函数，我没有返回值！');
}

let voidUnusable1: void = null; // 声明一个void，只能赋值undefind和null
let voidUnusable2: void = undefined; // 声明一个void，只能赋值undefind和null

// 特殊类型nerver：表示的是那些永不存在的值的类型，经常是报错的提示信息

// 特殊类型object：object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
declare function create(o: object | null): void;  // 疑问1：declare表示声明变量及模型，具体为什么使用不知；疑问2：编译后生产的js没有create方法。

create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// 类型断言

let someStr: any = 'i am some str';
let strLength1: number = (<string>someStr).length;
let strLength2: number = (someStr as string).length;