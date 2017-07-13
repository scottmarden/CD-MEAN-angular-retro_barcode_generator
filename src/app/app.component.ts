import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Retro Barcode Generator';
	colors: Array<string> = ['red', 'green', 'blue', 'seagreen', 'aqua', 'blueViolet', 'purple', 'DarkRed']

	shuffleArr(arr){
		let currentIndex = arr.length, temporaryValue, randomIndex;

		while(0 !== currentIndex){
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = arr[currentIndex];
			arr[currentIndex] = arr[randomIndex];
			arr[randomIndex] = temporaryValue;
		}
		return arr;
	}
}
