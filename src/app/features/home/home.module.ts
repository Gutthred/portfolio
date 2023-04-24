import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/about/education/education.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeMainComponent } from './components/home/homeMain.component';
import { MatIconModule } from '@angular/material/icon';
import { ProjectspageComponent } from './pages/projectspage/projectspage.component';
import { ProjectsListComponent } from './components/projects/projects-list/projects-list.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeMainComponent,
    AboutComponent,
    EducationComponent,
    ProjectItemComponent,
    ProjectsComponent,
    ProjectspageComponent,
    ProjectsListComponent,
    AboutPageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, MatIconModule],
  exports: [HomePageComponent, ProjectspageComponent],
})
export class HomeModule {}
