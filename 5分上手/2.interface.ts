interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'HuLu', lastName: 'ZhuMei' };

console.log(greeter(user));