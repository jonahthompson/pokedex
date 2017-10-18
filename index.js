class Pokedex {
	constructor(){
		this.pokemonArray = pokemonArray;
		this.currentPokemon = null;
		this.favs = [];
		console.log(pokemonArray);
	}
	listPokemon(){
		for (var i = 0; i < pokemonArray.length; i++) {
			$('.listpokemon').append(`
					<div class="child-pokemon" data-name="${pokemonArray[i]}" data-count="${i}"> ${pokemonArray[i]} </div>
			`);
		}
	}
	showDetails(name){
		cachedFetch("https://pokeapi.co/api/v2/pokemon/" + name)
		.then(r => r.json())
		.then(res => {
			console.log(res);
			this.currentPokemon = res.name;
			console.log(this.currentPokemon);
			$('.info').append(`
				<div class="info">No. ${res.id}: ${res.name}</div>
				<div class="info">Weight: ${res.weight}</div>
				<div class="info">Moves: 
					<ul>
						<li>${res.moves[0].move.name}</li>
						<li>${res.moves[1].move.name}</li>
						<li>${res.moves[2].move.name}</li>
						<li>${res.moves[3].move.name}</li>
					</ul>
				</div>
				<div class="info">Height: ${res.height}</div>
				<div class="info">Experience: ${res.base_experience}</div>
				<div class="info">Type: ${res.types[0].type.name}</div>
			`);
			let {sprites} = res;
			$('.image').append(`
				<img class="pic" src="${(sprites.front_default ? sprites.front_default : ``)}" />
				<img class="pic" src="${(sprites.back_default ? sprites.back_default : ``)}" />
				<img class="pic" src="${(sprites.back_female ? sprites.back_female : ``)}" />
				<img class="pic" src="${(sprites.back_shiny ? sprites.back_shiny : ``)}" />
				<img class="pic" src="${(sprites.back_shiny_female ? sprites.back_shiny_female : ``)}" />
				<img class="pic" src="${(sprites.front_female ? sprites.front_female : ``)}" />
				<img class="pic" src="${(sprites.front_shiny ? sprites.front_shiny : ``)}" />
				<img class="pic" src="${(sprites.front_shiny_female ? sprites.front_shiny_female : ``)}" />
			`);
			if (this.favs.includes(this.currentPokemon) === false){
			$('.favorite').text(`Add ${this.currentPokemon} as a favorite!`);
			} else {
				$('.favorite').text(`Remove ${this.currentPokemon} from favorites`)
			}
		});
	}
	clearInfo(){
		$('.info').empty();
		$('.image').empty();
	}
	addFavorite(){
		let index = $(this.favs.indexOf(this.currentPokemon));
		if (this.favs.includes(this.currentPokemon) === false){
			this.favs.unshift(this.currentPokemon);
			$('.favorites').text(this.favs);
			$('.favorite').text(`Remove ${this.currentPokemon} from favorites`);
			this.displayFavorites();
			console.log(this.favs);
		} else if (this.favs.includes(this.currentPokemon) === true){
			this.favs.splice($(this.favs.indexOf(this.currentPokemon)), 1);
			$('.favorite').text(`Add ${this.currentPokemon} as a favorite!`);
			this.displayFavorites();
			console.log(this.favs);
		}
	}
	displayFavorites(){
		let html = '';
		for (var i = 0; i < this.favs.length; i++) {
		html += "<li>" + this.favs[i] + "</li>";
		}
		$('.favorites').html(html)
	}
};

// class Pokemon {
// 	constructor(res){
// 		this.name = name;
// 		this.sprites = sprites;
// 		this.weight = weight;
// 		this.types = types;
// 		this.id = id;
// 		this.height = height;
// 	}
// };

$(function(){
	let pokedex = new Pokedex();
	pokedex.listPokemon();
	$(document).on('click', '.child-pokemon', function(){
		pokedex.clearInfo();
		let name = $(this).attr('data-name');
		console.log(name);
		pokedex.showDetails(name);
	});
	$('.favorite').on('click', function(){
		pokedex.addFavorite();
	});
});