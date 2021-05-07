import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCharacteristicComponent } from './update-characteristic.component';

describe('UpdateCharacteristicComponent', () => {
  let component: UpdateCharacteristicComponent;
  let fixture: ComponentFixture<UpdateCharacteristicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCharacteristicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCharacteristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
