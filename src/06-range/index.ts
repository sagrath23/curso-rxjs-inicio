import { asyncScheduler, of, range } from 'rxjs';

const obs$ = of(1,2,3,4,5);
// range function is a function that emit a defined number of values starting by the provided value
// by default is a Synchronous Observable, but can be used to produce values in asynchronous way passing a asyncScheduler object
// in this example the start value is 1 (by default is 0), and will be emit the next 5 values, and the asyncSchedule detach the Observable
// from the event loop, make it asynchronous
const obs2$ = range(1,5, asyncScheduler);
console.log('Start of');
obs$.subscribe((value) => console.log(`value: ${value}`));
console.log('End of');
// as range use a asyncSchedule, the output should print "start range", following by "end range", and then, the emitted values
console.log('Start range');
obs2$.subscribe((value) => console.log(`value2 ${value}`));
console.log('end range');
