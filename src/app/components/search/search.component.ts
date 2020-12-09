import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify :SpotifyService) { }

  buscar(termino:string){
    //preloader
    this.loading = true;
    console.log(termino);
    this.spotify.getArtista(termino)
        .subscribe( (data: any) =>{
          console.log(data);
          this.artistas = data;
          this.loading = false;
        });
  }

  ngOnInit(): void {
  }

}
