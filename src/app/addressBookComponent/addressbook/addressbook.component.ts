import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookData } from 'src/app/address-book-data';
import { AddressbookService } from 'src/app/addressBookService/addressbook.service';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css']
})
export class AddressbookComponent implements OnInit {

  addressBookData!: AddressBookData[];
  constructor(private addressBookService: AddressbookService, private router:Router){ }


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.addressBookService.getAddressBookData().subscribe((data: AddressBookData[]) => {
      console.log("data", data);
      this.addressBookData = data;
    } );
  }

  deletePerson(id:number){
    this.addressBookService.deletePerson(id)
    .subscribe();
    this.reloadData();
  }

  updatePerson(id:number){
    this.router.navigate(['update', id])
  }
  searchName!: string;
  onSearch(){
    console.log("search name", this.searchName)
    this.router.navigate(['search', this.searchName])
  }

 
  onSortbyName(){
    this.router.navigate(['search', "name"])
  }
  onSortbyAdd(){
    this.router.navigate(['search', "address"])
  }
  onSortbyCity(){
    this.router.navigate(['search', "city"])
  }
  onSortbyState(){
    this.router.navigate(['search', "state"])
  }
}
