import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMasterComponent } from './food-master.component';

describe('FoodMasterComponent', () => {
  let component: FoodMasterComponent;
  let fixture: ComponentFixture<FoodMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
