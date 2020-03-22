import { Observable, Observer, Subscriber } from 'rxjs';

const complete = () => console.info('Observer completed!!');
const observer: Observer<number> = {
  complete,
  error: console.warn,
  next: console.log,
};

const interval$ = new Observable<number>((subscriber) => {
  let counter = 0;
 
  // get a reference to the interval created to increment counter
  const interval = setInterval(() => {
    counter++;
    // and publish each increment when this function is invoked by setInterval
    subscriber.next(counter);
  }, 1000);

  // in this case, a function is returned to be executed by unsubscribe function
  return () => {
    // use the reference of the interval created to increment counter to clear it
    // avoiding memory leaks
    clearInterval(interval);
    //and emit the complete signal to the observers
    subscriber.complete();
    console.log('Destroyed interval');
  }
});

const subscription = interval$.subscribe(observer);

setTimeout(() => {
  // unsubscribe didn't finish Observable, only finish the reception of Obvervable's emitted values
  subscription.unsubscribe();
  console.log('subscription finished');
}, 10000);
