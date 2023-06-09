import { Component } from '@angular/core';
import { GitRepository } from 'src/app/shared/models/repository.models';
import { GitRepositoryService } from 'src/app/shared/services/git-repository.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  repository!: GitRepository[];

  repoId: number[] = [613945678, 532965143, 454476053, 621282147];


  ngOnInit() {
    this.getRepos();
  }

  constructor(
    protected project: GitRepositoryService,

  ) {}

  getRepos() {
    this.project
      .getRepos()
      .then((p) => {
        this.repository = p.filter(repo => this.repoId.includes(repo.id!));
        ;
      })
      .catch((err) => console.error(err));
  }
  
}
