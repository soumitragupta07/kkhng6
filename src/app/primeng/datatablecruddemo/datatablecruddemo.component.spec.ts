import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablecruddemoComponent } from './datatablecruddemo.component';

describe('DatatablecruddemoComponent', () => {
  let component: DatatablecruddemoComponent;
  let fixture: ComponentFixture<DatatablecruddemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablecruddemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablecruddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
