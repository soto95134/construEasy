import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndEditModalComponent } from './create-and-edit-modal.component';

describe('CreateAndEditModalComponent', () => {
  let component: CreateAndEditModalComponent;
  let fixture: ComponentFixture<CreateAndEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAndEditModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAndEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
