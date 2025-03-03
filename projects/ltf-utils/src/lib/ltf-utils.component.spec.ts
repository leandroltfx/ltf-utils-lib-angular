import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtfUtilsComponent } from './ltf-utils.component';

describe('LtfUtilsComponent', () => {
  let component: LtfUtilsComponent;
  let fixture: ComponentFixture<LtfUtilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LtfUtilsComponent]
    });
    fixture = TestBed.createComponent(LtfUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
