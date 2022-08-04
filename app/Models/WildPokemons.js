

export class WildPokemon{
    constructor({ name, url }) {
        this.name = name
        this.url = url  
    }
    
    get Template() {
        return `
        <div class="selectable no-select" onclick="app.wildPokemonController.setActivePokemon('${this.url}') ">
        <p>${this.name}</p>
        </div>
        `
    }
}