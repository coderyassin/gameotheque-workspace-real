import {Component, output} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {VideoGame} from '../../../../models/video-game';

@Component({
  selector: 'dtbc-create-video-game',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-video-game.component.html',
  styleUrl: './create-video-game.component.css'
})
export class CreateVideoGameComponent {
  newVideoGame: VideoGame = {};
  toCreateVideoGame = output<VideoGame>();

  onSubmit(form: NgForm): void {
    if(form.valid) {
      this.toCreateVideoGame.emit(this.newVideoGame);  // Emit the form data to parent
      this.newVideoGame = {}; // Reset the form after submission
      form.resetForm(); // Reset the form for the next input
    }
  }
}
