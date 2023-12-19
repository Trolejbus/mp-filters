import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example1Component } from './example1';
import { Example2Component } from './example2';

const routes: Routes = [
  {
    path: 'example1',
    component: Example1Component,
  },
  {
    path: 'example2',
    component: Example2Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
