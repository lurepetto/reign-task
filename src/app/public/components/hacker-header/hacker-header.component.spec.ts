import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerHeaderComponent } from './hacker-header.component';

describe('HackerHeaderComponent', () => {
  let component: HackerHeaderComponent;
  let fixture: ComponentFixture<HackerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
