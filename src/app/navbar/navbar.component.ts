import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    branding = 'JoVillegas';
    menu: Array<string> = 
    ['Home'
,'About'
,'Skill'
,'Resumes'
,'Services'
,'Portfolio'
,'Blog'
,'Testimonials'
,'Contact'];
}
