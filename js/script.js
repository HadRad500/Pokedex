let pokemonList = [
    {name: 'Bulbasaur', height: 3, type: ['grass', 'poison']},
    {name: 'Charmander', height: 6, type: ['fire', 'dragon']},
    {name: 'Squirtle', height: 5, type: ['water', 'normal']},
    
]


for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height <= 3) {
      document.write('<p>Bulbasaur (height:3) - Oh that\'s small! </p>')
    }else if (pokemonList[i].height === 6) {
      document.write('<p>Charmander (height:6) </p>')
    } else {
        document.write('<p>Squirtle (height:5) </p>')
    }
  }
