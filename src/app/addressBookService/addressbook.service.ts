import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressBookData } from '../address-book-data';
@Injectable({
  providedIn: 'root'
})
export class AddressbookService {

  private url = "http://localhost:8080/addressbook";
  constructor(private http: HttpClient) { }

  getAddressBookData(): Observable<AddressBookData[]>{
    return this.http.get<AddressBookData[]>(`${this.url}`);
  }

  getPerson(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/addressbook/details/${id}`);
  }

  getPersonByName(name: String): Observable<any> {
    return this.http.get(`http://localhost:8080/addressbook/name/${name}`);
  }

  sortPerson(name: String): Observable<any> {
    return this.http.get(`http://localhost:8080/addressbook/sort/${name}`);
  }

  createPerson(employee: Object): Observable<Object> {
    return this.http.post(`http://localhost:8080/addressbook/add`, employee);
  }

  updatePerson(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/addressbook/update/${id}`, value);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/addressbook/delete/${id}`, { responseType: 'text' });
  }
}
