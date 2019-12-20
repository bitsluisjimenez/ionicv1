import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSlidingPageRoutingModule } from './list-sliding-routing.module';

import { ListSlidingPage } from './list-sliding.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSlidingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListSlidingPage]
})
export class ListSlidingPageModule {}
