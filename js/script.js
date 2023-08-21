const pokemonRepository = (function () {

const pokemonList = [];

let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon) {
    pokemonList.push(pokemon);
}

function getAll() {
    return pokemonList;
}

let button;
function addListItem(pokemon) {

    let pokemonUl = document.querySelector(".list-group");
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item")
    button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn", "btn-primary");

    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#pokemonModal");

    button.addEventListener("click", function (e) {
        showDetails(pokemon);
    })

    listItem.appendChild(button);
    pokemonUl.appendChild(listItem);
}

function loadList() {
    return fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    })
    .catch(function (e) {
      console.error(e);
    })
}

function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;

    let pokemonTypes= []
    details.types.forEach((type) => {
      pokemonTypes.push(type.type.name);
    });
    item.types = pokemonTypes.join(", ")
    })

    .catch(function (e) {
      console.error(e);
    });
}

function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
}

function showModal(pokemon) {
    let modalBody = document.querySelector (".modal-body");
    let modalTitle = document.querySelector (".modal-title");
    let modalHeader = document.querySelector ('.modal-header');
    modalBody.innerHTML = "";
    modalTitle.innerHTML = "";

    window.addEventListener("keydown", (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === "Escape" && 
            modalContainer.classList.contains('is-visible')) {
          hideModal();  
        }
      });

   const titleElement = document.createElement ('h1');
    titleElement.innerText = pokemon.name;

    let imageElement = document.createElement('img');
    imageElement.classList.add('modal-img');
    imageElement.src = pokemon.imageUrl;

    let pokemonHeight = document.createElement("p");
    pokemonHeight.classList.add("modal-items");
    pokemonHeight.innerText = `height: ${(pokemon.height) / 10} m.`;

    let pokemonTypes = document.createElement("p");
    pokemonTypes.classList.add("modal-items");

  
    pokemonTypes.innerText = `type: ${(pokemon.types)}`;
   

    modalBody.appendChild(titleElement);
    modalBody.appendChild(imageElement);
    modalBody.appendChild(pokemonHeight);
    modalBody.appendChild(pokemonTypes);
}
    

return{
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
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