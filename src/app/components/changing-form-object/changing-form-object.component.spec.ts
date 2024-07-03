import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingFormObjectComponent } from './changing-form-object.component';

describe('ChangingFormObjectComponent', () => {
  let component: ChangingFormObjectComponent;
  let fixture: ComponentFixture<ChangingFormObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangingFormObjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangingFormObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
