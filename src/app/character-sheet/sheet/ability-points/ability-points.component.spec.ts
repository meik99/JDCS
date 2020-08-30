import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityPointsComponent } from './ability-points.component';

describe('AbilityPointsComponent', () => {
  let component: AbilityPointsComponent;
  let fixture: ComponentFixture<AbilityPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilityPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
