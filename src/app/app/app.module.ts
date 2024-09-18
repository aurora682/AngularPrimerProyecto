import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from '../app.component';
import { LoginModule } from '../login/login.module'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    LoginModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
