import {Component, input, Input, output} from '@angular/core';
import {VideoGame} from '../../../../models/video-game';
import {NgIf} from '@angular/common';

@Component({
  selector: 'dtbc-table-games',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.css'
})
export class TableGamesComponent {
  title = input<String>('');
  items = input.required<VideoGame[]>();
  toCreate = output<VideoGame>();

  clickToAddNewVideoGame(): void {
    let videoGame: VideoGame = {
      name: 'Toto',
      releaseDate: new Date()
    };
    this.toCreate.emit(videoGame)
  }
}
