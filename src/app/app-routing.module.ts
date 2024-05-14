import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
    { path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule) },
    { path: 'video', loadChildren: () => import('./video/video.module').then(m => m.VideoModule) },
    { path: 'live', loadChildren: () => import('./live/live.module').then(m => m.LiveModule) },
    { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
