import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
    @Input() countGuess;

    getScore() {
        return Math.floor(this.countGuess / 2);
    }

  constructor() { }

  ngOnInit() {
  }

}
