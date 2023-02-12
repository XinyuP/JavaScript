// typeof is a unary operator that returns a string indicating the type of the unevaluated operand
// instanceof is a binary operator that returns Boolean indicating whether has the given constructor in its prototype chain.

var myFavoriteStarWarsCharacter = new createCharacter(
	'Steve',
	'Rogers',
	'thank u, next'
);
myFavoriteStarWarsCharacter instanceof createCharacter; // true
typeof myFavoriteStarWarsCharacter; // object
typeof createCharacter; // function

var myFavoriteCharacter = new Character('Steve', 'Rogers', 'thank u, next');
var yourFavoriteCharacter = myFavoriteCharacter;

myFavoriteCharacter instanceof Character; // true
qyouFavoriteCharacter instanceof Character; // true
