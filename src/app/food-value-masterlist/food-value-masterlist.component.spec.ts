import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodValueMasterlistComponent } from './food-value-masterlist.component';

describe('FoodValueMasterlistComponent', () => {
  let component: FoodValueMasterlistComponent;
  let fixture: ComponentFixture<FoodValueMasterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodValueMasterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodValueMasterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
