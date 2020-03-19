import { Observable } from 'rxjs';

// one way to create a observable 
//const obs$ = Observable.create();
const obs$ = new Observable((subs) => {
  // this method publish a value to all who is subscribed to
  subs.next('Hello');
  subs.next('World');

  // and this method notify to all observers that this observable can be unsubscribed
  // this observable can emit more values with next, but all observers will ignore it.
  subs.complete();

  subs.next('World');
});

//subscribe to observable 
obs$.subscribe(console.log);







