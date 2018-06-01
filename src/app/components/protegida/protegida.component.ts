import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  public  profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      console.log(this.auth.userProfile);
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        console.log(profile);
        this.profile = profile;
      });
    }
  }

}
