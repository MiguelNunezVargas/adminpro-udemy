import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SettingsService {
  
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };

  constructor(@Inject(DOCUMENT) private _document ) { 
    this.cargarAjustes();
  }

  guardarAjustes() {
    // console.log('Guardar en el storage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes) );
    console.log(localStorage.getItem('ajustes'));
  }
  
  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      // console.log('Cargando del localStorage');
      this.aplicarTema( this.ajustes.tema );

    } else {
      // console.log('valores por defecto');
      this.aplicarTema( this.ajustes.tema );   
    }
  }

  aplicarTema( tema: string) {
    const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }


}


interface Ajustes {
  temaUrl: string;
  tema: string;
}
