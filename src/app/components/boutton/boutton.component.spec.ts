import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BouttonComponent } from './boutton.component';

describe('BouttonComponent', () => {
  let component: BouttonComponent;
  let fixture: ComponentFixture<BouttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BouttonComponent, CommonModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BouttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
