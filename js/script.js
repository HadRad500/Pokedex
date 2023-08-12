const pokemonRepository = (function () {

const pokemonList = [];

let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon) {
    pokemonList.push(pokemon);
}

function getAll() {
    return pokemonList;
}

function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class")

    button.addEventListener("click", function(e) {
        showDetails(pokemon)
    })

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
}

function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
}

function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {

      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
}

function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
};

function showModal(pokemon) {
    let modalContainer = document.querySelector ('#modal-container');
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.ClassList.add('modal');

    let closeButtonElement = document.createElement ('button');
    closeButtonElement.classlist.add ('modal-close');
    closeButtonElement.innerText = 'Close';

    titleElement = document.createElement ('h1');
    titleElement.innerText = title;

    modalContainer.classlist.add('is-visible');
}


    document.querySelector('#show-modal').addEventListener
    ('click', () => {
        showModal();
    })
    


}

return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
};


})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
});





/*pokemonRepository.getAll().forEach(function(pokemon) {
    console.log(pokemon.name + 'is' + pokemon.height + 'that\'s crazy.');
  });*/