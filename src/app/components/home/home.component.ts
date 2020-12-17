import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevascanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) { 
    //preloader
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.nuevascanciones = data;
          this.loading = false;
        }, (errorServicio)=> {
          this.error = true;
          this.loading = false;
          console.log(errorServicio.error.error.message);
          this.mensajeError = errorServicio.error.error.message;
        });
  }

  ngOnInit(): void {
  }

}
