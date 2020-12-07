import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevascanciones: any[] = [];

  constructor( private spotify: SpotifyService ) { 
    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          console.log(data.albums.items);
          this.nuevascanciones = data.albums.items;
        });
  }

  ngOnInit(): void {
  }

}
