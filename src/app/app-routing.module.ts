import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { HomeComponent } from './pages/home/home/home.component';
import { MenuComponent } from './pages/menu/menu/menu.component';
import{MenupageComponent} from './pages/menupage/menupage/menupage.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"menu",component:MenuComponent},
  {path:"menu/:id",component:MenupageComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
