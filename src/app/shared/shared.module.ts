import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SocialsComponent } from './components/socials/socials.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    SocialsComponent,
  ],
  imports: [CommonModule, HttpClientModule, MatIconModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    SocialsComponent,
  ],
})
export class SharedModule {}
