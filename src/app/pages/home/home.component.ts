import { Component, OnInit } from '@angular/core';
import { FbPlansService } from 'src/app/services/plans/fb-plans.service';
import { SharedService } from 'src/app/services/shared.service';
import { CATEGORIES } from 'src/app/shared/database/category.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
