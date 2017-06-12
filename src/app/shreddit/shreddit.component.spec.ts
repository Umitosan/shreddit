import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShredditComponent } from './shreddit.component';

describe('ShredditComponent', () => {
  let component: ShredditComponent;
  let fixture: ComponentFixture<ShredditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShredditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
