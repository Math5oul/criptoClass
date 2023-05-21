import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainModalComponent } from './explain-modal.component';

describe('ExplainModalComponent', () => {
  let component: ExplainModalComponent;
  let fixture: ComponentFixture<ExplainModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplainModalComponent]
    });
    fixture = TestBed.createComponent(ExplainModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
