import { JsonPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { take } from 'rxjs/operators';
import { PhotoServiceService } from '../services/photo-service.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VisualizarCardsComponent } from './visualizar-cards/visualizar-cards.component';
import { VisualizarTabelaComponent } from './visualizar-tabela/visualizar-tabela.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Photo } from '../models/photo';
import { PhotoFilterPipe } from '../pipes/photo-filter.pipe';

import { VisualizarItemComponent } from './visualizar-item/visualizar-item.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PhotoFilterPipe, FormsModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatButtonModule, RouterOutlet, JsonPipe, MatProgressSpinnerModule, MatIconModule, VisualizarCardsComponent, VisualizarTabelaComponent,VisualizarItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  erroApi = false;
  photos: Photo[];
  inputSearchValue: string = '';
  modoLista = true;

  constructor(
    private _photService: PhotoServiceService,
    public dialog: MatDialog
    
    ) {
  }

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {

    this._photService.getAll()
      .pipe(
        //delay(1200),
        take(1)
      )
      .subscribe({
        next: photos => {
          this.photos = photos;
        },
        error: () => this.erroApi = true
      })
  }

  recarregar() {
    this.erroApi = false;
    this.loadPhotos();
  }

  visualizarImagem(f:Photo){
    const dialogRef = this.dialog.open(VisualizarItemComponent, {
      data: f,
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}

