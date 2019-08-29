import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelInputComponent } from './level-input.component';

describe('LevelInputComponent', () => {
  let component: LevelInputComponent;
  let fixture: ComponentFixture<LevelInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
