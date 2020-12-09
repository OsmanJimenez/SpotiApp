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
      'Authorization': 'Bearer BQDpe6tJGxpe7q1io_ahMz6OYBA-DQ4uu9w3I52TYzpNhtUBb3-a_XHRGg5e4n4pHfTyxz--4U1ZtUXJaoE'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data =>data['albums'].items));
        
  }

  getArtistas( termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist`)
               .pipe( map( data => data['artists'].items));
    
  }

  getArtista( id:string ){

    return this.getQuery(`artists/${ id }`);
               
    
  }
}

