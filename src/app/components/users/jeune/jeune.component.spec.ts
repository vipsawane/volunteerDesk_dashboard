import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuneComponent } from './jeune.component';

describe('JeuneComponent', () => {
  let component: JeuneComponent;
  let fixture: ComponentFixture<JeuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeuneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
