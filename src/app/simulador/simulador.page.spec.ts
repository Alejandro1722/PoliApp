import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimuladorPage } from './simulador.page';

describe('SimuladorPage', () => {
  let component: SimuladorPage;
  let fixture: ComponentFixture<SimuladorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimuladorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
