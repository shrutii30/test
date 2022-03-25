import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: SocialUser = new SocialUser;
  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(user);
      
    });
  }

  public signInWithGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  public signOut(){
    this.authService.signOut();
  }
}
