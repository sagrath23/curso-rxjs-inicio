import { of, Observer } from 'rxjs';

const complete = () => console.info('Observer completed!!');
const observer: Observer<number> = {
  complete,
  error: console.warn,
  next: console.log,
};
// of function creates a synchronous Observable that emit every argument to the subscriptions
const obs$ = of<number>(1, 2, 3, 4, 5, 6);

// in this case, should print this first
console.log('Start');
// then, should print every value passed as a argument to of function
obs$.subscribe(observer); 
// and finally, print this.
console.log('End');
