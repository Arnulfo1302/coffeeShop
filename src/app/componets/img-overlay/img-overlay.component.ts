import { Component, ViewChild, ElementRef, Renderer2, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationServiceService } from '../../services/communication-service.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Element {
  id: number;
  nombre: string;
  url: string;
  fecha: string;
}
@Component({
  selector: 'app-img-overlay',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './img-overlay.component.html',
  styleUrl: './img-overlay.component.css'
})
export class ImgOverlayComponent implements OnDestroy,OnInit {
  actualID = 0;
  elementsGaleries: Element[] = [];
  totalItems = this.elementsGaleries.length;
  parametroRecibido: {id: number} = {id: 0};
  private subscription: Subscription;
  @ViewChild('imgOverlay', { static: true }) imgOverlay!: ElementRef;
  @ViewChild('imgOverlayContainer', { static: true }) imgOverlayContainer!: ElementRef;

  constructor(private http: HttpClient,private communicationService: CommunicationServiceService, private renderer: Renderer2) {
    this.subscription = this.communicationService.itemClicked$.subscribe((params) => {
      this.parametroRecibido = params;
      this.getImgId(params.id);
    });
  }
  ngOnInit() {
    this.http.get<any>('assets/list/galeryList.json').subscribe(data => {
      this.elementsGaleries = data.elementsGaleries;
      this.totalItems = this.elementsGaleries.length;
    });
  }

  getImgId(id: number) {
    this.actualID = id;
    this.openOverlay()
  }
  openOverlay(){
    this.renderer.setAttribute(this.imgOverlay.nativeElement, 'src', this.elementsGaleries[this.actualID].url);
    this.renderer.setAttribute(this.imgOverlay.nativeElement, 'alt', this.elementsGaleries[this.actualID].nombre);
    this.renderer.removeClass(this.imgOverlayContainer.nativeElement, 'hidden');
    this.renderer.addClass(this.imgOverlayContainer.nativeElement, 'flex');
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  exitOverlay(){
    this.renderer.removeClass(this.imgOverlayContainer.nativeElement, 'flex');
    this.renderer.addClass(this.imgOverlayContainer.nativeElement, 'hidden');
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  nextItem(){
    if (this.elementsGaleries.length > this.actualID+1){
      this.actualID +=1;
      this.renderer.setAttribute(this.imgOverlay.nativeElement, 'src', this.elementsGaleries[this.actualID].url);
      this.renderer.setAttribute(this.imgOverlay.nativeElement, 'alt', this.elementsGaleries[this.actualID].nombre);
    }
  }
  beforeItem(){
    if (this.actualID > 0){
      this.actualID -=1;
      this.renderer.setAttribute(this.imgOverlay.nativeElement, 'src', this.elementsGaleries[this.actualID].url);
      this.renderer.setAttribute(this.imgOverlay.nativeElement, 'alt', this.elementsGaleries[this.actualID].nombre);
    }
  }
}
