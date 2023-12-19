import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderPipe, ProfessionPipe } from './pipes';
import { LoaderComponent } from './components';

@NgModule({
  declarations: [
    GenderPipe,
    ProfessionPipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenderPipe,
    ProfessionPipe,
    LoaderComponent,
  ]
})
export class SharedModule { }
