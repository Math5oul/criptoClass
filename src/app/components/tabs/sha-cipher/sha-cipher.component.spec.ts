import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaCipherComponent } from './sha-cipher.component';

describe('ShaCipherComponent', () => {
  let component: ShaCipherComponent;
  let fixture: ComponentFixture<ShaCipherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShaCipherComponent]
    });
    fixture = TestBed.createComponent(ShaCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
