import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {

  constructor() { }

  replys = []

  ngOnInit(): void {
    this.replys =[
      {
        user: true,
        reply:`
        fix it   we are so happy to invite you to our party to night
        fix it   we are so happy to invite you to our party to night
        fix it   we are so happy to invite you to our party to night
        fix it   we are so happy to invite you to our party to night
        `
      },
      {
        user: false,
        reply:`
        fix it   we are so happy to invite you to our party to night
        `
      },
      {
        user: true,
        reply:`
        fix it   we are so happy to invite you to our party to night
        fix it   we are so happy to invite you to our party to night
        fix it   we are so happy to invite you to our party to night
        `
      },

    ]
  }

}
