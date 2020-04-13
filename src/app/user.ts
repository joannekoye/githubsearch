
export class User {
  constructor (public name:string, public company:string, public location: string, public login: string, public followers: number, public following: number, public bio:string, public created_at: Date, public avatar_url:string){
  }
}