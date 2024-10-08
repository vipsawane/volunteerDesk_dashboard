import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscription3Component } from './inscription3.component';

describe('Inscription3Component', () => {
  let component: Inscription3Component;
  let fixture: ComponentFixture<Inscription3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inscription3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inscription3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
