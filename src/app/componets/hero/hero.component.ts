import { Component, ElementRef } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
