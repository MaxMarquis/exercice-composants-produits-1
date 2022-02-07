import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormulaireProduitsComponent } from './dialog-formulaire-produits.component';

describe('DialogFormulaireProduitsComponent', () => {
  let component: DialogFormulaireProduitsComponent;
  let fixture: ComponentFixture<DialogFormulaireProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFormulaireProduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormulaireProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
