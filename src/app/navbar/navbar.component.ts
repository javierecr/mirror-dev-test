import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  active: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    
  }

}
