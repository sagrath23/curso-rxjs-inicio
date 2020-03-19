import { Observable, Observer } from 'rxjs';

const complete = () => console.info('Observable finished!!!');
// this is an implementation of the Observable interface, that can be used to stablish the subscription
// to the observable
const observer: Observer<String> = {
  complete,
  error: console.warn,
  next: console.log,
};

// one way to create a observable 
//const obs$ = Observable.create();
// in this way, we create a new observable typed to emit strings
const obs$ = new Observable<String>((subs) => {
  // this method publish a value to all who is subscribed to
  subs.next('Hello');
  subs.next('World');

  // when an error occurs inside the observable, if the second argument is passed to 
  // subscribe function, they will be executed.
  // throw new Error('forced error');

  // and this method notify to all observers that this observable can be unsubscribed
  // this observable can emit more values with next, but all observers will ignore it.
  subs.complete();

  subs.next('World');
});

// subscribe to observable, in this function, the first argument is the callback executed 
// when Observable invoke the next function 
// obs$.subscribe(console.log);
// we can define a subscription passing three callbacks, to the next, the error and the complete
// events on the Observable
obs$.subscribe(console.log, console.error, complete);
// or define an implementation of Observer interface and pass it to the observable
obs$.subscribe(observer);
