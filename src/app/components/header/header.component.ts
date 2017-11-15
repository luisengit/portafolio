import { Component } from '@angular/core';
import { InformacionService } from '../../providers/informacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor( public _is:InformacionService ){

  }

}
