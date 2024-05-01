import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeRoutingModule } from './welcome/welcome-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }