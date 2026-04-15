import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAddTaskComponent } from './input-add-task.component';

describe('InputAddTaskComponent', () => {
  let component: InputAddTaskComponent;
  let fixture: ComponentFixture<InputAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAddTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
