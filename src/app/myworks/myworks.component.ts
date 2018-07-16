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
    $(document).ready(function() {

      $(".filter-button").click(function() {
          var value = $(this).attr('data-filter');
          if(value == "all")
          {
              //$('.filter').removeClass('hidden');
              $('.filter').show();
          }
          else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide();
            $('.filter').filter('.'+value).show();
            $('.filter').filter('.'+value).addClass("animated flipInX");
          }
      });
      
      if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
      }
      $(this).addClass("active");
    
    });
  }

}
