import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {
  private itemClickedSource = new Subject<{id: number}>();
  private snapScroll = new Subject<void>();
  snapScroll$ = this.snapScroll.asObservable();
  itemClicked$ = this.itemClickedSource.asObservable();

  constructor() {}

  sendItemClick(id: number) {
    this.itemClickedSource.next({id});
    this.setScroll();
  }

  setScroll() {
    console.log('comunication');
    this.snapScroll.next();
  }

}
