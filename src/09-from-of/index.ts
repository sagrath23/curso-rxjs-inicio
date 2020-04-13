import { from, of } from 'rxjs';

const observer = {
  next: (value) => console.log(`next: ${value}`),
  complete: () => console.info('completed')
};
const data = [1,2,3,4,5];
const src$ = from(data);
// if I pass data without the spread operator, this observable only emit one value
const src2$ = of(...data);

src$.subscribe(observer);
src2$.subscribe(observer);

// I can use from to handle an async request to an API and handle the response
const dataSource$ = from(fetch('https://api.github.com/users/sagrath23'));

dataSource$.subscribe(async (response) => {
  const userData = await response.json();

  console.log(userData, 'data');
});

// or consume an iterable object (created by a function generator)
const numberGenerator = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};
const iterable = numberGenerator();

for(let i of iterable) {
  console.log(`${i} in for`);
}

from(iterable).subscribe(observer);
