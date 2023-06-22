import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent {

  posts: any

  constructor(http: HttpClient) {

    let url = http.get("https://jsonplaceholder.typicode.com/posts")
    url.subscribe((data) => this.posts = data)
  }

}
