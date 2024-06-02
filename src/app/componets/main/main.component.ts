import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BulletSecctionComponent } from '../bullet-secction/bullet-secction.component';
import { GaleryComponent } from '../galery/galery.component';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { LocationComponent } from '../location/location.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, BulletSecctionComponent, GaleryComponent, HeaderComponent, HeroComponent, LocationComponent, MenuComponent, MenuItemComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
