import { Injectable } from '@angular/core';
import { Room } from './room';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private http: HttpClient) { }

  getRooms(parametro: number): Observable<Room> {
    var url: string;
    url = "https://eu-de.functions.appdomain.cloud/api/v1/web/c3f54f07-8e31-43ca-8a55-2d957d654b9d/demo-paas/demo-paas-sequence.json?id=" + parametro;
    console.log("url", url);
    return this.http.get<Room>(url)
      .pipe(
        tap(_ => console.log('fetched cloudant'))
      );

  }
}


