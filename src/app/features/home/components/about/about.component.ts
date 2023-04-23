import { Component } from '@angular/core';
import { Education } from '../../models/education.models';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  educationData: Education[] = [];

  constructor(private educationService: EducationService){
    this.educationData = this.educationService.getEducation();
  }

}
