"use strict";
var Collectible = (function () {
    function Collectible(id, name, location, description, value) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.description = description;
        this.value = value;
    }
    return Collectible;
}());
exports.Collectible = Collectible;
var myCollectible = new Collectible(1, 'Quilt', 'Master Bedroom Closet', 'Made by Grandma Baker in 1929', 'Keepsake');
console.log("My collectible: ", myCollectible.name);
//# sourceMappingURL=collectible-item.js.map