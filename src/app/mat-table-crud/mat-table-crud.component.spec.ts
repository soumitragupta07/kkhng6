import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableCrudComponent } from './mat-table-crud.component';

describe('MatTableCrudComponent', () => {
  let component: MatTableCrudComponent;
  let fixture: ComponentFixture<MatTableCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
