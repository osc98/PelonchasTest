import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dia7Page } from './dia7.page';

describe('Dia7Page', () => {
  let component: Dia7Page;
  let fixture: ComponentFixture<Dia7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dia7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
