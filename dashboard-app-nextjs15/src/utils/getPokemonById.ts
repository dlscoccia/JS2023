import { notFound } from 'next/navigation'
import { API } from '@/constants/api'
import { Pokemon } from '@/interfaces'

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`${API.BASE_URL}/${id}`, {
      next: {
        revalidate: 648000,
      },
    }).then((res) => res.json())

    return pokemon
  } catch {
    notFound()
  }
}
