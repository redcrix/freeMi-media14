import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpNav1Page } from './sign-up-nav1.page';

describe('SignUpNav1Page', () => {
  let component: SignUpNav1Page;
  let fixture: ComponentFixture<SignUpNav1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpNav1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpNav1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
