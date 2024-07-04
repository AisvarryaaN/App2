import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})
export class DisplayDataComponent {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe(data => this.post = data);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
