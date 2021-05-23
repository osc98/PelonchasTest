import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dia8Page } from './dia8.page';

describe('Dia8Page', () => {
  let component: Dia8Page;
  let fixture: ComponentFixture<Dia8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dia8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
