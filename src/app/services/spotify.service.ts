import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient ) { 
    console.log('Spotify service listo')
  }

  getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

    //Token Spotify
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCEoaJ_17U83bP8BAqWVHdWNcoomif-RRPOHHLKtsWKHvtBdIsTxf7g4-eMn82I9Rz2Bp0ao40iInRby98'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data =>data['albums'].items));
        
  }

  getArtista(termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist`)
               .pipe( map( data => data['artists'].items));
    
  }
}

