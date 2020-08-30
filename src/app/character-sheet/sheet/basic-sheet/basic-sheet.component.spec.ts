import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSheetComponent } from './basic-sheet.component';

describe('BasicSheetComponent', () => {
  let component: BasicSheetComponent;
  let fixture: ComponentFixture<BasicSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
