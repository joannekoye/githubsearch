import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'



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
      
      let profilePromise = new Promise((resolve,reject)=>{
        this.httpClient.get("https://api.github.com/users/" + this.username + "?access_token=" + this.key).toPromise().then(response=>{
          console.log("successful api profile request")
 
          resolve(response)
        },
        error=>{
          console.log("unsuccessful api profile request")
 
          reject(error)
        })
      })
      return profilePromise
    }

    getRepoInfo(){
      let repoPromise = new Promise((resolve,reject)=>{
       this.httpClient.get("https://api.github.com/search/repositories?q="+this.reponame + "&sort=stars&order=desc&type=Repositories?access_token=" + this.key).toPromise().then(response=>{

        console.log("successful api repo request")
 
        resolve(response)
       },
       error=>{
        console.log("unsuccessful api repo request")

        reject(error)
       })
      })
      return repoPromise
    }
}