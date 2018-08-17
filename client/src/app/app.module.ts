import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactsComponent } from './contacts/contacts.component';

const appRoutes: Routes = [
  {path: 'contact', component: ContactsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
