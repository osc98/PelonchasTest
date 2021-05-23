import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dia5Page } from './dia5.page';

describe('Dia5Page', () => {
  let component: Dia5Page;
  let fixture: ComponentFixture<Dia5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dia5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
