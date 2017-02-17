export class Collectible {

	constructor(
		public id: number,
		public name: string,
		public location: string,
		public description?: string,
		public value?: string
		) { }
}

let myCollectible = new Collectible(1, 'Quilt', 'Master Bedroom Closet', 'Made by Grandma Baker in 1929', 'Keepsake');

console.log("My collectible: ", myCollectible.name);