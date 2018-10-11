import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesAcNutritionIntakesComponent } from './pes-ac-nutrition-intakes.component';

describe('PesAcNutritionIntakesComponent', () => {
  let component: PesAcNutritionIntakesComponent;
  let fixture: ComponentFixture<PesAcNutritionIntakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesAcNutritionIntakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesAcNutritionIntakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
