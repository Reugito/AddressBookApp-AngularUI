import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './addressBookComponent/add-person/add-person.component';
import { AddressbookComponent } from './addressBookComponent/addressbook/addressbook.component';
import { PersonDetailsComponent } from './addressBookComponent/person-details/person-details.component';
import { PersonLoginComponent } from './addressBookComponent/person-login/person-login.component';

const routes: Routes = [
  {
    path:'add',
    component: AddPersonComponent
  },
  {
    path: '',
    component: AddressbookComponent
  },
  {
    path: 'update/:id',
    component: AddPersonComponent
  },
  {
    path: "search/:name",
    component: PersonDetailsComponent
  },
  {
    path: "login",
    component: PersonLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
