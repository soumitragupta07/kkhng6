import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmarttableMainComponent } from './smarttable-main.component';

describe('SmarttableMainComponent', () => {
  let component: SmarttableMainComponent;
  let fixture: ComponentFixture<SmarttableMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmarttableMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmarttableMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
