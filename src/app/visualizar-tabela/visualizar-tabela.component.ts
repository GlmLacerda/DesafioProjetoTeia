import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Photo } from '../../models/photo';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PhotoMatTableFilterPipe } from '../../pipes/photo-filter.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-visualizar-tabela',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,PhotoMatTableFilterPipe,MatIconModule],
  templateUrl: './visualizar-tabela.component.html',
  styleUrl: './visualizar-tabela.component.scss'
})
export class VisualizarTabelaComponent implements OnInit {

  @Output() showPhoto = new EventEmitter<Photo>();
  @Input() photos:Photo[];
  @Input() inputSearchValue: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'title','thumbnailUrl'];
  keySort:keyof Photo = 'id';
  sortOrder : 'asc' | 'desc'

  // dataSource: MatTableDataSource<Photo>;

  ngOnInit(): void {
  
  }

  updateSortCriteria(key:keyof Photo){
    if(this.keySort == key){
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else{
      this.keySort = key;
    }
  }

  viewPhoto = (f:Photo) => this.showPhoto.emit(f)
  


}
