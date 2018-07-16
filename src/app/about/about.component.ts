import { Component, OnInit } from '@angular/core';

import {SkillsService} from '../skills.service';
import {AboutmeService} from '../aboutme.service';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  pageTitleAnimation = "fadeInDown";
  public skills = [];
  public aboutMe;

  constructor(private _skills: SkillsService, private _aboutme: AboutmeService) { }

  ngOnInit() {
    this.skills = this._skills.getSkills();
    this.aboutMe = this._aboutme.aboutme();

    $(document).ready(function(){
      $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
          width:$(this).attr('data-percent')
        }, 2000);
      });
    });
  }

}
