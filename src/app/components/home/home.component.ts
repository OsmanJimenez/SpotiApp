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

  constructor( private spotify: SpotifyService ) { 
    //preloader
    this.loading = true;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.nuevascanciones = data;
          this.loading = false;
        });
  }

  ngOnInit(): void {
  }

}
