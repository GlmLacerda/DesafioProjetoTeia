import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarItemComponent } from './visualizar-item.component';

describe('VisualizarItemComponent', () => {
  let component: VisualizarItemComponent;
  let fixture: ComponentFixture<VisualizarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
