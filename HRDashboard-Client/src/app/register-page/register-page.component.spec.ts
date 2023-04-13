import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
