function saySelf<T>(a: T): T {
  return a;
}

console.log(saySelf<string>('1'));
console.log(saySelf<number>(1));

function fun<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}

fun<number, number>(1, 2);
fun<string, Array<number>>('1', [1, 2]);
fun<string, string[]>('1', ['1', '2']);

interface Inter {
  length: number
}

function fun2<T extends Inter>(obj: T): number {
  return obj.length
}

// fun2(1); // 数字没有length
fun2<string>('1'); // 字符串有length
fun2<number[]>([1, 2]); //数组有length


class Person<T> {
  private _name: T;
  constructor(name: T) {
    this._name = name
  }
}

let P = new Person<string>('HuLu');