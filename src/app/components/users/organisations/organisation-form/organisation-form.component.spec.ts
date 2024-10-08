import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationFormComponent } from './organisation-form.component';

describe('OrganisationFormComponent', () => {
  let component: OrganisationFormComponent;
  let fixture: ComponentFixture<OrganisationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
