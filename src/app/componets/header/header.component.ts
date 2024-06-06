import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { CommunicationServiceService } from '../../services/communication-service.service';
import { RouterLink } from '@angular/router';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private communicationService: CommunicationServiceService) {}
  openBarMenu(n: number){
    this.communicationService.barMenu(n);
  }
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
