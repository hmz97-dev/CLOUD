import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelateAllComponent } from './delate-all.component';

describe('DelateAllComponent', () => {
  let component: DelateAllComponent;
  let fixture: ComponentFixture<DelateAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelateAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelateAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
