import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellComponent } from './hello/hello.component';
import { CursoAngularComponent } from './curso-angular/curso-angular.component';


@NgModule({
  declarations: [
    AppComponent, HellComponent, CursoAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
