import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  { path: '**', redirectTo: '/home', },
  { path: '', redirectTo: '/home', pathMatch: 'full',   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
