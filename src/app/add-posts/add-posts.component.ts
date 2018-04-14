import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Http, Response, Headers} from '@angular/http';
@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  constructor(private http: Http) { }

  postObj:object ={};
  addPost = function(newPosts){
    this.postObj = {
      "title": newPosts.title,
      "body" :newPosts.postText,      
      "userId": 1
    }

    this.http.post("https://jsonplaceholder.typicode.com/posts/",this.postObj).subscribe((res:Response)=>{
      console.log(res);

    })
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const postTitle = form.value.postTitle;
    const postText = form.value.postText;
  }

}
