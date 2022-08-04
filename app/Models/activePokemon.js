export class ActivePokemon{
    constructor(data) {
        this.name = data.name
        this.type = data.type
        this.abilities = data.abilities
        this.species = data.species
    }
    get ActivePokemonTemplate() {
        return `
        <div class="card">
     <div class="card-body">
      <div class="card-title">
        <h3>${this.name}</h3>
      </div>
      <div class="card-text">
        <p>
          <b>type : ${this.type} | abilities: ${this.abilities} | species: ${this.species}</b>
        </p>
        <p>
          
        </p>
      </div>
     </div>
     <div class="card-footer">
      <div class="text-end">
        
     </div>
    </div>
        `
    }
}