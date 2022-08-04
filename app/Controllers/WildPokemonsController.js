import { ProxyState } from "../AppState.js";
import { wildPokemonService } from "../Services/WildPokemonsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawPokemon() {
    let template = ''

    ProxyState.wildPokemon.forEach(p => template += p.Template)

    document.getElementById('wild-pokemon').innerHTML = template
    console.log('drawing')
}


// function test() {
//     console.log('testing');
// }



export class WildPokemonController {
    constructor() {
        ProxyState.on('wildPokemon', _drawPokemon)
        this.getPokemon()
    }
    async getPokemon() {
        console.log('controller connected')
        try {
            await wildPokemonService.getPokemon()
        } catch (error) {
            console.error('[getting pokemon]', error)
            Pop.error(error)
            
        }
        
    }
    

    async setActivePokemon(url) {
        try {
            await wildPokemonService.setActivePokemon(url)
        } catch (error) {
            console.error('[Set Active Pokemon]', error)
            Pop.error(error)
            
        }
    }
}




// export class DnDSpellsController {

//   constructor() {
//     ProxyState.on('dndSpells', _drawSpells)
//     this.getSpells()
//   }


//   async getSpells(){
//     try {
//       await dndSpellsService.getSpells()
//     } catch (error) {
//       console.error('[Getting Spells]', error)
//       Pop.error(error)
//     }
//   }


//   async setActiveSpell(url){
//     try {
//       await dndSpellsService.setActiveSpell(url)
//     } catch (error) {
//       console.error('[Set Active Spell]', error)
//       Pop.error(error)
//     }
//   }