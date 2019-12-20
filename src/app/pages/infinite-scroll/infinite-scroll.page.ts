import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  data = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('loading new elements...');
    if (this.data.length > 50) {
      event.target.complete();
      return;
    }

    setTimeout(() => {
      const newArray = Array(20);
      this.data.push(...newArray);
      event.target.complete();
    }, 1000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
