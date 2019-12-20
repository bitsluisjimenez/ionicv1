import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list-sliding',
  templateUrl: './list-sliding.page.html',
  styleUrls: ['./list-sliding.page.scss'],
})
export class ListSlidingPage implements OnInit {

  @ViewChild('userListReference', {static: false}) userListReference: IonList;

  users: Observable<any>;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.users = this.data.getUsers();
  }

  favorite(user) {
    console.log('favorite', user);
    this.userListReference.closeSlidingItems(); // it closes all slids.
  }
  share(user) {
    console.log('share', user);
    this.userListReference.closeSlidingItems(); // it closes all slids.
  }
  delete(user) {
    console.log('delete', user);
    this.userListReference.closeSlidingItems(); // it closes all slids.
  }

}
