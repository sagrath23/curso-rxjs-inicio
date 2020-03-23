import { fromEvent, Observer } from 'rxjs';

// fromEvent function produces a Observable that emit a value when a specified 
// event is triggered
// for example, source1$ should emit a value when the click event is triggered in the document
const source1$ = fromEvent<MouseEvent>(document, 'click');
// and this should emit a value when the keyup event is triggered in the document
const source2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: Observer<any> = {
  next: ({ x, y }) => console.log(x, y),
  complete: () => console.info('observer completed'),
  error: console.error 
}

// finally, create the observers and do something with the emitted values
source1$.subscribe(observer);
source2$.subscribe(({ key }) => console.log(key));
