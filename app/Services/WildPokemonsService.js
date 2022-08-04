import { ProxyState } from "../AppState.js";
import { pokemonApi } from "../Controllers/axiosController.js";
import { ActivePokemon } from "../Models/activePokemon.js";
import { WildPokemon } from "../Models/WildPokemons.js";

class WildPokemonService{

    async setActivePokemon(url) {
        let res = await pokemonApi.get(url)
        ProxyState.activePokemon = new ActivePokemon(res.data)
    }
    


    async getPokemon() {
        let res = await pokemonApi.get('/pokemon')
        ProxyState.wildPokemon = res.data.results.map(p => new WildPokemon(p))
        console.log('getting pokemon');

    }

}



export const wildPokemonService = new WildPokemonService()