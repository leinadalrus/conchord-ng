import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlairsComponent } from './flairs.component';

describe('FlairsComponent', () => {
  let component: FlairsComponent;
  let fixture: ComponentFixture<FlairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlairsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
