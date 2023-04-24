import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent {
  @Input() projectItem!: {
    id?: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string;
    topics: string[];
  };


  repoId: number[] = [613945678, 532965143, 454476053, 621282147];

  canShow(n: number): boolean {
    return this.repoId.includes(n);
  }

}
