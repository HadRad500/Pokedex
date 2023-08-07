let pokemonRepository = (function () {
    
let pokemonList = [
    {name: 'Bulbasaur', height: 3, type: ['grass', 'poison']},
    {name: 'Charmander', height: 6, type: ['fire', 'dragon']},
    {name: 'Squirtle', height: 5, type: ['water', 'normal']},
]

function add(pokemon) {
    pokemonList.push(pokemon);
}

function getAll() {
    return pokemonList;
}

return{
    add: add,
    getAll: getAll
};
})();


  pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + 'is' + pokemon.height + 'that\'s crazy.');
    console.log(pokemonRepository.getAll());
  });















  /*for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height <= 3) {
        document.write(`<p>${pokemonList[i].name} (height:${pokemonList[i].height}) - Oh that\'s small! </p>`)
    }else {
      document.write(`<p>${pokemonList[i].name} (height:${pokemonList[i].height}) </p>`)
    }
  }*/