import { Component, OnInit } from '@angular/core';

import {SkillsService} from '../skills.service';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public skills = [];

  constructor(private _skills: SkillsService) { }

  ngOnInit() {
    this.skills = this._skills.getSkills();

    jQuery(document).ready(function(){
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },6000);
      });
    });
  }

}
