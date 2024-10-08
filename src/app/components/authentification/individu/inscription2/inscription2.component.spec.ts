import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscription2Component } from './inscription2.component';

describe('Inscription2Component', () => {
  let component: Inscription2Component;
  let fixture: ComponentFixture<Inscription2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inscription2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inscription2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
