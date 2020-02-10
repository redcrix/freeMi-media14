import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpNav2Page } from './sign-up-nav2.page';

describe('SignUpNav2Page', () => {
  let component: SignUpNav2Page;
  let fixture: ComponentFixture<SignUpNav2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpNav2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpNav2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
