import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeConnexionComponent } from './type-connexion.component';

describe('TypeConnexionComponent', () => {
  let component: TypeConnexionComponent;
  let fixture: ComponentFixture<TypeConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeConnexionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
