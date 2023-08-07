let pokemonList = [
    {name: 'Bulbasaur', height: 3, type: ['grass', 'poison']},
    {name: 'Charmander', height: 6, type: ['fire', 'dragon']},
    {name: 'Squirtle', height: 5, type: ['water', 'normal']},
    
]


  pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + 'is' + pokemon.height + 'that\'s crazy.');
  });















  /*for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height <= 3) {
        document.write(`<p>${pokemonList[i].name} (height:${pokemonList[i].height}) - Oh that\'s small! </p>`)
    }else {
      document.write(`<p>${pokemonList[i].name} (height:${pokemonList[i].height}) </p>`)
    }
  }