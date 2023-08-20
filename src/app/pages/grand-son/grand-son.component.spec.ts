import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandSonComponent } from './grand-son.component';

describe('GrandSonComponent', () => {
  let component: GrandSonComponent;
  let fixture: ComponentFixture<GrandSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
