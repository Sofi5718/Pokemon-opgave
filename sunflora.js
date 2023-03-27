"use script";

window.addEventListener("load", initApp)

async function initApp() {
    const pokemons = await getPokemon("sunflora.json");
    for (const pokemon of pokemons) {
        showPokemon(pokemon);
       
    }
}
async function getPokemon(url) {
    const response = await fetch(url)
    const data = await response.json();
    return data;
}

function showPokemon(pokemon) {
    document.querySelector("#pokemon").insertAdjacentHTML("beforeend",
    /*html*/`
    <article class="grid-item">
    <img src="${pokemon.image}">
    <h2>${pokemon.name}</h2>
    <p>#${pokemon.dexIndex}</p>
    <p>${pokemon.type}</p>
    </article>
    `)
    document.querySelector("#pokemon article:last-child").addEventListener("click", pokemonClicked);
    
    function pokemonClicked() {
        showPokemonModal(pokemon);
        
    }
}

function showPokemonModal(pokemon) {
    document.querySelector("#dialog-image").src = pokemon.image;

    document.querySelector("#dialog-name").textContent = pokemon.name;
    document.querySelector("#dialog-description").textContent = pokemon.description;
    document.querySelector("#dialog-ability").textContent = pokemon.ability;
    document.querySelector("#dialog-type").textContent = pokemon.type;
    document.querySelector("#dialog-subtype").textContent = pokemon.subtype;
    document.querySelector("#dialog-weaknesses").textContent = pokemon.weaknesses;
    document.querySelector("#dialog-gender").textContent = pokemon.gender;
    document.querySelector("#dialog-weight").textContent = pokemon.weight;
    document.querySelector("#dialog-height").textContent = pokemon.height;
    document.querySelector("#dialog-generation").textContent = pokemon.generation;
    document.querySelector("#dialog-spilversion").textContent = pokemon.spilversion;
    document.querySelector("#dialog-canEvolve").textContent = pokemon.canEvolve;
    document.querySelector("#dialog-statHP").textContent = pokemon.statHP;
    document.querySelector("#dialog-statsAttack").textContent = pokemon.statsAttack;
    document.querySelector("#dialog-statsDefence").textContent = pokemon.statsDefence;
    document.querySelector("#dialog-statsSpecialAttack").textContent = pokemon.statsSpecialAttack;
    document.querySelector("#dialog-statsSpecialdefence").textContent = pokemon.statsSpecialdefence;
    document.querySelector("#dialog-statsSpeed").textContent = pokemon.statsSpeed;
    
    
    document.querySelector("#dialog-pokemon").showModal();
}


// function addPokemons(pokemon) {
//     const myHtml = /*html*/ `
//     <li>name ${pokemon.name}</li> 
//     <li>description ${pokemon.description}</li>
//     <li>image ${pokemon.image}</li>
//     <li>footprint ${pokemon.footprint}</li>
//     <li>dexindex ${pokemon.dexindex}</li>
//     <li>type ${pokemon.type}</li>
//     <li>subtype ${pokemon.subtype}</li>
//     <li>gender ${pokemon.gender}</li>
//     <li>weaknesse ${pokemon.weaknesses}</li>
//     <li>height ${pokemon.height}</li>
//     <li> weight ${pokemon.weight}</li>
//     <li>spilversion ${pokemon.spilversion}</li>
//     <li>canEvolve ${pokemon.canEvolve}</li>
//     <li>generation ${pokemon.generation}</li>
//     <li>statsAttack ${pokemon.statsAttack}</li>
//     <li>statsHP ${pokemon.statsHP}</li>
//     <li>statsSpecialAttack ${pokemon.statsSpecialAttack}</li>
//     <li>statsDefence ${pokemon.statsDefence}</li>
//     <li>statsSpeed ${pokemon.statsSpeed}</li>
//     <li>statsSpecialDefence ${pokemon.statsSpecialDefence}</li>
//     `;
//     document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myHtml);
// }
