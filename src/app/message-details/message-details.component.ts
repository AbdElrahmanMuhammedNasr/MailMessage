import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jquery from 'jquery'

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  display = false;

  messageDetails = {
    subject: '',
    sender: '',
    time: '',
    address: '',
    image: '',
    mesBody: ''
  }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.route.snapshot.queryParams['messageId'] ? this.display = true : this.display = false;

    })

    this.messageDetails = {
      subject: 'The Last Commit',
      sender: 'Tamer Ali',
      time: '02:30 am : 20 march 2020',
      address: 'Abdo300nasr@gmail.com',
      image: '../../assets/2.jpg',
      mesBody:`
        this  <strong> code </strong> is not good enough 
        <p>
        fix it   we are so happy to invite you to our party to night
        fix it   we are so happy to invite you to our party to night
        fix it   we are so happy to invite you to our party to night
        fix it   we are so happy to invite you to our party to night
        </p>
        <ol> 
         <li> bad Speed </li>
         <li> bad for clean code </li>
         <li> your are sick </li>
         <li> please re-write your code  </li>
        <ol>
        <br>
       
       
      `
    }

  }



}
