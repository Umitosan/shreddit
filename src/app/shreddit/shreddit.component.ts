import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './../post.model';

@Component({
  selector: 'app-shreddit',
  templateUrl: './shreddit.component.html',
  styleUrls: ['./shreddit.component.css']
})
export class ShredditComponent {

  constructor(private router: Router){}

  masterPostList: Post[] = [new Post("25 stairs!!!!","Can he do it?","http://afterskate.com/wp-content/uploads/2016/01/jaws-25.jpg",1,1),
                           new Post("Rodney Mullen","Casper Slide","https://coresites-cdn.factorymedia.com/sidewalk/wp-content/uploads/2015/11/Rodney-Mullen-casper-slide-tre-flip-out.jpg",0,2),
                           new Post("25 stairs!!!!","Can he do it?","http://afterskate.com/wp-content/uploads/2016/01/jaws-25.jpg",1,3),
                           new Post("Rodney Mullen","Casper Slide","https://coresites-cdn.factorymedia.com/sidewalk/wp-content/uploads/2015/11/Rodney-Mullen-casper-slide-tre-flip-out.jpg",0,4),
                           new Post("25 stairs!!!!","Can he do it?","http://afterskate.com/wp-content/uploads/2016/01/jaws-25.jpg",1,5),
                           new Post("Rodney Mullen","Casper Slide","https://coresites-cdn.factorymedia.com/sidewalk/wp-content/uploads/2015/11/Rodney-Mullen-casper-slide-tre-flip-out.jpg",0,6)
                           ];

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id]);
  };

}
