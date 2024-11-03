import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'dtbc-learning-what-about-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './learning-what-about-rxjs.component.html',
  styleUrl: './learning-what-about-rxjs.component.css'
})
export class LearningWhatAboutRxjsComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();
  myPromise = new Promise<string>((resolve, reject) => {
    console.info('PROMISE');
    resolve("YASSIN");
  });
  ships = new Observable(subscriber => {
    console.info('OBSERVABLE')
  });

  ngOnInit(): void {
    console.info('START INIT');

    let subscription = this.ships.subscribe();
    this.subscription.add(subscription);

    this.myPromise.then((data) => {
        console.info(data + ' MELLOUKI')
      },
      (error) => {
        console.error(error);
      }
    );

    console.info('END INIT');
  }

  ngOnDestroy(): void {
    console.info('DESTROY');
    this.subscription.unsubscribe();
  }
}
