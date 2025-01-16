'use client'
import { useAppSelector } from '@/store'
import { IoHeartOutline } from 'react-icons/io5'
import { PokemonGrid } from './PokemonGrid'

export const PokemonFavoriteGrid = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  )

  return (
    <div>
      {favoritePokemons.length ? (
        <PokemonGrid pokemons={favoritePokemons} />
      ) : (
        <NoFavorites />
      )}
    </div>
  )
}

const NoFavorites = () => (
  <div className='flex flex-col h-[50vh] items-center justify-center'>
    <IoHeartOutline size={100} className='text-red-600' />
    <span>No favorite saved</span>
  </div>
)
