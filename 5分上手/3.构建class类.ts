class Cat {
  fullName: string;
  constructor(public firstName, public middleName, public lastName) {
    this.fullName = `${firstName} ${middleName} ${lastName}`;
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Cat('SongB', 'HuLu', 'cat');

console.log(user);
console.log(greeter(user));