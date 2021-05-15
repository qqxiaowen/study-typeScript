// import { CAT } from './util/utilutils'

// let num = 77;
// console.log(num);
// console.log(CAT.name)
// console.log(CAT.age)

function fn(this: Object, num: number): void {
  console.log(num);
  console.log(this);
}

fn.call({}, 1);

let domBtn = document.querySelector('.btn');
domBtn?.addEventListener('click', () => {
  alert('hello');
})