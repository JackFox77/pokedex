import { ActivePokemonController } from "./Controllers/activePokemonController.js";
import { WildPokemonController } from "./Controllers/WildPokemonsController.js";

class App {
  // valuesController = new ValuesController();
  wildPokemonController = new WildPokemonController()
  activePokemonController = new ActivePokemonController()
}

window["app"] = new App();
