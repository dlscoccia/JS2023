const { Router } = require('express')
const { check } = require('express-validator')
const {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
  eliminarEventos,
} = require('../controllers/events')
const isDate = require('../helpers/isDate')
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

// Middlewares
router.use(validarJWT)

// Get events
router.get('/', obtenerEventos)

// Crear evento
router.post(
  '/',
  [
    check('title', 'Titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de fin es obligatoria').custom(isDate),
    validarCampos,
  ],
  crearEvento
)

// Actualizar evento
router.put(
  '/:id',
  [
    check('title', 'Titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de fin es obligatoria').custom(isDate),
    validarCampos,
  ],
  actualizarEvento
)

// Borrar evento
router.delete('/:id', eliminarEventos)

module.exports = router
