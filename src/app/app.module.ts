import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { FooterComponent } from './commonComponents/footer/footer/footer.component';
import { NavbarComponent } from './commonComponents/navbar/navbar/navbar.component';
import { MenuComponent } from './pages/menu/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage/menupage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    MenuComponent,
    MenupageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
