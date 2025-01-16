import { API } from '@/constants/api'
import { Pokemon } from '@/interfaces'
import { notFound } from 'next/navigation'

export const getPokemonByName = async (name: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`${API.BASE_URL}/${name}`, {
      next: {
        revalidate: 648000,
      },
    }).then((res) => res.json())

    return pokemon
  } catch {
    notFound()
  }
}
