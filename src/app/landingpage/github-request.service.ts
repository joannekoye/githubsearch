import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})

export class GithubRequestService{
  
  
  private username: string;
  private reponame: string;
  private key= environment.githubToken;


    constructor(private httpClient: HttpClient){
      console.log("service is ready");
      this.username= 'joannekoye'
      this.reponame='quotes'
      
    }

    getProfileInfo() {
      
      return this.httpClient.get("https://api.github.com/users/" + this.username + "?access_token=" + this.key).pipe(map((res:any) =>res.json()));
    }

    getRepoInfo(){
     
      return this.httpClient.get("https://api.github.com/search/repositories?q="+this.reponame + "&sort=stars&order=desc&type=Repositories?access_token=" + this.key).pipe(map((res:any) =>res.json()));
    }
}