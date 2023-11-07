import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {

  arrpost:{_id:string, username: string; postContent: string;
    department: string; date: string;__v:string}[] = [];

  constructor(public postservice: PostServiceService) { }

  private postsubscription!: Subscription;

  ngOnInit(): void {
    this.postservice.getpost_service();

    this.postsubscription = this.postservice.getUpdateListener()
    .subscribe((post:{_id:string, username: string, postContent: string,
      department: string, date: string,__v:string}[])=>
    {
      this.arrpost = post;
    });

  }

  ngOnDestroy()
  {
    this.postsubscription.unsubscribe();
  }

  ondelete(postid: string)
  {
    this.postservice.deletepost_service(postid);
  }
}
