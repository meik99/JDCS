import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencySheetComponent } from './proficiency-sheet.component';

describe('ProficiencySheetComponent', () => {
  let component: ProficiencySheetComponent;
  let fixture: ComponentFixture<ProficiencySheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProficiencySheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProficiencySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
