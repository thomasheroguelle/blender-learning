import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidifyModifierComponent } from './solidify-modifier.component';

describe('SolidifyModifierComponent', () => {
  let component: SolidifyModifierComponent;
  let fixture: ComponentFixture<SolidifyModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolidifyModifierComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolidifyModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
