import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerNavComponent } from './reviewer-nav.component';

describe('ReviewerNavComponent', () => {
  let component: ReviewerNavComponent;
  let fixture: ComponentFixture<ReviewerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewerNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
