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

@NgModule({
  declarations: [
    HomePageComponent,
    HomeMainComponent,
    AboutComponent,
    EducationComponent,
    ProjectItemComponent,
    ProjectsComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, MatIconModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
