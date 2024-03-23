import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarTabelaComponent } from './visualizar-tabela.component';

describe('VisualizarTabelaComponent', () => {
  let component: VisualizarTabelaComponent;
  let fixture: ComponentFixture<VisualizarTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarTabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
