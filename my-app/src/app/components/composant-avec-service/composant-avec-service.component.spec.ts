import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantAvecServiceComponent } from './composant-avec-service.component';

describe('ComposantAvecServiceComponent', () => {
  let component: ComposantAvecServiceComponent;
  let fixture: ComponentFixture<ComposantAvecServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantAvecServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComposantAvecServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
