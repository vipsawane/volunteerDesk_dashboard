import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceDetailsComponent } from './ressource-details.component';

describe('RessourceDetailsComponent', () => {
  let component: RessourceDetailsComponent;
  let fixture: ComponentFixture<RessourceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourceDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
