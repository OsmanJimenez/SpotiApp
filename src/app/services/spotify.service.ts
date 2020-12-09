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
      'Authorization': 'Bearer BQCYb1V7KBhs9vdcXSGmrUs3RtsEi5H-EcjPU8qv4L13UxsvDhK90aIa63Eu6S8JVyh_IX8P8BTAGAgvD6M'
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

