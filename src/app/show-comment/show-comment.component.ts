import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Http, Response, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit {
  id:number;
  data:object = {};
  uPosts = [];
  postObj:object = {};
  
  constructor(private http: Http , private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    })
    const url = `${"https://jsonplaceholder.typicode.com/posts"}/${this.id}/${"comments"}`;
    this.http.get(url).subscribe(
      (res:Response)=>{
      console.log(res);
      this.uPosts = res.json();
   
    })
  }

}


