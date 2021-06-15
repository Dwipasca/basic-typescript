const baseUrl: string = "https://pokeapi.co/api/v2";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetailResponse {
  id: number;
  height: number;
  name: string;
}

interface PokemontListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Pokemon>;
}

function getPokemonList(offset = 0, limit = 10): Promise<PokemontListResponse> {
  return fetch(`${baseUrl}/pokemon?offset=${offset}&limit=${limit}`).then(
    (res) => res.json()
  );
}

function getPokemonById(id: string): Promise<PokemonDetailResponse> {
  return fetch(`${baseUrl}/pokemon/${id}`).then((res) => res.json());
}

async function renderPokemonList(): Promise<number> {
  // assert itu ketika kalian yakin suatu function yg memiliki
  // lebih dari satu return type, bakal ngereturn salah satu type
  // const listEl: Element | null = document.querySelector(".list-container");

  // if (listEl === null) return 0;

  const listEl: Element | null = document.querySelector(
    ".list-container"
  ) as Element;

  let response: PokemontListResponse;
  try {
    response = await getPokemonList();

    response.results.forEach((pokemon: Pokemon) => {
      const itemEl = createPokemonItem(pokemon);
      listEl.appendChild(itemEl);
    });
  } catch (err) {
    return 0;
  }

  return 1;
}

function createPokemonItem(pokemon: Pokemon): HTMLDivElement {
  const el = document.createElement("div");
  el.innerText = pokemon.name;
  el.setAttribute("class", "pokemon-item");

  return el;
}

renderPokemonList().then((ret: number) => {
  console.log(ret);
});
