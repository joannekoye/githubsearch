import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { RepoinfoComponent } from './repoinfo/repoinfo.component';



const routes: Routes = [
  {path:'landingpage', component: LandingpageComponent},
  {path:'profileinfo', component: ProfileinfoComponent},
  {path:'repoinfo', component:RepoinfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
