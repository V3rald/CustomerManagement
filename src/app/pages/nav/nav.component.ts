import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { CATEGORIES } from 'src/app/shared/database/category.database';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  categories = CATEGORIES;
  name: string;
  mobile: boolean;

  constructor(private sharedService: SharedService, private router: Router, private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  ngOnInit(): void {
    this.name = this.sharedService.NAME;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.mobile = true;
    }else this.mobile = false;
  }

}
