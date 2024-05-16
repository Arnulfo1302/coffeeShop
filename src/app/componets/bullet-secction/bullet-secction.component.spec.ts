import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletSecctionComponent } from './bullet-secction.component';

describe('BulletSecctionComponent', () => {
  let component: BulletSecctionComponent;
  let fixture: ComponentFixture<BulletSecctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulletSecctionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulletSecctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
