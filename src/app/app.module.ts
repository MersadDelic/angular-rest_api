import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
