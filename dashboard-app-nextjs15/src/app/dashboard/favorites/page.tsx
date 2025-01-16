import { PokemonFavoriteGrid } from '@/components/pokemons/PokemonFavoriteGrid'

export const metadata = {
  title: 'Favorites Pokémons list',
  description: 'List of the favorites pokémons',
}

export default async function PokemonsPage() {
  return (
    <div className='flex flex-col'>
      <span className='text-2xl text-indigo-900 my-2 text-center font-semibold'>
        Favorites Pokémons:{' '}
        <small className='text-indigo-700'>Global State</small>
      </span>
      <PokemonFavoriteGrid />
    </div>
  )
}
