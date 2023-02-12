// Array.forEach(function) //iterate over each element of the array.
// Array.map(function) // applies function to each element in array and return a new array.
// Array.filter(function) // return new array with elements satisfying a criteria.
// Array.reduce(function) // combinessuccessive elements of an array

// They all take in a function as an argument.

let places = [
	{
		name: 'Michigan Stadium',
		city: 'Ann Arbor',
		state: 'MI',
		maxsize: '111238',
	},
	{
		name: 'Spartan Stadium',
		city: 'East Lansing',
		state: 'MI',
		maxsize: '75005',
	},
	{
		name: 'Indiana Memorial Stadium',
		city: 'Bloomington',
		state: 'IN',
		maxsize: '52626',
	},
	{ name: 'Ohio Stadium', city: 'Columbus', state: 'OH', maxsize: '102780' },
]
    
(places.filter((p) => 
p.state=="MI").map((l)=>1.0*l.maxsize).reduce((a,b)=>(a+b)))