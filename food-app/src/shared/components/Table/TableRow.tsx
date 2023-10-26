type TableRowProps = any

export const TableRow = ({ ingredient, qty, price }: TableRowProps) => {
  return (
    <tr>
      <td className='px-8'>{ingredient}</td>
      <td className='px-8'>{qty}</td>
      <td className='px-8'>{price}</td>
      <td className='px-8'>{qty * price}</td>
    </tr>
  )
}
