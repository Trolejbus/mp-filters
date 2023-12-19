import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MpFiltersLibModule } from 'projects/mp-filters-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Component } from './example1';
import { Example2Component } from './example2';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MpFiltersLibModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
