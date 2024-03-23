import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../models/photo';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import  _ from 'lodash';

@Pipe({
  name: 'photoFilter',
  standalone: true
})
export class PhotoFilterPipe implements PipeTransform {

  transform(photos: Photo[], searchWord = ''): Photo[] {
    if(searchWord && searchWord.trim().length > 0){
      return photos.filter(c => c.title.toUpperCase().includes(searchWord.toUpperCase()))
    }
    return photos;
  }

}

@Pipe({
  name: 'photoMatTableFilterPipe',
  standalone: true
})
export class PhotoMatTableFilterPipe implements PipeTransform {

  transform(
      photos: Photo[],
      paginator: MatPaginator, 
      searchWord = '', 
      keySort:keyof Photo = 'id', 
      sortOrder : 'asc' | 'desc' = 'asc'):  MatTableDataSource<Photo> {
    if(searchWord && searchWord.trim().length > 0){
      photos = photos.filter(c => c.title.toUpperCase().includes(searchWord.toUpperCase()))
    }

    photos = _.orderBy(photos,c => c[keySort],sortOrder);
    
        
    let rtn = new MatTableDataSource<Photo>(photos);
    rtn.paginator = paginator;    
    return rtn;
  }

}
