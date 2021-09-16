import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookData } from 'src/app/address-book-data';
import { AddressbookService } from 'src/app/addressBookService/addressbook.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  constructor(private route:ActivatedRoute, private services: AddressbookService, private router:Router) { }

  person: AddressBookData = new AddressBookData();
  id:any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log("id = ", this.id)
    if(this.id != null){
     this.services.getPerson(this.id).subscribe(data => {
       this.person = data;
       console.log("received data =",data)
     })
    }
  }

  onSubmit(){
    this.save() 
  }

  save(){
    console.log(this.person, "savedPerson")
    if(this.id == null){
      this.services.createPerson(this.person)
    .subscribe();
    }else{
      this.onUpdate();
    }
    
    this.gotoList();
  }

  onUpdate(){
    this.services.updatePerson(this.id, this.person)
    .subscribe();
    this.person = new AddressBookData();
    this.gotoList()
  }

  gotoList(){
    this.router.navigate([''])
  }

}
