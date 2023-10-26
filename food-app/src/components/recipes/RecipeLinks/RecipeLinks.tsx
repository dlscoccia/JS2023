import { useFormik } from 'formik'
function RecipeLinks() {
  const formik = useFormik({
    initialValues: {
      links: ['lola', 'mento'],
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div>
      <h2>Links:</h2>
      <form onSubmit={formik.handleSubmit}>
        <ul>
          {formik.values.links.map((link) => (
            <li key={link}>
              <a>{link}</a>
            </li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default RecipeLinks
