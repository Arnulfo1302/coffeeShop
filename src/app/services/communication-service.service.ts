import { Injectable,Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {
  private itemClickedSource = new Subject<{id: number}>();
  private snapScroll = new Subject<void>();
  private barOverlay = new Subject<{n: number}>();
  snapScroll$ = this.snapScroll.asObservable();
  itemClicked$ = this.itemClickedSource.asObservable();
  barOverlay$ = this.barOverlay.asObservable();

  constructor() {}

  sendItemClick(id: number) {
    this.itemClickedSource.next({id});
    this.setScroll();
  }

  setScroll() {
    console.log('comunication');
    this.snapScroll.next();
  }

  barMenu(n: number){
    this.barOverlay.next({n});
  }

}
