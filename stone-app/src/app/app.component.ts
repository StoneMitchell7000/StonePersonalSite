import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stone-personal-site';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public router: Router) { }

  ngOnInit(): void {
  }

  route(path: string): void {
    this.router.navigate([path]);
  }
}
