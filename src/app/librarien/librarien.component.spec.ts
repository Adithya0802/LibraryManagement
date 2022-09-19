import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarienComponent } from './librarien.component';

describe('LibrarienComponent', () => {
  let component: LibrarienComponent;
  let fixture: ComponentFixture<LibrarienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
