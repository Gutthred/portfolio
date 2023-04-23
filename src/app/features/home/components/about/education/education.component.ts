import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  @Input() educationData!: {
    courseName: string;
    courseEntity: string;
    courseBeginningDate: string;
    courseEndingDate: string;
  };
}
