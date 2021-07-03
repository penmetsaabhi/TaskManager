import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisrationComponent } from './user-regisration.component';

describe('UserRegisrationComponent', () => {
  let component: UserRegisrationComponent;
  let fixture: ComponentFixture<UserRegisrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
