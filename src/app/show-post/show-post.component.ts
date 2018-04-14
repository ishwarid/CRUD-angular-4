import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Http, Response, Headers} from '@angular/http'

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(private http: Http) { }

  showPosts = [];
 
  fetchData = function () {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (res:Response)=>{
      console.log(res);
      this.showPosts = res.json();
    })
  }
  ngOnInit() {
    this.fetchData()
  }


}
