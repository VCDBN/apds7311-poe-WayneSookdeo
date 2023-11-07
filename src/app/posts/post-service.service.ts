import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  private postdisplay: {
    _id: string;
    username: string;
    postContent: string;
    department: string;
    date: string;
    __v: string;
  }[] = [];
  private updatedpostdisplay = new Subject<
    { _id: string;
      username: string;
      postContent: string;
      department: string;
      date: string;
      __v: string; }[]
  >();

  constructor(private http: HttpClient) {}

  addpost_service(pusername: string, ppostContent: string, pdepartment: string, pdate: string) {
    this.http
      .post<{ message: string; post: any }>(
        'https://localhost:3000/api/post',
        { username: pusername, postContent: ppostContent, department: pdepartment, date: pdate }
      )
      .subscribe((thepost) => {
        this.postdisplay.push(thepost.post);
        this.updatedpostdisplay.next([...this.postdisplay]);
        alert('Post has been added successfully.');
      });
  }

  getpost_service() {
    this.http
      .get<{ message: string; posts: any }>('https://localhost:3000/api/post')
      .subscribe((thepost) => {
        this.postdisplay = thepost.posts;
        this.updatedpostdisplay.next([...this.postdisplay]);
      });
  }

  deletepost_service(postid: string) {
    this.http
      .delete('https://localhost:3000/api/post/' + postid)
      .subscribe(() => {
        const updatedpostdeleted = this.postdisplay.filter(
          (post) => post._id !== postid
        );
        this.postdisplay = updatedpostdeleted;
        this.updatedpostdisplay.next([...this.postdisplay]);
      });
  }

  getUpdateListener() {
    return this.updatedpostdisplay.asObservable();
  }
}

