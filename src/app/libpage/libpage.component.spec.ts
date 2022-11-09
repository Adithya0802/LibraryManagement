import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibpageComponent } from './libpage.component';

describe('LibpageComponent', () => {
  let component: LibpageComponent;
  let fixture: ComponentFixture<LibpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
