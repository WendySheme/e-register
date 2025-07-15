import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleSelectionComponentComponent } from './role-selection-component.component';

describe('RoleSelectionComponentComponent', () => {
  let component: RoleSelectionComponentComponent;
  let fixture: ComponentFixture<RoleSelectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleSelectionComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleSelectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
