class Pokedex {
	constructor(){
		this.pokemonArray = pokemonArray;
		console.log(pokemonArray);
	}
	listPokemon(){
		for (var i = 0; i < pokemonArray.length; i++) {
			$('.pokemon').append(`
					<div class="child-pokemon" data-name="${this.innerText}" data-count="${i}"> ${pokemonArray[i]} </div>
			`);
		}
	}
	showDetails(name){
		cachedFetch("https://pokeapi.co/api/v2/pokemon/" + name)
		.then(r => r.json())
		.then(res => {
			console.log(res);
		});
	}
	showFavorites(){

	}
	addFavorite(name){

	}
	removeFavorite(name){

	}
};

class Pokemon {
	constructor(){
		this.name = name;
		this.sprites = sprites;
		this.weight = weight;
		this.types = types;
		this.id = id;
		this.height = height;
	}
};

$(function(){
	let pokedex = new Pokedex();
	pokedex.listPokemon();
	$(document).on('click', '.child-pokemon', function(){
		let name = $(this).attr('data-name');
		console.log(name);
		pokedex.showDetails(name);
	})
});