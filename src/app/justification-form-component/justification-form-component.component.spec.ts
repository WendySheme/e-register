import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificationFormComponentComponent } from './justification-form-component.component';

describe('JustificationFormComponentComponent', () => {
  let component: JustificationFormComponentComponent;
  let fixture: ComponentFixture<JustificationFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustificationFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustificationFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
