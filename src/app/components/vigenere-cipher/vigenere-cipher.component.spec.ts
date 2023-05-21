import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigenereCipherComponent } from './vigenere-cipher.component';

describe('VigenereCipherComponent', () => {
  let component: VigenereCipherComponent;
  let fixture: ComponentFixture<VigenereCipherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VigenereCipherComponent]
    });
    fixture = TestBed.createComponent(VigenereCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
