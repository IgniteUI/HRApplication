import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxToggleModule, IgxAvatarModule, IgxAvatarModule, IgxDialogModule, IgxCardModule, IgxCardModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxSwitchModule, IgxSwitchModule, IgxButtonModule, IgxRippleModule, IgxToggleModule } from '@infragistics/igniteui-angular';
import { MasterPageComponent } from './master-page.component';

describe('MasterPageComponent', () => {
  let component: MasterPageComponent;
  let fixture: ComponentFixture<MasterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPageComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxAvatarModule, IgxToggleModule, IgxAvatarModule, IgxAvatarModule, IgxDialogModule, IgxCardModule, IgxCardModule, IgxCheckboxModule, IgxCheckboxModule, IgxCheckboxModule, IgxSwitchModule, IgxSwitchModule, IgxButtonModule, IgxRippleModule, IgxToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
