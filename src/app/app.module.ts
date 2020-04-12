import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GithubRequestService } from './landingpage/github-request.service';
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { RepoinfoComponent } from './repoinfo/repoinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ProfileinfoComponent,
    RepoinfoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
