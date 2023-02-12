// Creating JS Objects

// Manually specifying property/value pairs.
var favoriteStarWarsCharacter = {
	firstName: 'Steve',
	lastName: 'Rogers',
	catchphrase: 'thank u, next',
	fullName: function () {
		return this.firstName + ' ' + this.lastName;
	},
};

// Using the new operator on a function
function createCharacter(firstName, lastName, catchphrase) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.catchphrase = catchphrase;
	this.fullName = function () {
		return this.firstName + ' ' + this.lastName;
	};
}
var myFavoriteStarWarsCharacter = new createCharacter(
	'Steve',
	'Rogers',
	'thank u, next'
);

// Using class keyword and the new operator
/**
 * Classes use JavaScript strict mode (e.g., no silent errors, strict syntax).
 * It is not much more than syntactic sugar.
 * We recommend it, but many situations where other ways are better.
 *
 * **/
class Character {
	constructor(firstName, lastName, catchphrase) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.catchphrase = catchphrase;
	}
	fullName() {
		return this.firstName + ' ' + this.lastName;
	}
}
var myFavoriteStarWarsCharacter = new Character(
	'Steve',
	'Rogers',
	'thank u, next'
);

// Using Object.create(anObject) function.
var yourFavoriteStarWarsCharacter = Object.create(myFavoriteStarWarsCharacter);
