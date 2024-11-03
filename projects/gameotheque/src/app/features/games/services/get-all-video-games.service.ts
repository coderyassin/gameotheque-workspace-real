import {inject, Injectable} from '@angular/core';
import {VideoGame} from '../models/video-game';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetAllVideoGamesService {
  private readonly httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/games';

  constructor() { }

  call(): Promise<VideoGame[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const videoGameList: VideoGame[] = [
          {
            name: 'Final Fantasy 7',
            releaseDate: new Date()
          },
          {
            name: 'Abe',
            releaseDate: new Date()
          },
          {
            name: 'Rise of Tomb Raider',
            releaseDate: new Date()
          },
          {
            name: 'Minecraft',
            releaseDate: new Date()
          },
          {
            name: 'Elden Ring',
            releaseDate: new Date()
          },
          {
            name: 'The Witcher 3: Wild Hunt',
            releaseDate: new Date()
          }
        ];
        resolve(videoGameList);
      }, 1000);
    });
  }

  getGames(): Observable<VideoGame[]> {
    return this.httpClient.get<VideoGame[]>(environment.apis.videoGame);
  }
}
