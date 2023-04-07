import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigurumiDetailComponent } from './amigurumi-detail.component';

describe('AmigurumiDetailComponent', () => {
  let component: AmigurumiDetailComponent;
  let fixture: ComponentFixture<AmigurumiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmigurumiDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmigurumiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
