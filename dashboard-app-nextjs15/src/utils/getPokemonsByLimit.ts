import { API } from '@/constants/api'
import { PokemonsResponse, SimplePokemon } from '@/interfaces'

export const getPokemonsByLimit = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `${API.BASE_URL}?limit=${limit}&offset=${offset}`
  ).then((res) => res.json())

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  return pokemons
}
