import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceInformationComponent } from './race-information.component';

describe('RaceInformationComponent', () => {
  let component: RaceInformationComponent;
  let fixture: ComponentFixture<RaceInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
