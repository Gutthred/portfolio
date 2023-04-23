import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { GitRepository } from '../models/repository.models';

@Injectable({
  providedIn: 'root'
})
export class GitRepositoryService {

  constructor(private httpClient: HttpClient) { }

  getRepos(){
    return lastValueFrom(this.httpClient.get<GitRepository[]>('https://api.github.com/users/gutthred/repos'));
  }
}
