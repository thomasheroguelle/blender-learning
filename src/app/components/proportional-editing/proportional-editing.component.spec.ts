import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProportionalEditingComponent } from './proportional-editing.component';

describe('ProportionalEditingComponent', () => {
  let component: ProportionalEditingComponent;
  let fixture: ComponentFixture<ProportionalEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProportionalEditingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProportionalEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
