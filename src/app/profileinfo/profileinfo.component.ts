import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../landingpage/github-request.service'

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.css']
})
export class ProfileinfoComponent implements OnInit {

  
  constructor(private githubRequestService : GithubRequestService ) {
  this.githubRequestService.getProfileInfo().subscribe(profile=>{
    console.log(profile)
  })
    
  }
  

  ngOnInit(): void {
  }

}
