import { Component, ElementRef } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements AfterViewInit {
  @ViewChild('btnEntradas', { static: true }) btnEntradas!: ElementRef;
  @ViewChild('btnBebidas', { static: true }) btnBebidas!: ElementRef;
  @ViewChild('btnPanaderia', { static: true }) btnPanaderia!: ElementRef;
  @ViewChild('btnSandwiches', { static: true }) btnSandwiches!: ElementRef;
  @ViewChild('sectionEntradas', { static: true }) sectionEntradas!: ElementRef;
  @ViewChild('sectionBebidasCafe', { static: true }) sectionBebidasCafe!: ElementRef;
  @ViewChild('sectionPanaderia', { static: true }) sectionPanaderia!: ElementRef;
  @ViewChild('sectionSandwiches', { static: true }) sectionSandwiches!: ElementRef;
  @ViewChild('menuContainer', { static: true }) menuContainer!: ElementRef;
  isLessPx: boolean = false;
  porcentaje: number = .60;
  constructor(private renderer: Renderer2) {
    this.checkScreenWidthAndExecute();
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver(); 
    window.scrollTo(0, 0);
  }

  setupIntersectionObserver() {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
      root: null,
      rootMargin: '-0% 0% -0% 0%',
      threshold: this.porcentaje
    };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const targetElement = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          this.addUnderline(targetElement);
        }else{
          this.removeUnderline(targetElement);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidthAndExecute();
  }

  checkScreenWidthAndExecute() {
    console.log('screen');
    console.log(window.innerWidth);
    if (window.innerWidth < 1025) {
      this.isLessPx = true;
      console.log(this.isLessPx);
      this.porcentaje = .4;
    }
  }
  addUnderline(element: HTMLElement){
    switch (element.id) {
      case 'entradas':
          this.renderer.addClass(this.btnEntradas.nativeElement, 'underline');
          this.renderer.addClass(this.btnEntradas.nativeElement, 'decoration-[#22254C]');
          this.scrollLeft('entradas');
        break;
      case 'bebidasCafe':
          this.renderer.addClass(this.btnBebidas.nativeElement, 'underline');
          this.renderer.addClass(this.btnBebidas.nativeElement, 'decoration-[#22254C]');
          this.scrollLeft('bebidasCafe');
        break;
      case 'sandwiches':
          this.renderer.addClass(this.btnSandwiches.nativeElement, 'underline');
          this.renderer.addClass(this.btnSandwiches.nativeElement, 'decoration-[#22254C]');
          this.scrollLeft('sandwiches');
        break;
        case 'panaderia':
            this.renderer.addClass(this.btnPanaderia.nativeElement, 'underline');
            this.renderer.addClass(this.btnPanaderia.nativeElement, 'decoration-[#22254C]');
            this.scrollLeft('panaderia');
        break;
    }
  }
  removeUnderline(element: HTMLElement){
    switch (element.id) {
      case 'entradas':
        this.renderer.removeClass(this.btnEntradas.nativeElement, 'underline');
        this.renderer.removeClass(this.btnEntradas.nativeElement, 'decoration-[#22254C]');
        break;
      case 'bebidasCafe':
          this.renderer.removeClass(this.btnBebidas.nativeElement, 'underline');
          this.renderer.removeClass(this.btnBebidas.nativeElement, 'decoration-[#22254C]');
        break;
      case 'sandwiches':
          this.renderer.removeClass(this.btnSandwiches.nativeElement, 'underline');
          this.renderer.removeClass(this.btnSandwiches.nativeElement, 'decoration-[#22254C]');
        break;
        case 'panaderia':
            this.renderer.removeClass(this.btnPanaderia.nativeElement, 'underline');
            this.renderer.removeClass(this.btnPanaderia.nativeElement, 'decoration-[#22254C]');
        break;
    }
  }
  scrollToSection(sectionId: string) {
    console.log('Scrolling to '+sectionId)
    const sectionMap: { [key: string]: ElementRef } = {
      'entradas': this.sectionEntradas,
      'bebidasCafe': this.sectionBebidasCafe,
      'sandwiches': this.sectionSandwiches,
      'panaderia': this.sectionPanaderia,
    };
    sectionMap[sectionId].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  scrollLeft(sectionId: string){
    if(this.isLessPx){
      switch (sectionId) {
        case 'entradas':
            this.btnEntradas.nativeElement.scrollIntoView();
          break;
        case 'bebidasCafe':
            this.btnBebidas.nativeElement.scrollIntoView();
          break;
        case 'sandwiches':
            this.btnSandwiches.nativeElement.scrollIntoView();
          break;
          case 'panaderia':
              this.btnPanaderia.nativeElement.scrollIntoView();
          break;
      }
    }
  }
}