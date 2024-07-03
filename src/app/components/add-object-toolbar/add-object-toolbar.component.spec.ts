import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObjectToolbarComponent } from './add-object-toolbar.component';

describe('AddObjectToolbarComponent', () => {
  let component: AddObjectToolbarComponent;
  let fixture: ComponentFixture<AddObjectToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddObjectToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddObjectToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
