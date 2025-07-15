import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorDashboardComponentComponent } from './tutor-dashboard-component.component';

describe('TutorDashboardComponentComponent', () => {
  let component: TutorDashboardComponentComponent;
  let fixture: ComponentFixture<TutorDashboardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorDashboardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorDashboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
