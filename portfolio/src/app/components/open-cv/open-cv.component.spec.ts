import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCvComponent } from './open-cv.component';

describe('OpenCvComponent', () => {
  let component: OpenCvComponent;
  let fixture: ComponentFixture<OpenCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenCvComponent]
    });
    fixture = TestBed.createComponent(OpenCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
