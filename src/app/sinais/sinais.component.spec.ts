import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinaisComponent } from './sinais.component';

describe('SinaisComponent', () => {
  let component: SinaisComponent;
  let fixture: ComponentFixture<SinaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
