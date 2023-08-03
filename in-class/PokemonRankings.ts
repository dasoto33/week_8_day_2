class PokemonRankings {
    [pokemonName: string]: number 
  }
  
  const pokemonR = new PokemonRankings()
  
  pokemonR.snorlax = 10
  pokemonR.psyduck = 1
  /* error prop value must be number
  pokemonR.magikarp = 'under rated' */
  
  console.table(pokemonR)