import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.css'
})
export class FetchDataComponent {
  postId: number = 1;

  constructor(private router: Router) { }

  fetchData() {
    this.router.navigate(['/display', this.postId]);
  }
}
