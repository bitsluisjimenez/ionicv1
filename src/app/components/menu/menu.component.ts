import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuOpts = new Observable<Componente[]>();

  constructor( private data: DataService ) { }

  ngOnInit() {
    this.menuOpts = this.data.getCoreOptionsMenu();
  }

}
