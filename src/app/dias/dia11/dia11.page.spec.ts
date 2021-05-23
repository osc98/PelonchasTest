import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dia11Page } from './dia11.page';

describe('Dia11Page', () => {
  let component: Dia11Page;
  let fixture: ComponentFixture<Dia11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dia11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
