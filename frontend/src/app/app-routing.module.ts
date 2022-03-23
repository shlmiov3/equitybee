import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UrlDetailsComponent } from './components/url-details/url-details.component';

const routes: Routes = [
  {
    path: 'urlDetails',
    component: UrlDetailsComponent
  },
  {
    path: '**',
    component: MainComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
