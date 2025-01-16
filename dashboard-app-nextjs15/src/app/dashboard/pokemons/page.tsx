import { PokemonGrid } from '@/components'
import { getPokemonsByLimit } from '@/utils/getPokemonsByLimit'

export const metadata = {
  title: '151 Pokemons list',
  description: 'List of the first 151 pokemons',
}

export default async function PokemonsPage() {
  const pokemons = await getPokemonsByLimit(151)

  return (
    <div className='flex flex-col'>
      <span className='text-2xl my-2 text-center font-semibold'>
        Pokemons list: <small>Static Site Generation</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
