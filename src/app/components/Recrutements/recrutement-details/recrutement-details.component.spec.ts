import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementDetailsComponent } from './recrutement-details.component';

describe('RecrutementDetailsComponent', () => {
  let component: RecrutementDetailsComponent;
  let fixture: ComponentFixture<RecrutementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecrutementDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecrutementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
