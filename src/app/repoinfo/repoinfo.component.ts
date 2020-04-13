import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../landingpage/github-request.service'

@Component({
  selector: 'app-repoinfo',
  templateUrl: './repoinfo.component.html',
  styleUrls: ['./repoinfo.component.css']
})
export class RepoinfoComponent implements OnInit {

  constructor(private githubRequestService : GithubRequestService ) {
    
    let repoInfo= this.githubRequestService.getRepoInfo()
    console.log(repoInfo)

   }

  ngOnInit(): void {
  }

}
