import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private router: Router) { }
  cont = []

  ngOnInit(): void {
    this.cont=[1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,11,1,1,1]
  }

  onSendMessageTo(){
    this.router.navigate(['/send'],{queryParams:{address:'Tamer@Tamer.com'}})
  }

}
