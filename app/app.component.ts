import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1>
    <span>Clicks: {{ count }}</span>
    <button (click)="increaseCount()">Click Me</button>
    `
})
export class AppComponent {
	count = 0;
	title = "Hello Earthlings!";

	increaseCount() {
		this.count++;
	}	
}