import {Component, inject, OnInit, signal} from '@angular/core';
import {VideoGame} from '../../models/video-game';
import {TableGamesComponent} from '../table-games/table-games.component';
import {NgIf} from '@angular/common';
import {CreateVideoGameComponent} from '../create-video-game/create-video-game.component';
import {GetAllVideoGamesService} from '../../services/get-all-video-games.service';
import {firstValueFrom} from 'rxjs';
import {MainFiltersComponent} from '../main-filters/main-filters.component';

@Component({
  selector: 'dtbc-list-games',
  standalone: true,
  imports: [
    TableGamesComponent,
    NgIf,
    CreateVideoGameComponent,
    MainFiltersComponent
  ],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent implements OnInit {
  readyToCreate = signal<boolean>(true);
  title = signal<string>('List of my video games');
  videoGameList: VideoGame[] | undefined = [];

  private readonly getAllVideoGamesService = inject(GetAllVideoGamesService);

  async ngOnInit(): Promise<void> {
    try {
      try {
        this.videoGameList = await firstValueFrom(this.getAllVideoGamesService.getGames());
      } catch (error) {
        console.error('Failed to load video games:', error);
      }
    } catch (error) {
      console.error('Failed to load video games:', error);
    }
  }

  prepareCreation(videoGame: VideoGame) {
    this.readyToCreate.set(true);
    if (this.videoGameList) {
      this.videoGameList.push(videoGame);
    } else {
      console.error('Cannot add an undefined video game');
    }
  }
}
