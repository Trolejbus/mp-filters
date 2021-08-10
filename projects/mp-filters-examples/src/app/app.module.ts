import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MpFiltersLibModule } from 'projects/mp-filters-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MpFiltersLibModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
