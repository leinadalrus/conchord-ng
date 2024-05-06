import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavmenusComponent } from './navmenus.component';

describe('NavmenusComponent', () => {
  let component: NavmenusComponent;
  let fixture: ComponentFixture<NavmenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavmenusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
