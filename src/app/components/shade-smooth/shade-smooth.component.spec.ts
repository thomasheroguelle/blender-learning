import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeSmoothComponent } from './shade-smooth.component';

describe('ShadeSmoothComponent', () => {
  let component: ShadeSmoothComponent;
  let fixture: ComponentFixture<ShadeSmoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadeSmoothComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShadeSmoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
