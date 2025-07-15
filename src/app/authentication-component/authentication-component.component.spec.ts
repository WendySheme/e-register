import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationComponentComponent } from './authentication-component.component';

describe('AuthenticationComponentComponent', () => {
  let component: AuthenticationComponentComponent;
  let fixture: ComponentFixture<AuthenticationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
