import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from './github-request.service'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  

  constructor(private githubRequestService : GithubRequestService ) {
    let profileInfo = this.githubRequestService.getProfileInfo()
    console.log(profileInfo)
    

    let repoInfo= this.githubRequestService.getRepoInfo()
    console.log(repoInfo)

   }

  ngOnInit(): void {
  }

}
