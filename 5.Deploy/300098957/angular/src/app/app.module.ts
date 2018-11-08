import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
=======
import { AppRoutingModule } from './app-routing.module';
>>>>>>> 931d3ea90b61dc9acb2c35a0be46f32e63b17ce7
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule
=======
    BrowserModule,
    AppRoutingModule
>>>>>>> 931d3ea90b61dc9acb2c35a0be46f32e63b17ce7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
