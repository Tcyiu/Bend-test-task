import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AsyncComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AsyncComponent }]),
  ],
})
export class AsyncModule {}
