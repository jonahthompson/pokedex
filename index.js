class Pokedex {
	showDetails(name){
		cachedFetch("http://pokeapi.co/api/v2/pokemon/" + name)
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
}
$(function(){
	$('.pokemon').on('click', function showDetails(){
		const name = $(this).attr('data-name');
		return name;
	})
});

let bulbasaur = new Pokedex('bulbasaur');