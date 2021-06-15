// https://pokeapi.co/

const baseUrl = "https://pokeapi.co/api/v2";

/**
 * @param {number} offset
 * @param {number} limit
 * @return {Promise<{ count: number, next: string, results: Array<{ name: string, url: string }> }>}
 */
function getPokemonList(offset = 0, limit = 10) {
  return fetch(`${baseUrl}/pokemon?offset=${offset}&limit=${limit}`).then(
    (res) => res.json()
  );
}

/**
 * @param {string} id
 */
function getPokemonById(id) {
  return fetch(`${baseUrl}/pokemon/${id}`).then((res) => res.json());
}

async function renderPokemonList() {
  const listEl = document.querySelector(".list-container");
  const response = await getPokemonList();

  response.results.forEach((pokemon) => {
    const itemEl = createPokemonItem(pokemon);
    listEl.appendChild(itemEl);
  });
}

function createPokemonItem({ name, url }) {
  const el = document.createElement("div");
  el.innerText = name;
  el.setAttribute("class", "pokemon-item");

  return el;
}

renderPokemonList();
