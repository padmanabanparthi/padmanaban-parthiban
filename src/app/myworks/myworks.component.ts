import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-myworks',
  templateUrl: './myworks.component.html',
  styleUrls: ['./myworks.component.css']
})
export class MyworksComponent implements OnInit {
  pageTitleAnimation = "fadeInDown";
  constructor() { }

  ngOnInit() {
  }

}
