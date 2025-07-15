import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificationApprovalComponentComponent } from './justification-approval-component.component';

describe('JustificationApprovalComponentComponent', () => {
  let component: JustificationApprovalComponentComponent;
  let fixture: ComponentFixture<JustificationApprovalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustificationApprovalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustificationApprovalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
