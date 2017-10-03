import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecondCompomentComponent } from './my-second-compoment.component';

describe('MySecondCompomentComponent', () => {
  let component: MySecondCompomentComponent;
  let fixture: ComponentFixture<MySecondCompomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySecondCompomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecondCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
