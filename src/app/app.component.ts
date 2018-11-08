import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stf';

  cards = {
      0: 'src/app/cards/angular.png',
      1: 'src/app/cards/d3.png',
      2: 'src/app/cards/jenkins.png',
      3: 'src/app/cards/postcss.png',
      4: 'src/app/cards/react.png',
      5: 'src/app/cards/redux.png',
      6: 'src/app/cards/sass.png',
      7: 'src/app/cards/supercharge.png',
      8: 'src/app/cards/ts.png',
      9: 'src/app/cards/webpack.png'
  };

  nSizedArray(n: number) {
      return Array.from(new Array(n * 2), (val, index) => index % n);
  }

  flipCard(id: number) {
      console.log(id);
  }
}
