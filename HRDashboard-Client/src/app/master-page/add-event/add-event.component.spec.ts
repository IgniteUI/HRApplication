import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { AddEventComponent } from './add-event.component';

describe('AddEventComponent', () => {
  let component: AddEventComponent;
  let fixture: ComponentFixture<AddEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEventComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
