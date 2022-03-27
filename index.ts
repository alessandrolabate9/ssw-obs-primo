import './style.css';

import { Observable, Subscriber, of, map} from 'rxjs';
// costante type number
const n : number = 4000;
// costante type Observable-stringa 
// oggetto prende come parametro una variabile di tipo subscriber-stringa
const observable: Observable<string> = new Observable(
  (subscriber: Subscriber<string>) => {
    subscriber.next("1");
    subscriber.next("2");
    subscriber.next("3");
    setTimeout(() => {
      subscriber.next("4");
      subscriber.next("5");  
    }, n-2000);
    setTimeout(() => subscriber.complete(), n);
  }
);
console.log("just before subscribe");
function done(){
  console.log("done!")
};
//callback invocata quando dato del publisher è pronto
//uso il callback next e i due c opzionali error e complete
// uso del complete solo se è stato prodotto da publisher, uso in maniera alternativa
// non arrow function anonima ma function classica
observable.subscribe({
  next : x => console.log('got value '+ x),
  error : err => console.error('something wrong occured: ' + err),
  complete: done
});
console.log("just after subscribe");

// Open the console in the bottom right to see results.
