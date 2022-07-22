const pokemon_name = document.querySelector('#pokemon_name');
const pokemon_number = document.querySelector('#pokemon_number');
const pokemon_image = document.querySelector('#pokemon_image');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
const data = await fetchPokemon(pokemon);
pokemon_name.innerHTML = `- ${data.name}`;
pokemon_number.innerHTML = data.id;
console.log(data);

//Link na api está errado
//pokemon_image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
pokemon_image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`;

}

renderPokemon('300');

