import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEvenementComponent } from './type-evenement.component';

describe('TypeEvenementComponent', () => {
  let component: TypeEvenementComponent;
  let fixture: ComponentFixture<TypeEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeEvenementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
