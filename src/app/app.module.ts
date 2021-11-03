import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Here I added a form library with the structure shown below
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // this declaration is also important
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
