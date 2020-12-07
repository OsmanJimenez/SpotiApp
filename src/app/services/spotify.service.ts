import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient ) { 
    console.log('Spotify service listo')
  }

  getNewReleases(){

    //Token Spotify
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBrube0ImKoVns4KDBTaH0dnMSx_RLwK0Gx3Bab1Xsk4ayNn-bAeuF8dZLnbbo3ht5iTeEnYRPrrncJiCo'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers});
        
  }
}

