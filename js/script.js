const pokemonRepository = (function () {

const pokemonList = [
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

let addListItem = document.querySelector('.pokemon-list').addEventListener('click', function (pokemon) {
    document.querySelector('.additional-information')
      console.log(pokemon);
  });

function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class")
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
}

return{
    add: add,
    getAll: getAll,
    addListItem: addListItem
};
})();


  pokemonRepository.getAll().forEach(function(pokemon) {
    console.log(pokemon.name + 'is' + pokemon.height + 'that\'s crazy.');
  });

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});

