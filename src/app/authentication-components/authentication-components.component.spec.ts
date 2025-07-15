import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponentsComponent } from './authentication-components.component';

describe('AuthenticationComponentsComponent', () => {
  let component: AuthenticationComponentsComponent;
  let fixture: ComponentFixture<AuthenticationComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
