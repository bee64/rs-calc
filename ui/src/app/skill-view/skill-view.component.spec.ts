import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillViewComponent } from './skill-view.component';

describe('SkillViewComponent', () => {
  let component: SkillViewComponent;
  let fixture: ComponentFixture<SkillViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
