import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowBackOutline } from 'react-icons/io5'
import { getPokemonById } from '@/utils'

interface Props {
  readonly params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const staticIdParams = Array.from({ length: 151 }).map((_, i) => ({
    id: `${i + 1}`,
  }))

  return staticIdParams
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params
    const { name } = await getPokemonById(id)

    return {
      title: `#${id} - ${name}`,
      description: `${name} info page.`,
    }
  } catch {
    return {
      title: 'Pokemon page',
      description: 'There was an error loading the page, please retry.',
    }
  }
}

export default async function PokemonPage({ params }: Props) {
  const { id } = await params

  const pokemon = await getPokemonById(id)

  return (
    <div className='flex mt-5 flex-col items-center text-slate-800'>
      <Link
        href='/dashboard/pokemons'
        className='flex items-center self-start mb-2'
      >
        <IoArrowBackOutline />
        <span className='ml-2 font-bold'>Return</span>
      </Link>
      <div className='flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3'>
        <div className='mt-2 mb-8 w-full'>
          <h1 className='px-2 text-xl font-bold text-slate-700 capitalize'>
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className='flex flex-col justify-center items-center'>
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ''}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className='mb-5'
            />

            <div className='flex flex-wrap gap-2'>
              {pokemon.moves.map((move) => (
                <div key={move.move.name} className='mr-2 capitalize'>
                  <p className='center inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white'>
                    <span className='mt-px'>{move.move.name}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 px-2 w-full'>
          <div className='flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg '>
            <p className='text-sm text-gray-600'>Types</p>
            <div className='text-base font-medium text-navy-700 flex'>
              {pokemon.types.map((type) => (
                <p key={type.slot} className='mr-2 capitalize'>
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className='flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg '>
            <p className='text-sm text-gray-600'>Peso</p>
            <span className='text-base font-medium text-navy-700 flex'>
              {pokemon.weight}
            </span>
          </div>

          <div className='flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg'>
            <p className='text-sm text-gray-600'>Regular Sprites</p>
            <div className='flex justify-center'>
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className='flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg'>
            <p className='text-sm text-gray-600'>Shiny Sprites</p>
            <div className='flex justify-center'>
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
