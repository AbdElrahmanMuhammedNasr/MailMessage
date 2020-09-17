import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  constructor(private  route: ActivatedRoute) { }

  email;

  @ViewChild('sendData') data:NgForm;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
        this.email = params['address']
        console.log(this.email)
    })
  }

  sendMessage(){
      console.log(this.data.value)
  }

}
