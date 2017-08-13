import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { SkillComponent } from './Skill/skill.component';

const appRoutes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'skill',
        component: SkillComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
