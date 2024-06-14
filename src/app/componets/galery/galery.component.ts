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
  @ViewChild('ghostGalery', { static: true }) ghostGalery!: ElementRef;
  @ViewChild('galery1', { static: true }) galery1!: ElementRef;
  @ViewChild('galery2', { static: true }) galery2!: ElementRef;
  @ViewChild('galery3', { static: true }) galery3!: ElementRef;
  elementsGaleries: Element[] = [];
  sections: number = 0;
  selectedSection: number = 0;
  auxIdx: number = 0;
  constructor(private http: HttpClient, private renderer: Renderer2, private communicationService: CommunicationServiceService) {}
  gallery1 = 0;
  gallery2 = 0;
  gallery3 = 0;
  ngOnInit() {
    this.http.get<any>('assets/list/galeryList.json').subscribe(data => {
      this.elementsGaleries = data.elementsGaleries;
      this.sections = Math.ceil(this.elementsGaleries.length / 3);
      this.selectedSection = 0;
    });
  }
  imgClick(id: number){
    this.imgData(id);
  }
  shouldApplyClass(index: number): any {
    console.log('should apli index: '+index)
    console.log('should selected: '+this.selectedSection)
    if (index === this.selectedSection) {
      return {
        'border-[#555555]': true,
        'border-[#fff]': false
      };
    } else {
      return {
        'border-[#fff]': true,
        'border-[#555555]': false
      };
    }
  }

  selected() {
    this.selectedSection = Math.floor(this.gallery1 / 3);
  }
  imgData(id: number) {
    this.communicationService.sendItemClick(id);
  }
  addGalery() {
    this.disapearImg();
    let newGallery1 = this.gallery1;
    let newGallery2 = this.gallery2;
    let newGallery3 = this.gallery3;
    if (newGallery1 + 3 <= this.elementsGaleries.length - 1) {
      newGallery1 += 3;
    } else {
      newGallery1 = 0;
    }
  
    if (newGallery2 + 3 <= this.elementsGaleries.length - 1) {
      newGallery2 += 3;
    } else {
      newGallery2 = 0;
    }
  
    if (newGallery3 + 3 <= this.elementsGaleries.length - 1) {
      newGallery3 += 3;
    } else {
      newGallery3 = 0;
    }
    setTimeout(() => {
      this.gallery1 = newGallery1;
      this.gallery2 = newGallery2;
      this.gallery3 = newGallery3;
      this.apearImg();
      this.selected();
    }, 600);
  }
  lessGalery(){
    let newGallery1 = this.gallery1;
    let newGallery2 = this.gallery2;
    let newGallery3 = this.gallery3;
    this.disapearImg();
    if(newGallery1-3 >= 0){
      newGallery1 -=3;
    }else{
      newGallery1 = this.elementsGaleries.length-1;
    }
    if(newGallery2-3 >= 0){
      newGallery2 -=3;
    }else{
      newGallery2 = this.elementsGaleries.length-1;
    }
    if(newGallery3-3 >= 0){
      newGallery3 -=3;
    }else{
      newGallery3 = this.elementsGaleries.length-1;
    }
    this.selected();
    setTimeout(() => {
      this.gallery1 = newGallery1;
      this.gallery2 = newGallery2;
      this.gallery3 = newGallery3;
      this.apearImg();
    }, 600);
  }
  disapearImg(){
    this.renderer.removeClass(this.galery1.nativeElement, "h-[58.5rem]")
    this.renderer.removeClass(this.galery1.nativeElement, "max-[768px]:h-[46.5rem]")
    this.renderer.removeClass(this.galery1.nativeElement, "max-[1024px]:h-[36rem]")
    this.renderer.removeClass(this.galery1.nativeElement, "max-[1440px]:h-[46.5rem]")
    this.renderer.addClass(this.galery1.nativeElement, "h-[0rem]")
  

    this.renderer.removeClass(this.galery2.nativeElement, "h-[63.4rem]")
    this.renderer.removeClass(this.galery2.nativeElement, "max-[768px]:h-[46.5rem]")
    this.renderer.removeClass(this.galery2.nativeElement, "max-[1024px]:h-[42rem]")
    this.renderer.removeClass(this.galery2.nativeElement, "max-[1440px]:h-[57.4rem]")
    this.renderer.addClass(this.galery2.nativeElement, "h-[0rem]")

    this.renderer.removeClass(this.galery3.nativeElement, "h-[58.5rem]")
    this.renderer.removeClass(this.galery3.nativeElement, "max-[768px]:h-[46.5rem]")
    this.renderer.removeClass(this.galery3.nativeElement, "max-[1024px]:h-[36rem]")
    this.renderer.removeClass(this.galery3.nativeElement, "max-[1440px]:h-[46.5rem]")
    this.renderer.addClass(this.galery3.nativeElement, "h-[0rem]")
    console.log('disapearing')
  }
  apearImg(){
    this.renderer.removeClass(this.galery1.nativeElement, "h-[0rem]")
    this.renderer.addClass(this.galery1.nativeElement, "h-[58.5rem]")
    this.renderer.addClass(this.galery1.nativeElement, "max-[768px]:h-[46.5rem]")
    this.renderer.addClass(this.galery1.nativeElement, "max-[1024px]:h-[36rem]")
    this.renderer.addClass(this.galery1.nativeElement, "max-[1440px]:h-[46.5rem]")

    this.renderer.removeClass(this.galery2.nativeElement, "h-[0rem]")
    this.renderer.addClass(this.galery2.nativeElement, "h-[63.4rem]")
    this.renderer.addClass(this.galery2.nativeElement, "max-[768px]:h-[46.5rem]")
    this.renderer.addClass(this.galery2.nativeElement, "max-[1024px]:h-[42rem]")
    this.renderer.addClass(this.galery2.nativeElement, "max-[1440px]:h-[57.4rem]")

    this.renderer.removeClass(this.galery3.nativeElement, "h-[0rem]")
    this.renderer.addClass(this.galery3.nativeElement, "h-[58.5rem]")
    this.renderer.addClass(this.galery3.nativeElement, "max-[768px]:h-[46.5rem]")
    this.renderer.addClass(this.galery3.nativeElement, "max-[1024px]:h-[36rem]")
    this.renderer.addClass(this.galery3.nativeElement, "max-[1440px]:h-[46.5rem]")
    console.log('disapearing')
  }
}
