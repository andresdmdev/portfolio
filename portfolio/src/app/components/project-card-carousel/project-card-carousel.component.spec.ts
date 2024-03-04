import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardCarouselComponent } from './project-card-carousel.component';

describe('ProjectCardCarouselComponent', () => {
  let component: ProjectCardCarouselComponent;
  let fixture: ComponentFixture<ProjectCardCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardCarouselComponent]
    });
    fixture = TestBed.createComponent(ProjectCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
