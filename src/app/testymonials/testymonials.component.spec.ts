import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestymonialsComponent } from './testymonials.component';

describe('TestymonialsComponent', () => {
  let component: TestymonialsComponent;
  let fixture: ComponentFixture<TestymonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestymonialsComponent]
    });
    fixture = TestBed.createComponent(TestymonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
