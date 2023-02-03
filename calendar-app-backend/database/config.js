const { connect } = require('mongoose')

const dbConnection = async () => {
  try {
    await connect(process.env.DB_URL)

    console.log('DB Conectada')
  } catch (error) {
    console.log(error)
    throw new Error('Error a la hora de inicializar base de datos')
  }
}

module.exports = {
  dbConnection,
}
