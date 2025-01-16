import { PokemonGrid } from '@/components'
import { getPokemonsByLimit } from '@/utils/getPokemonsByLimit'

export const metadata = {
  title: '151 Pokémons list',
  description: 'List of the first 151 pokémons',
}

export default async function PokemonsPage() {
  const pokemons = await getPokemonsByLimit(151)

  return (
    <div className='flex flex-col'>
      <span className='text-2xl text-indigo-900 my-2 text-center font-semibold'>
        Pokémons List:{' '}
        <small className='text-indigo-700'>Static Site Generation</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
