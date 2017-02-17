import { Component } from '@angular/core';

import { Collectible } from './collectible-item';

@Component({
	moduleId: module.id,
	selector: 'collectible-form',
	templateUrl: './collectible-form.component.html'
})
export class CollectibleFormComponent {
	value = ['High Dollar Value', 'Family Heirloom', 'Keepsake', 'No Worth'];

	model = new Collectible(2, 'Album', 'Grandpa Garys baby album from 1944', this.value[2], 'Hall Closet');

	submitted = false;

	onSubmit() { this.submitted = true; }

	get diagnostic() { return JSON.stringify(this.model); }

}	
