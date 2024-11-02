import {Component, input} from '@angular/core';
import {VideoGame} from '../../../../models/video-game';

@Component({
  selector: 'dtbc-table-games',
  standalone: true,
  imports: [],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.css'
})
export class TableGamesComponent {
  title = input<String>('');
  items = input.required<VideoGame[]>();
}
