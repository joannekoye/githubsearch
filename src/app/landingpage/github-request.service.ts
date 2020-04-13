import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { User } from '../user';
import { Repository } from '../repository'




@Injectable({
  providedIn: 'root'
})

export class GithubRequestService{
  
  
  private username: string;
  userInfo: User;
  repoInfo: Repository;
  
  private key= environment.githubToken;


    constructor(private httpClient: HttpClient){
      console.log("service is ready");
      this.username= 'joannekoye'
      this.userInfo=new User('','','','',0,0,'',new Date(),'')
      this.repoInfo=new Repository("","");
      
    }

    getProfileInfo(){
      interface ApiResponse{
      name: string;
      login:string;
      company:string;
      location: string;
      followers:number;
      following:number;
      bio:string;
      created_at:Date;
      avatar_url:string;
      }
      
      let promise = new Promise((resolve,reject)=>{
        this.httpClient.get<ApiResponse>("https://api.github.com/users/" + this.username + "?access_token=" + this.key).toPromise().then(response=>{
        this.userInfo=response;
        console.log(response)
        resolve()
        },
        error=>{
          reject(error)
        })
      })
      return promise
      return this.httpClient.get("https://api.github.com/users/" + this.username + "?access_token=" + this.key)
   }
   getProfileRepos() {
    interface ApiResponse{
      html_url:string;
      name:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.httpClient.get<ApiResponse>("https://api.github.com/users/"+ this.username + "/repos?access_token=" + this.key).toPromise().then(response=>{
        this.repoInfo=response;
        console.log(response)
        resolve()
      },
      error=>{

        reject(error)
      })
    })
    return promise
    return this.httpClient.get("https://api.github.com/users/"+ this.username + "/repos?access_token=" + this.key)
   }

   updateProfile(username:string) {
    this.username=username;
}
}