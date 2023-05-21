import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeasarCipherComponent } from './ceasar-cipher.component';

describe('CeaserCypherComponent', () => {
  let component: CeasarCipherComponent;
  let fixture: ComponentFixture<CeasarCipherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeasarCipherComponent]
    });
    fixture = TestBed.createComponent(CeasarCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
