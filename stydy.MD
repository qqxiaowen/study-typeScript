# ts的内容
使用 tsc 文件名 的方式编译ts文件。
## 5分上手：

* 类型注解：1.直接在形参后加：类型；可以使用interface声明类型注解。
```javascript
interface Person {
  firstName: string,
  lastName: string
}
function greeter(person: Person) {...}
```
* class类：在构造函数的参数上使用public等同于创建了同名的成员变量