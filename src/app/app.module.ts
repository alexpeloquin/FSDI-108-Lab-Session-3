import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { MenuComponent } from './menu/menu.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { InspectComponent } from './inspect/inspect.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms'; //import the forms module

@NgModule({
  declarations: [
    AppComponent,
    RegisteruserComponent,
    ListuserComponent,
    MenuComponent,
    MainpageComponent,
    InspectComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //inject the module to all the components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
