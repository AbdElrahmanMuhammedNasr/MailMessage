import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jquery from 'jquery';


@Component({
  selector: 'app-messageshort',
  templateUrl: './messageshort.component.html',
  styleUrls: ['./messageshort.component.scss']
})
export class MessageshortComponent implements OnInit,AfterViewInit {

  constructor(private router: Router) { }

  shortMessages = []

  ngAfterViewInit() {
    $('.short-message .message-short').each(function (i) {
      setTimeout(function () {
        $('.short-message .message-short').eq(i).addClass('showing')
      }, 150 * (i + 1))
    });
  }

  ngOnInit(): void {
    this.shortMessages=[
      {
        sender:'Tamer',
        time:'02:30 am',
        date:"20 March 2020",
        subject:'Review Commmit',
        body:'dear abdo  the last commit is very bad please re-code it',
        read:false
      },
      {
        sender:'Tamer',
        time:'05:30 am',
        date:"20 March 2020",
        subject:'Review Commmit',
        body:'dear abdo  the last commit is very bad please re-code it ',
        read:true
      },
      {
        sender:'Tamer',
        time:'22:30 am',
        date:"20 March 2020",
        subject:'Review Commmit',
        body:'dear abdo  the last commit is very bad please re-code it ',
        read:false
      },
      {
        sender:'Tamer',
        time:'11:30 am',
        date:"20 March 2020",
        subject:'Review Commmit',
        body:'dear abdo  the last commit is very bad please re-code it ',
        read:true
      },
      {
        sender:'Tamer',
        time:'02:50 am',
        date:"20 March 2020",
        subject:'Review Commmit',
        body:'dear abdo  the last commit is very bad please re-code it ',
        read:true
      },
      {
        sender:'Tamer',
        time:'02:30 am',
        date:"20 March 2020",
        subject:'Review Commmit',
        body:'dear abdo  the last commit is very bad please re-code it ',
        read:false
      },{
        sender:'Tamer',
        time:'02:50 am',
        date:"20 March 2020",
        subject:'Review Commmit',
        body:'dear abdo  the last commit is very bad please re-code it ',
        read:true
      },
      {
        sender:'Tamer',
        time:'02:30 am',
        date:"20 March 2020",
        subject:'Review Commmit',
        body:'dear abdo  the last commit is very bad please re-code it ',
        read:false
      },{
        sender:'Tamer',
        time:'02:50 am',
        date:"20 March 2020",
        subject:'Review Commmit',
        body:'dear abdo  the last commit is very bad please re-code it ',
        read:true
      },
      {
        sender:'Tamer',
        time:'02:30 am',
        date:"20 March 2020",
        subject:'Review Commmit',
        body:'dear abdo  the last commit is very bad please re-code it ',
        read:false
      },
    ]
  }

  onDisplayMessage(id){
    this.router.navigate(['/inbox'], {queryParams:{messageId:id}})
  }

}
