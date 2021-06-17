const getPokemon = async(name) => {
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

            const response = await fetch(url);
            const data = await response.json();

            return data;
};