import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { app_routing } from './app.routes'
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { ApiConnectService } from './services/api-connect.service'; 
import { ServicesService } from './services/services.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,  app_routing
  ],
  providers: [ApiConnectService, ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
