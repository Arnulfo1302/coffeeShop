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
  sections: number = 0;
  selectedSection: number = 1;
  auxIdx: number = 0;
  constructor(private http: HttpClient, private renderer: Renderer2, private communicationService: CommunicationServiceService) {}
  gallery1 = 0;
  gallery2 = 0;
  gallery3 = 0;
  ngOnInit() {
    this.http.get<any>('assets/list/galeryList.json').subscribe(data => {
      this.elementsGaleries = data.elementsGaleries;
      this.sections = this.elementsGaleries.length/3;
    });
  }
  imgClick(id: number){
    this.imgData(id);
  }
  shouldApplyClass(index: number): any {
    this.auxIdx = index;
    console.log(index + 1 === this.selectedSection);
    console.log(this.selectedSection);
    console.log(index);
    if (index + 1 === this.selectedSection) {
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
  selected(index: number){
    if(this.gallery1 <= 2){
      this.selectedSection = 1;
    }
    if(this.gallery1 > 2 && this.gallery1 <= 5){
      this.selectedSection = 2;
    }
    if(this.gallery1 > 5 && this.gallery1 <= 8){
      this.selectedSection = 3;
    }
    this.shouldApplyClass(index);
  }
  imgData(id: number) {
    this.communicationService.sendItemClick(id);
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
    this.gallery1 = newGallery1;
    this.gallery2 = newGallery2;
    this.gallery3 = newGallery3;
    this.selected(this.auxIdx);
  }
  lessGalery(){
    if(this.gallery1-3 >= 0){
      this.gallery1 -=3;
    }else{
      this.gallery1 = this.elementsGaleries.length-1;
    }
    if(this.gallery2-3 >= 0){
      this.gallery2 -=3;
    }else{
      this.gallery2 = this.elementsGaleries.length-1;
    }
    if(this.gallery3-3 >= 0){
      this.gallery3 -=3;
    }else{
      this.gallery3 = this.elementsGaleries.length-1;
    }
    this.selected(this.auxIdx);
  }
}
