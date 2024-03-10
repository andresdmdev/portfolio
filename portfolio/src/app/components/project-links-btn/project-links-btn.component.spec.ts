import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLinksBtnComponent } from './project-links-btn.component';

describe('ProjectLinksBtnComponent', () => {
  let component: ProjectLinksBtnComponent;
  let fixture: ComponentFixture<ProjectLinksBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectLinksBtnComponent]
    });
    fixture = TestBed.createComponent(ProjectLinksBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
