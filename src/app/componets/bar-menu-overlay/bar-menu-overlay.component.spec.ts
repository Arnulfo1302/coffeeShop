import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarMenuOverlayComponent } from './bar-menu-overlay.component';

describe('BarMenuOverlayComponent', () => {
  let component: BarMenuOverlayComponent;
  let fixture: ComponentFixture<BarMenuOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarMenuOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarMenuOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
