import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async.component';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './area/area.component';

@NgModule({
  declarations: [AsyncComponent, AreaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AsyncComponent }]),
  ],
})
export class AsyncModule {}
