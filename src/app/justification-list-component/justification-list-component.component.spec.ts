import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificationListComponentComponent } from './justification-list-component.component';

describe('JustificationListComponentComponent', () => {
  let component: JustificationListComponentComponent;
  let fixture: ComponentFixture<JustificationListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JustificationListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustificationListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
