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
      showModal(pokemon);
    });
}

function showModal(pokemon) {
    let modalContent = document.querySelector ('.modal-content');
    let modalContainer = document.querySelector ('#modal-container');
    modalContent.innerHTML = '';
    modalContainer.style.display = "block";

    let modal = document.createElement('div');
    modal.ClassList.add('modal');

    let closeButtonElement = document.createElement ('button');
    closeButtonElement.classList.add ('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();  
        }
      });

   const titleElement = document.createElement ('h1');
    titleElement.innerText = pokemon.name;

    let imageElement = document.createElement('img');
    imageElement.classList.add('modal-img');
    imageElement.src = pokemon.imageUrl;

    modalContent.classList.add('is-visible');
    modalContent.appendChild(closeButtonElement);
    modalContent.appendChild(titleElement);
   
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