import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdivisionSurfaceModifierComponent } from './subdivision-surface-modifier.component';

describe('SubdivisionSurfaceModifierComponent', () => {
  let component: SubdivisionSurfaceModifierComponent;
  let fixture: ComponentFixture<SubdivisionSurfaceModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubdivisionSurfaceModifierComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubdivisionSurfaceModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
