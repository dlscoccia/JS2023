import { PokemonGrid } from '@/components'
import { PokemonsResponse, SimplePokemon } from '@/interfaces'

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json())

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  // throw new Error('Error forzado')

  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151)

  return (
    <div className='flex flex-col'>
      <span className='text-2xl my-2 text-center font-semibold'>
        Pokemons list: <small>Static Site Generation</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
