import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stf';

  //  card id, card img path, is downside, is pair
  cards = {
      0: [0, 'src/app/cards/angular.png', true, true],
      1: [1, 'src/app/cards/d3.png', true, true],
      2: [2, 'src/app/cards/jenkins.png', true, true],
      3: [3, 'src/app/cards/postcss.png', true, true],
      4: [4, 'src/app/cards/react.png', true, true],
      5: [5, 'src/app/cards/redux.png', true, true],
      6: [6, 'src/app/cards/sass.png', true, true],
      7: [7, 'src/app/cards/supercharge.png', true, true],
      8: [8, 'src/app/cards/ts.png', true, true],
      9: [9, 'src/app/cards/webpack.png', true, true],
      10: [0, 'src/app/cards/angular.png', true, true],
      11: [1, 'src/app/cards/d3.png', true, true],
      12: [2, 'src/app/cards/jenkins.png', true, true],
      13: [3, 'src/app/cards/postcss.png', true, true],
      14: [4, 'src/app/cards/react.png', true, true],
      15: [5, 'src/app/cards/redux.png', true, true],
      16: [6, 'src/app/cards/sass.png', true, true],
      17: [7, 'src/app/cards/supercharge.png', true, true],
      18: [8, 'src/app/cards/ts.png', true, true],
      19: [9, 'src/app/cards/webpack.png', true, true]
  };

  numOfCards = Object.keys(this.cards).length;
  countGuess = 0;
  guess1 = -1;
  guess2 = -1;
  countPairs = 0;
  prevWasPair = true;

  nSizedArray(n: number) {
      return Array.from(new Array(n), (val, index) => index);
  }

  flipCard(id: number) {
      this.countGuess++;
      this.cards[id][2] = false;
      if (this.countGuess % 2 === 1) {
          if (!this.prevWasPair) {
              this.cards[this.guess1][2] = true;
              this.cards[this.guess2][2] = true;
          }
          this.guess1 = id;
      } else {
          this.guess2 = id;
          this.checkIfPair();
      }
  }

  checkIfPair() {
      if (this.cards[this.guess1][0] === this.cards[this.guess2][0]) {
          this.countPairs++;
          this.prevWasPair = true;
          if (this.isWin()) {
              console.log('win');
          }
      } else {
          this.prevWasPair = false;
      }
  }

  isWin() {
      return this.numOfCards / 2 === this.countPairs;
  }

}
