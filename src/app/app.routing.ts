import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShredditComponent } from './shreddit/shreddit.component';
import { AboutComponent } from './about/about.component';
import { SkateComponent } from './skate/skate.component';
import { BmxComponent } from './bmx/bmx.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShredditComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skate',
    component: SkateComponent
  },
  {
    path: 'bmx',
    component: BmxComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
