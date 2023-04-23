import { Component } from '@angular/core';
import { GitRepository } from 'src/app/shared/models/repository.models';
import { GitRepositoryService } from 'src/app/shared/services/git-repository.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  repository!: GitRepository[];
  
  repoId: number[] = [
    613945678,
    631410837,
    532965143,
    454476053,
    621282147,
  ];

  canShow(n: number): boolean{
    return this.repoId.includes(n);
  }

  ngOnInit() {
    this.getRepos();
  }

  constructor(protected project: GitRepositoryService) {}

  getRepos() {
    this.project
      .getRepos()
      .then((p) => {
        this.repository = p;
        console.log(p)
      })
      .catch((err) => console.error(err));
  }
}
