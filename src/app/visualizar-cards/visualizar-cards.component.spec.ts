import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCardsComponent } from './visualizar-cards.component';

describe('VisualizarCardsComponent', () => {
  let component: VisualizarCardsComponent;
  let fixture: ComponentFixture<VisualizarCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
