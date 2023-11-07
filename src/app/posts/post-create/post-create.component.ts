import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor(public postservice: PostServiceService) { }

  onaddpost(postform: NgForm){
    
    this.postservice.addpost_service(postform.value.enteredusername,postform.value.enteredpostContent,postform.value.entereddepartment,postform.value.entereddate);
    postform.resetForm();
  }

}
