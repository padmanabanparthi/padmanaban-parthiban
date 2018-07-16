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
  public workCategories = [
    { id: 'codeigniter', technology: 'Codeigniter' },
    { id: 'wordpress', technology: 'Wordpress' },
    { id: 'angular', technology: 'Angular' }
  ];
  public recentWorks = [
    {
      id: 'angular',
      projectName: 'Padmanaban-Parthiban',
      technologyUsed: 'Angular 5, Bootstrap, Jquery',
      image: 'assets/images/recentworks/mycar.png'
    },
    {
      id: 'codeigniter angular',
      projectName: 'MyCar.bh',
      technologyUsed: 'Codeigniter, Angularjs 1.6, Bootstrap, Jquery',
      image: 'assets/images/recentworks/mycar.png'
    },
    {
      id: 'angular',
      projectName: 'Excell Pack',
      technologyUsed: 'Angularjs 1.6, Bootstrap, Jquery',
      image: 'assets/images/recentworks/excellpackmachines.png'
    },
    {
      id: 'codeigniter angular',
      projectName: 'Ministry Of Education Bahrain',
      technologyUsed: 'Codeigniter,Angularjs 1.6, Bootstrap, Jquery',
      image: 'assets/images/recentworks/MOE.png'
    },
    {
      id: 'wordpress',
      projectName: 'Urbansoft',
      technologyUsed: 'Wordpress',
      image: 'assets/images/recentworks/urbansoft.png'
    },
    {
      id: 'codeigniter',
      projectName: 'Corporate Conceptz',
      technologyUsed: 'Codeigniter',
      image: 'assets/images/recentworks/corporateconcepts.png'
    },
    {
      id: 'worpress',
      projectName: 'Almanaratain',
      technologyUsed: 'Wordpress',
      image: 'assets/images/recentworks/almanaratain.png'
    }
  ];

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $(".filter-button").click(function() {
        if ($(".filter-button").hasClass("active")) {
          $(".filter-button").removeClass("active");
        }
        $(this).addClass("active");
          var value = $(this).attr('data-filter');
          if(value == "all") {
              //$('.filter').removeClass('hidden');
              $('.filter').show();
          }
          else {
            $(".filter").not('.'+value).hide();
            $('.filter').filter('.'+value).show();
            $('.filter').filter('.'+value).addClass("animated flipInX");
          }
      });
    });
  }

}
