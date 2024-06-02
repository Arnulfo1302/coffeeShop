import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() url!: string;
}
