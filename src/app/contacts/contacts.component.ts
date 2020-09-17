import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jquery from 'jquery';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }
  cont = []

  ngAfterViewInit() {
    $('.contact section .single-contact').each(function (i) {
      setTimeout(function () {
        $('.contact section .single-contact').eq(i).addClass('showing')
      }, 150 * (i + 1))
    });
  }

  ngOnInit(): void {
    this.cont = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1];

  }

  onSendMessageTo() {
    this.router.navigate(['/send'], { queryParams: { address: 'Tamer@Tamer.com' } })
  }

}
