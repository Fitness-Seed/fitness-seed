import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpperBodyComponent } from './upper-body.component';

describe('UpperBodyComponent', () => {
  let component: UpperBodyComponent;
  let fixture: ComponentFixture<UpperBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperBodyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpperBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
