import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressBookData } from 'src/app/address-book-data';
import { AddressbookService } from 'src/app/addressBookService/addressbook.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  persons!: AddressBookData[] 
  constructor(private route:ActivatedRoute, private services:AddressbookService) { }

  name:any
  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')

    if(this.name == "name" || this.name == "address" || this.name == "city" || this.name == "state"){
        this.services.sortPerson(this.name).subscribe(data => {
           this.persons = data;
          console.log("received data by name =",data[0])
        })
    }else{
      this.services.getPersonByName(this.name).subscribe(data => {
        this.persons = data;
       console.log("received data by name =",data[0])
     })

    }
    
  }

}
