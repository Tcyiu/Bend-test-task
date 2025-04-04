import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [SubscribeComponent, AreaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'subscribe', component: SubscribeComponent },
    ]),
  ],
})
export class SubscribeModule {}
