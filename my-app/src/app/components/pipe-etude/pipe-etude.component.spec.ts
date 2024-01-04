import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeEtudeComponent } from './pipe-etude.component';

describe('PipeEtudeComponent', () => {
  let component: PipeEtudeComponent;
  let fixture: ComponentFixture<PipeEtudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeEtudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
