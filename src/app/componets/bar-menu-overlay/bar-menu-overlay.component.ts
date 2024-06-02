import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { CommunicationServiceService } from '../../services/communication-service.service';
@Component({
  selector: 'app-bar-menu-overlay',
  standalone: true,
  imports: [],
  templateUrl: './bar-menu-overlay.component.html',
  styleUrl: './bar-menu-overlay.component.css'
})
export class BarMenuOverlayComponent {
  constructor(private renderer: Renderer2, private communicationService: CommunicationServiceService) {}
  cerrarBarOverlay(n: number){
    this.communicationService.barMenu(n);
  }
}
