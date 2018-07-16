import { Component, OnInit } from '@angular/core';
import {SkillsService} from '../skills.service'; // service for skills
import {AboutmeService} from '../aboutme.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitleAnimation = "fadeInDown";
  public services = [
    {
      icon: 'fas fa-paint-brush',
      title: 'Web Design',
      content: 'Extreme attention to detail is the essence of Boo’s unique design concepts'
    },
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      content: 'Extreme attention to detail is the essence of Boo’s unique design concepts'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      content: 'Extreme attention to detail is the essence of Boo’s unique design concepts'
    }
  ];
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
