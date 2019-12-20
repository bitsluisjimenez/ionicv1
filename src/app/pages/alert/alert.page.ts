import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  pageTitle: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentMessageAlert() {
    const alertMessage = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'subtitle',
      message: 'this is an alert message',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Cancel clicked: blah');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Ok clicked: blah');
          }
        },
      ]
    });
    await alertMessage.present();
  }

  async presentInputPrompt() {
    const alertInput = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Input text example',
      message: 'Type text to show in the alerta page title',
      inputs: [
        {
          name: 'pageTitle',
          type: 'text',
          placeholder: 'Page Title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Cancel clicked: blah');
          }
        },
        {
          text: 'Ok',
          handler: ( formData ) => {
            console.log('Ok clicked: blah', formData);
            this.pageTitle = formData.pageTitle;
          }
        },
      ]
    });
    await alertInput.present();
  }

}
