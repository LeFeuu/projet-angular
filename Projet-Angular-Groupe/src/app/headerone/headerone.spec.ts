import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerone } from './headerone';

describe('Headerone', () => {
  let component: Headerone;
  let fixture: ComponentFixture<Headerone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headerone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headerone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
