import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create(
      {
        header: 'Albums',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Delete',
            cssClass: 'custom-rojo-sheet',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              console.log('delete clicked');
            }
          },
          {
            text: 'Share',
            icon: 'share',
            handler: () => {
              console.log('shared clicked');
            }
          },
          {
            text: 'Play (open modal)',
            icon: 'arrow-dropright-circle',
            handler: () => {
              console.log('play clicked');
            }
          },
          {
            text: 'Favorite',
            icon: 'heart',
            handler: () => {
              console.log('favorite clicked');
            }
          },
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('cancel clicked');
            }
          }
        ]
      }
    );
    await actionSheet.present();
  }

}
