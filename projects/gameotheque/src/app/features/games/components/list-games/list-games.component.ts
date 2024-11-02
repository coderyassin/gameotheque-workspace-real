import {Component, signal} from '@angular/core';
import {VideoGame} from '../../../../models/video-game';
import {TableGamesComponent} from '../table-games/table-games.component';
import {NgIf} from '@angular/common';
import {CreateVideoGameComponent} from '../create-video-game/create-video-game.component';

@Component({
  selector: 'dtbc-list-games',
  standalone: true,
  imports: [
    TableGamesComponent,
    NgIf,
    CreateVideoGameComponent
  ],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent {
  readyToCreate = signal<boolean>(true);
  title: String = "List of my video games";
  videoGameList: VideoGame[] = [
    {
      name: 'Final fantasy 7',
      releaseDate: new Date()
    },
    {
      name: 'Abe',
      releaseDate: new Date()
    },
    {
      name: 'Raise of Tomb Raider',
      releaseDate: new Date()
    }
  ];

  prepareCreation(videoGame: VideoGame) {
    this.readyToCreate.set(true);
    this.videoGameList.push(videoGame);
  }
}
