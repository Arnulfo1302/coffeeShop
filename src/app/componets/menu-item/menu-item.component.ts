import { Component, Input, Renderer2 } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  constructor(private router: Router,private renderer: Renderer2) {}
  @Input() title!: string;
  @Input() description!: string;
  @Input() url!: string;
  navigateWithDelay(url: string, urlImg: string) {
    const imageElements = document.querySelectorAll('.imgButton');
    imageElements.forEach((imageElement: Element) => {
      const currentUrl = (imageElement as HTMLImageElement).src;
      if (currentUrl && currentUrl.substring(currentUrl.lastIndexOf('/') + 1) === urlImg.substring(urlImg.lastIndexOf('/') + 1)) {
        (imageElement as HTMLElement).classList.add('scale-125');
        console.log('Sí entró');
      }
    });
    setTimeout(() => {
      this.router.navigate([url]);
    }, 1000);
  }
  handleButtonClick(event: MouseEvent, url: string) {
    const clickedButton = event.target as HTMLElement;
    this.renderer.removeClass(clickedButton,'bg-[#282C7F]')
    this.renderer.addClass(clickedButton,'bg-black')
    
    setTimeout(() => {
      this.router.navigate([url]);
    }, 1000);
  }
}
