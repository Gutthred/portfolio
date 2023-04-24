import { Component } from '@angular/core';
import { GitRepository } from 'src/app/shared/models/repository.models';
import { GitRepositoryService } from 'src/app/shared/services/git-repository.service';

@Component({
  templateUrl: './projectspage.component.html',
  styleUrls: ['./projectspage.component.scss']
})
export class ProjectspageComponent {

  repository!: GitRepository[];

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
        this.repository = p;
        console.log(p);
      })
      .catch((err) => console.error(err));
  }
  

}
