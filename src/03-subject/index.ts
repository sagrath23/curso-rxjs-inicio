import { Observable, Observer, Subject } from 'rxjs';

const complete = () => console.info('Observer completed!!');
const observer: Observer<number> = {
  complete,
  error: console.warn,
  next: console.log,
};

const interval$ = new Observable<number>((subscriber) => {
  const timeout = setInterval(() => {
    subscriber.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(timeout);
    console.log('clearing interval');
  }
});
// a Subject is a kind of Observable that broadcast the same value to 
// all the Observers
const subject$ = new Subject<number>();
// when we subscribe the subject to the interval Observable, all the Observers of the Subject
// will receive the same value.
interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  // like a common Observable, a Subject Observable have a next, error & complete
  // callbacts that can be executed
  subject$.next(1500);
  subject$.complete();
},5000);
