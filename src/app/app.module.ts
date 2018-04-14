import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { ShowCommentComponent } from './show-comment/show-comment.component';
import { UpdatePostComponent } from './update-post/update-post.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowPostComponent,
    AddPostsComponent,
    ShowCommentComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:"", component: ShowPostComponent},
      {path:"addPost", component: AddPostsComponent},
      {path:"showComment/:id", component: ShowCommentComponent},
      {path:"updatePost/:id", component: UpdatePostComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
