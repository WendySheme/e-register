import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportModalComponentComponent } from './export-modal-component.component';

describe('ExportModalComponentComponent', () => {
  let component: ExportModalComponentComponent;
  let fixture: ComponentFixture<ExportModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportModalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
