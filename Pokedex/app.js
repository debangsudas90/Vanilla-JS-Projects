const pokeSearch = document.querySelector('form');
const pokeCard = document.querySelector('.poke-card');
const pokeRandom = document.getElementById('pokeball');

const bgColours = {
    fire: '#fddfdf',
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5',
    // 
    ice: '#98d8d8',
    dark: '#979ca3',
    ghost: '#b4c0c2',
    steel: '#b4c0c2'
};

const typeColours = {
    fire: '#ff4422',
    grass: '#77cc55',
    electric: '#ffcc33',
    water: '#3192f3',
    ground: '#ddbb55',
    rock: '#bbaa66',
    fairy: '#ee99ac',
    poison: '#aa5599',
    bug: '#aabb22',
    dragon: '#7766ee',
    psychic: '#ff5599',
    flying: '#8899ff',
    fighting: '#bb5544',
    normal: '#aaaa99',
    ice: '#84d8cd',
    dark: '#705848',
    ghost: '#705898',
    steel: '#b8b8d0'
};

const bgColour = Object.keys(bgColours);
const typeColour = Object.keys(typeColours);

//update UI
const updateInfo = (data) => {

    //updateinfo
    pokeCard.innerHTML = `
    <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png"class="poke-photo card-img-top">
        <div class="poke-details">
        <h2 class="my-3 fw-light text-uppercase">${data.name}</h2>
        <div class="stats bg-light mx-2 p-3 fw-light">
            <ul id="col1">
                <li>Height: ${data.height}</li>
                <li>Weight: ${data.weight}</li>
            </ul>
            <ul id="col2">
                <li>HP: ${data.stats[0].base_stat}</li>
                <li>Attack: ${data.stats[1].base_stat}</li>
            </ul>
        </div>
        <div class="type my-3 text-uppercase">
            <ul>
                <li>${data.types[0].type.name}</li>
            <ul>
        </div>
    `;
    
    //change card bg color
    bgColour.forEach(key => {
        if(key == data.types[0].type.name) {
            pokeCard.style.backgroundColor= `${bgColours[key]}`;
        }   
    });

    //change type color
    const pokeType = document.querySelector('.type li');

    typeColour.forEach(key => {
        if(key == data.types[0].type.name) {
            pokeType.style.backgroundColor= `${typeColours[key]}`;
        } 
    });

    //remove d-none
    if(pokeCard.classList.contains("d-none")){
        pokeCard.classList.remove("d-none");
    }
};


pokeSearch.addEventListener('submit', e => {
    
    //prevent default action
    e.preventDefault();

    //take pokemon-input
    const pokeName = pokeSearch.search.value.trim().toLowerCase();
    pokeSearch.reset();

    //update UI
    getPokemon(pokeName)
        .then(data => updateInfo(data))
        .catch(err => console.log(err));
});

//generate random pokemon
pokeRandom.addEventListener('click', e=> {

    //generate random number
    let randomId = Math.floor((Math.random()*898) + 1);
    
    //updateUi
    getPokemon(randomId)
        .then(data => updateInfo(data))
        .catch(err => console.log(err));
})