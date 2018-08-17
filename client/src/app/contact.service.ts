import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Contact} from './contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) {   }
// retreving contact

getContacts() {
  return this.http.get('http://localhost:3000/api/contacts')
  .pipe(map(res => res.json()));
}
 addContact(newContact) {
   const headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.post('http://localhost:3000/api/contact', newContact, {headers: headers})
   .pipe(map(res => res.json()));

 }

 deleteContact(id) {
   return this.http.delete('http://localhost:3000/api/contact/' + id)
   .pipe(map(res => res.json()));
 }
}
