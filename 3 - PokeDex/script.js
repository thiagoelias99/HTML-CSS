const pokemonName = document.querySelector('#pokemon_name');
const pokemonNumber = document.querySelector('#pokemon_number');
const pokemonImage = document.querySelector('#pokemon_image');
const form = document.querySelector('#form');
const btnNext = document.querySelector('#btn_next');
const btnPrev = document.querySelector('#btn_prev');

let currentID = 1



const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = `loading`;
    pokemonNumber.innerHTML = "";
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = `- ${data.name}`;
    pokemonNumber.innerHTML = data.id;
    currentID = data.id;
    console.log(data);

    //Link na api está errado
    //pokemon_image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`;

}

renderPokemon(currentID.toString());

form.onsubmit = function (e) {
    e.preventDefault();
    const inputSearch = document.querySelector('#input_search');
    renderPokemon(inputSearch.value);
    form.reset();
};

btnNext.addEventListener('click',() => {
    currentID ++;
    renderPokemon(currentID.toString());
})

btnPrev.addEventListener('click',() => {
    currentID != 1 && currentID --;
    renderPokemon(currentID.toString());
})

