import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-visualizar-item',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './visualizar-item.component.html',
  styleUrl: './visualizar-item.component.scss'
})
export class VisualizarItemComponent {

  // photo: Photo | any;

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public photo: Photo,
  ) {}

  

  // showPhoto(f: Photo): void {
  //   const dialogRef = this.dialog.open(VisualizarItemComponent, {
  //     data: {photo:f}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
      
  //   });
  // }
}
