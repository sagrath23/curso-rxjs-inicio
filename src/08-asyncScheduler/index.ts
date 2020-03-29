import { asyncScheduler } from 'rxjs';

const displayNumber = (value: number) => console.log(`da value: ${value}`);
const sayHello = () => console.log('Hello World');
const sayHelloToSomeone = (name: String) => console.log(`Hi, ${name}`);
const sayHelloWithFullname = ({ name, lastName }) => console.log(`Hello, ${name} ${lastName}`)

// asyncScheduler allow us to create Subscriptions that can be executed after n milliseconds
// this behavior is similar to setTimeout
asyncScheduler.schedule(sayHello, 2000);
// a asyncScheduler receive a function to execute when it's active, the delay of the execution and the state to be passed through 
// the function passed to the scheduler
asyncScheduler.schedule(sayHelloToSomeone, 3000, 'Steve');
asyncScheduler.schedule(sayHelloWithFullname, 4000, { name: 'Steve', lastName: 'Villegas' });
// if i pass a named function, I can reference the inner scheduler and re-schedule the execution 
// of the function. this behavior is similar to setInterval
const subs = asyncScheduler.schedule(function(state){
  displayNumber(state);

  this.schedule(state + 1, 1000);
}, 1500, 0);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

// also, i can schedule the un-subscription to the scheduler
asyncScheduler.schedule(subs.unsubscribe, 6000);
