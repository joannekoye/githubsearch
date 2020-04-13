import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GithubRequestService } from './landingpage/github-request.service';
import { ProfileinfoComponent} from './profileinfo/profileinfo.component'
import { RepoinfoComponent } from './repoinfo/repoinfo.component';
import { NavbarComponent } from './profileinfo/navbar.component';
import { DatePipe } from './date.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    LandingpageComponent,
    ProfileinfoComponent,
    RepoinfoComponent,
    AppComponent,
    NavbarComponent,
    DatePipe,
    HighlightDirective
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
