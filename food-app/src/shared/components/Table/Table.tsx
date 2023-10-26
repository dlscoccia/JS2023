import { useAppSelector } from '@/core/global/hooks'
import { TableRow } from './TableRow'

type TableProps = {
  heading: string[]
  body: { ingredient: string; qty: number; price: number }[]
}

export const Table = ({ heading, body }: TableProps) => {
  const total = useAppSelector((state) => state.recipe.total)
  console.log(body)
  return (
    <table className='table-auto'>
      <thead>
        <tr>
          {heading.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map(({ ingredient, qty, price }, rowID) => (
          <TableRow
            ingredient={ingredient}
            qty={qty}
            price={price}
            key={ingredient}
          />
        ))}
        <tr>
          <td className='px-8'></td>
          <td className='px-8'></td>
          <td className='px-8'></td>
          <td className='px-8'>{total}</td>
        </tr>
      </tbody>
    </table>
  )
}
