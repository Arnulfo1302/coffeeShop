import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componets/header/header.component';
import { HeroComponent } from './componets/hero/hero.component';
import { GaleryComponent } from './componets/galery/galery.component';
import { BulletSecctionComponent } from './componets/bullet-secction/bullet-secction.component';
import { LocationComponent } from './componets/location/location.component';
import { MenuComponent } from './componets/menu/menu.component';
import { MenuItemComponent } from './componets/menu-item/menu-item.component';
import { ImgOverlayComponent } from './componets/img-overlay/img-overlay.component';
import { CommunicationServiceService } from './services/communication-service.service';
import { Subscription } from 'rxjs';
import { BarMenuOverlayComponent } from './componets/bar-menu-overlay/bar-menu-overlay.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    GaleryComponent,
    BulletSecctionComponent,
    LocationComponent,
    MenuComponent,
    MenuItemComponent,
    ImgOverlayComponent,
    BarMenuOverlayComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('barOverlay', { static: true }) barOverlay!: ElementRef;
  private subscription: Subscription;
  private subscriptionBar: Subscription;
  constructor(private renderer: Renderer2, private communicationService: CommunicationServiceService) {
    this.subscription = this.communicationService.snapScroll$.subscribe(() => {
      this.setScroll();
    });
    this.subscriptionBar = this.communicationService.barOverlay$.subscribe((params) => {
      this.barMenu(params.n);
    });
  }
  title = 'coffeeShop';
  @ViewChild('scrollSnap', { static: true }) scrollSnap!: ElementRef;

  setScroll() {
    this.renderer.addClass(document.body, 'overflow-hidden');
  }
  barMenu(n: number){
    if(n === 1){
      this.renderer.removeClass(this.barOverlay.nativeElement, 'hidden');
      this.renderer.addClass(this.barOverlay.nativeElement, 'flex');
      this.setScroll();
    }else if(n===0) {
      this.renderer.removeClass(this.barOverlay.nativeElement, 'flex');
      this.renderer.addClass(this.barOverlay.nativeElement, 'hidden');
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }
  }
  
}
