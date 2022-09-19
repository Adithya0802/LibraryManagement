import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibregComponent } from './libreg.component';

describe('LibregComponent', () => {
  let component: LibregComponent;
  let fixture: ComponentFixture<LibregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
