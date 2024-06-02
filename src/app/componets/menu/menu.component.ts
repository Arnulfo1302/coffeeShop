import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../app.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent, NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems = [
    { title: 'Sándwiches', description: 'Deliciosos y exquisitos sándiwches para disfrutar con una bebida fría o caliente.', url: '../../../assets/img/sandwich.jpeg' },
    { title: 'Cafés', description: 'Amplia y deliciosa carta de café frío y caliente; dulce y fuerte. Para desayunar o tardear.', url: '../../../assets/img/cafe.jpeg' },
    { title: 'Panadería', description: 'Variedad de riquísimos panes para que degustes al desayuno, brunch o en la tarde.', url: '../../../assets/img/panaderia.jpeg' }
  ];
}
