import { Injectable } from '@angular/core';

@Injectable()
export class AboutmeService {

  constructor() { }
  aboutme() {
    return "<p><strong>I Am a Php Developer, WordPress Developer, Forentend Developer With More Then 4 Year Experience.</strong></p> <p> Offering creative design solutions to solve business problems is what I do best. I write in Html, CSS, Bootstrap, Angular, Wordpress, codeigniter, and PHP. I also speak to databases and make servers do stuff. I like working on scalability, performance, reusability, and great user experiences.</p><p>Specializing in building everything from small business sites to rich interactive web apps.I like working on scalability, performance, reusability, and great user experiences. </p>";
  }
}
