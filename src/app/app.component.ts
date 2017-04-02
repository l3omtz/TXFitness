import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './nav.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
    this._auth.getAllPosts();
  }
  onLogout() {
    this._auth.logoutUser();
  }


}
