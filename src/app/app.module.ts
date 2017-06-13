import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ShredditComponent } from './shreddit/shreddit.component';
import { AboutComponent } from './about/about.component';
import { SkateComponent } from './skate/skate.component';
import { BmxComponent } from './bmx/bmx.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsPipe } from './posts-pipe.pipe';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ShredditComponent,
    AboutComponent,
    SkateComponent,
    BmxComponent,
    PostDetailComponent,
    PostsPipe,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
