import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    this.regresaObservable().pipe(
      retry(2)
    )
    .subscribe( 
      /*Primer callback, cuando llegan datos por next */
      numero => {      
        console.log('Subs', numero);      
      },
      /* Cuando el observable devuelve error */
      error => {
        console.error('error en el obs', error);       
      },
      /* cuando el observable termina */
      () => {
        console.log('El observador terminó');
      }
    );

  }

  ngOnInit() {
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>)  => {
      let contador = 0;

      const intervalo =  setInterval( () => {

        contador ++;
        observer.next( contador );

        if (contador === 3) {
          clearInterval( intervalo );
          observer.complete();
        }

        if ( contador === 2) {
          clearInterval( intervalo );
          observer.error('auxilio!!');
        }
      }, 1000);
    });
    
    
  }

}
