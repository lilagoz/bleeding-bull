import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputExComponent } from './text-input-ex.component';

describe('TextInputExComponent', () => {
  let component: TextInputExComponent;
  let fixture: ComponentFixture<TextInputExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInputExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
