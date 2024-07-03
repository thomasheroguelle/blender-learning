import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatingObjectComponent } from './duplicating-object.component';

describe('DuplicatingObjectComponent', () => {
  let component: DuplicatingObjectComponent;
  let fixture: ComponentFixture<DuplicatingObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicatingObjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DuplicatingObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
