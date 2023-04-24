import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  @Input() projectItem!: {
    id?: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    topics: string[];
  };
  
}
