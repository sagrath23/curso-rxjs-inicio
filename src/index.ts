import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// pipe is a function that allow us to chain operators to an observable
range(1, 10).pipe(
  // map is an operator that apply the passed function to each value emitted by the observable
  map<number, number>((value) => value * 10)
).subscribe(console.log);

const printKey = (key) => console.log(key, 'key');
const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
// pipe function returns a new observable 
const keyUpCode$ = keyUp$.pipe(map(event => event.code));

keyUp$.subscribe(printKey);

keyUpCode$.subscribe(printKey);
