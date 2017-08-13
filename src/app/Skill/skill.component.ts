import { Component } from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls:['./skill.component.css'],
})
export class SkillComponent {
    skills = SKILLS;
}


export class Skill {
  id: number;
  name: string;
  description: string;
  percent: number;
}

 const SKILLS: Skill[] = [
    { id:1, name: "Angular"          ,description: "Angular D",percent:80},
    { id:2, name: ".NET"           ,description: ".NET D",percent:70 },
    { id:3, name: "C#"        ,description: "C#",percent:50 },
    { id:4, name: "SQL Server",description: "SQL Server D",percent:75 },
    { id:5, name: "MVC 5"       ,description: "MVC 5 D",percent:60 },
    { id:6, name: "Entity Framework"        ,description: "Entity Framework D",percent:90 },
    { id:7, name: "HTML"         ,description: "HTML D",percent:95 }
    ];