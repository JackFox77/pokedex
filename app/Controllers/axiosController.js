export const pokemonApi = new axios.create({
    baseURL:  'https://pokeapi.co/api/v2'  ,
    timeout: 8000
})