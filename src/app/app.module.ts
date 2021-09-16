import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressbookComponent } from './addressBookComponent/addressbook/addressbook.component';
import { HttpClientModule } from  '@angular/common/http';
import { AddPersonComponent } from './addressBookComponent/add-person/add-person.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PersonDetailsComponent } from './addressBookComponent/person-details/person-details.component';
import { PersonLoginComponent } from './addressBookComponent/person-login/person-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    AddressbookComponent,
    AddPersonComponent,
    PersonDetailsComponent,
    PersonLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
