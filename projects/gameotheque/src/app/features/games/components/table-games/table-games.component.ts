import {Component, input, Input} from '@angular/core';
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
  //@Input() items?: VideoGame[];
  items = input.required<VideoGame[]>();
}
