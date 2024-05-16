import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgOverlayComponent } from './img-overlay.component';

describe('ImgOverlayComponent', () => {
  let component: ImgOverlayComponent;
  let fixture: ComponentFixture<ImgOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
