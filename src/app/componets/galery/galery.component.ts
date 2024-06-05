import { Component, ElementRef, ViewChild, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CommunicationServiceService } from '../../services/communication-service.service';
import { AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';
interface Element {
  id: number;
  nombre: string;
  url: string;
  fecha: string;
}
@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent implements OnInit {
  @ViewChild('galeryContainer', { static: true }) galeryContainer!: ElementRef;
  @ViewChild('more', { static: true }) more!: ElementRef;
  @ViewChild('imgOverlay', { static: true }) imgOverlay!: ElementRef;
  @ViewChild('leftSide', { static: true }) leftSide!: ElementRef;
  @ViewChild('rightSide', { static: true }) rightSide!: ElementRef;
  @ViewChild('imgOverlayContainer', { static: true }) imgOverlayContainer!: ElementRef;
  @ViewChild('flechaIzq', { static: true }) flechaIzq!: ElementRef;
  @ViewChild('flechaDerecha', { static: true }) flechaDerecha!: ElementRef;
  elementsGaleries: Element[] = []; 
  constructor(private http: HttpClient, private renderer: Renderer2, private communicationService: CommunicationServiceService) {}
  gallery1 = 0;
  gallery2 = 1;
  gallery3 = 2;
  ngOnInit() {
    this.http.get<any>('assets/list/galeryList.json').subscribe(data => {
      this.elementsGaleries = data.elementsGaleries;
      this.iterarElementos();
    });
  }
  imgClick(id: number){
    
    this.imgData(id);
    
  }
  imgData(id: number) {
    this.communicationService.sendItemClick(id);
  }
  iterarElementos() {
    const elementosPorColumnaDerecha = 2;
    for (let i = 0; i < this.elementsGaleries.length; i++) {
      const aux = i;
      const elemento = this.elementsGaleries[i];
      const divElement = this.renderer.createElement('div');
      this.renderer.addClass(divElement, 'h-[57.6rem]');
      this.renderer.addClass(divElement, 'overflow-hidden');
      this.renderer.addClass(divElement, 'rounded-[2.4rem]');
      this.renderer.listen(divElement, 'click', () => this.imgClick(aux));
      const imgElement = this.renderer.createElement('img');
      this.renderer.setAttribute(imgElement, 'src', elemento.url);
      this.renderer.setAttribute(imgElement, 'alt', elemento.nombre);
      this.renderer.appendChild(divElement, imgElement);
      this.renderer.appendChild(this.leftSide.nativeElement, divElement);
      if (i + 1 < this.elementsGaleries.length) {
        const divElement1 = this.renderer.createElement('div');
        this.renderer.addClass(divElement1, 'h-[28rem]');
        this.renderer.addClass(divElement1, 'overflow-hidden');
        this.renderer.addClass(divElement1, 'rounded-[2.4rem]');
        this.renderer.listen(divElement1, 'click', () => this.imgClick(aux+1));
        const imgElement1 = this.renderer.createElement('img');
        this.renderer.setAttribute(imgElement1, 'src', this.elementsGaleries[i+1].url);
        this.renderer.setAttribute(imgElement1, 'alt', this.elementsGaleries[i+1].nombre);
        this.renderer.appendChild(divElement1, imgElement1);
        this.renderer.appendChild(this.rightSide.nativeElement, divElement1);
        const divElement2 = this.renderer.createElement('div');
        this.renderer.addClass(divElement2, 'h-[28rem]');
        this.renderer.addClass(divElement2, 'overflow-hidden');
        this.renderer.addClass(divElement2, 'rounded-[2.4rem]');
        this.renderer.listen(divElement2, 'click', () => this.imgClick(aux+2));
        const imgElement2 = this.renderer.createElement('img');
        this.renderer.setAttribute(imgElement2, 'src', this.elementsGaleries[i+2].url);
        this.renderer.setAttribute(imgElement2, 'alt', this.elementsGaleries[i+2].nombre);
        this.renderer.appendChild(divElement2, imgElement2);
        this.renderer.appendChild(this.rightSide.nativeElement, divElement2);
        i += 2;
      }
    }
  }
  
  
  showGalery() {
    console.log('si funciona');
    if(this.more.nativeElement.textContent == '+'){
      this.galeryContainer.nativeElement.classList.remove('h-[58rem]');
      this.galeryContainer.nativeElement.classList.add('h-[175.9rem]');
      this.more.nativeElement.textContent = '-';
    }else{
      this.galeryContainer.nativeElement.classList.remove('h-[175.9rem]');
      this.galeryContainer.nativeElement.classList.add('h-[58rem]');
      this.more.nativeElement.textContent = '+';
    }
  }
  addGalery() {
    let newGallery1 = this.gallery1;
    let newGallery2 = this.gallery2;
    let newGallery3 = this.gallery3;
  
    if (newGallery1 + 1 <= this.elementsGaleries.length - 1) {
      newGallery1 += 1;
    } else {
      newGallery1 = 0;
    }
  
    if (newGallery2 + 1 <= this.elementsGaleries.length - 1) {
      newGallery2 += 1;
    } else {
      newGallery2 = 0;
    }
  
    if (newGallery3 + 1 <= this.elementsGaleries.length - 1) {
      newGallery3 += 1;
    } else {
      newGallery3 = 0;
    }
    this.gallery1 = newGallery1;
    this.gallery2 = newGallery2;
    this.gallery3 = newGallery3;
  }
  lessGalery(){
    if(this.gallery1-1 >= 0){
      this.gallery1 -=1;
    }else{
      this.gallery1 = this.elementsGaleries.length-1;
    }
    if(this.gallery2-1 >= 0){
      this.gallery2 -=1;
    }else{
      this.gallery2 = this.elementsGaleries.length-1;
    }
    if(this.gallery3-1 >= 0){
      this.gallery3 -=1;
    }else{
      this.gallery3 = this.elementsGaleries.length-1;
    }
  }
  
}
