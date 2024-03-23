import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-visualizar-cards',
  standalone: true,
  imports: [],
  templateUrl: './visualizar-cards.component.html',
  styleUrl: './visualizar-cards.component.scss'
})
export class VisualizarCardsComponent {
  
  @Output() showPhoto = new EventEmitter<Photo>();
  @Input() photos: Photo[];

  showSize = 40;

  renderNextPage = () => this.showSize +=40;

  viewPhoto = (f:Photo) => this.showPhoto.emit(f)
}
