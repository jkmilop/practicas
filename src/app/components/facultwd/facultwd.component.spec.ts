import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultwdComponent } from './facultwd.component';

describe('FacultwdComponent', () => {
  let component: FacultwdComponent;
  let fixture: ComponentFixture<FacultwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
