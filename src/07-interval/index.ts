import { interval, Observer, timer } from 'rxjs';

const complete = () => console.info('Observer completed!!');
const observer: Observer<number> = {
  complete,
  error: console.warn,
  next: console.log,
};
// interval function generates an Observable that emit an infinite number of values
// this function generates a Asynchronous Observable by default, but also receive a schedule attribute
const interval$ = interval(1500);
// timer function generates an Observable that emit an unique value after a defined time
// as the same way as interval, this is an Asynchronous Observable
const timer$ = timer(2000);
// passing the second argument to timer, create a delayed like interval, that start to emit values after
// dueTime (first argument)
const timer2$ = timer(2000, 1000);
// timer can receive a Date object as first argument to schedule the execution of the Observable
const now = new Date();
now.setSeconds(now.getSeconds() + 10);
const timer3$ = timer(now);

// as a async Observable, interval should decouple execution from event loop and push into stack callback to
//execute later
// In this order of ideas, should output start, end and then start to emit values
console.log('Start');
interval$.subscribe(observer);
timer$.subscribe({ complete, next: (value) => console.log(`next timer: ${value}`)});
timer2$.subscribe(observer);
timer3$.subscribe({ complete, next: (value) => console.log(`scheduled timer: ${value}`)});
console.log('End');
