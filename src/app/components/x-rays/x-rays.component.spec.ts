import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XRaysComponent } from './x-rays.component';

describe('XRaysComponent', () => {
  let component: XRaysComponent;
  let fixture: ComponentFixture<XRaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XRaysComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(XRaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
