import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  id:number;
  data:object = {};
  uPosts = [];
  postObj:object = {};
  private headres = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http , private route: ActivatedRoute, private router: Router) { }

  updatePost(uPosts){
    this.postObj = {
      "title": uPosts.title,
      "body" :uPosts.postText,      
      "userId": 1 

    }

    const url = `${"https://jsonplaceholder.typicode.com/posts"}/${this.id}`;
    console.log(url);
    this.http.put(url, JSON.stringify(this.postObj),{headers : this.headres}).toPromise().then(()=>{
      console.log(url);
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    })

    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (res:Response)=>{
      console.log(res);
      this.uPosts = res.json();
      for(var i=0;i<this.uPosts.length;i++){
        if(parseInt(this.uPosts[i].id) === this.id){
          this.data = this.uPosts[i];
          break;
        }
      }
    })
  }



}
