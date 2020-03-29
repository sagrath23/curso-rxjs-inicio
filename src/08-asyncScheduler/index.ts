import { asyncScheduler } from 'rxjs';

const displayNumber = (value: number) => console.log(`da value: ${value}`);
const sayHello = () => console.log('Hello World');
const sayHelloToSomeone = (name: String) => console.log(`Hi, ${name}`);
const sayHelloWithFullname = ({ name, lastName }) => console.log(`Hello, ${name} ${lastName}`)

asyncScheduler.schedule(sayHello, 2000);
asyncScheduler.schedule(sayHelloToSomeone, 3000, 'Steve');
asyncScheduler.schedule(sayHelloWithFullname, 4000, { name: 'Steve', lastName: 'Villegas' });
const subs = asyncScheduler.schedule(function(state){
  displayNumber(state);

  this.schedule(state + 1, 1000);
}, 1500, 0);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);


asyncScheduler.schedule(subs.unsubscribe, 6000);
