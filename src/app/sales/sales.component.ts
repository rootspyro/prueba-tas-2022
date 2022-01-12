import { Component, OnInit } from '@angular/core';
import {faStore} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faStore = faStore

}
