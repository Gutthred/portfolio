import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectspageComponent } from './projectspage.component';

describe('ProjectspageComponent', () => {
  let component: ProjectspageComponent;
  let fixture: ComponentFixture<ProjectspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
