import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../landingpage/github-request.service';
import { User } from '../user';




@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  userInfo : User ;
  repoInfo:any;
  username:string;
  

  constructor(private githubRequestService : GithubRequestService ) {
  }
  
  findProfile() {
    this.githubRequestService.updateProfile(this.username)
    this.userInfo=this.githubRequestService.userInfo
    this.repoInfo=this.githubRequestService.repoInfo
    this.githubRequestService.getProfileInfo()
    this.githubRequestService.getProfileRepos()
    this.githubRequestService.updateProfile(this.username)
   }

  ngOnInit(): void {
    
  }

}
