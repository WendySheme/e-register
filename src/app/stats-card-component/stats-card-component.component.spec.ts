import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCardComponentComponent } from './stats-card-component.component';

describe('StatsCardComponentComponent', () => {
  let component: StatsCardComponentComponent;
  let fixture: ComponentFixture<StatsCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
