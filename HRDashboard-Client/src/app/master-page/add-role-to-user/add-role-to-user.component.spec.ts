import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxSelectModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { AddRoleToUserComponent } from './add-role-to-user.component';

describe('AddRoleToUserComponent', () => {
  let component: AddRoleToUserComponent;
  let fixture: ComponentFixture<AddRoleToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoleToUserComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxSelectModule, IgxInputGroupModule, IgxSelectModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
