import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settings: SettingsService) { }

  ngOnInit() {
  }
  
  cambiarColor(tema: string, link: any) {
    this.aplicarCheck( link );
    this.settings.aplicarTema(tema);
  }

  aplicarCheck( link: any ) {
    const selectores: any = document.getElementsByClassName('selector');
    
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');


  }


}
