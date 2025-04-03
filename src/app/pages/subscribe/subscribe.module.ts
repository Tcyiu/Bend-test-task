import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SubscribeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SubscribeComponent }]),
  ],
})
export class SubscribeModule {}
