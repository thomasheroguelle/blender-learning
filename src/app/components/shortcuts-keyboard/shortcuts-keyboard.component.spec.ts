import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutsKeyboardComponent } from './shortcuts-keyboard.component';

describe('ShortcutsKeyboardComponent', () => {
  let component: ShortcutsKeyboardComponent;
  let fixture: ComponentFixture<ShortcutsKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortcutsKeyboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortcutsKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
