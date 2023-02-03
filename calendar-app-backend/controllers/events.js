const { response } = require('express')
const Evento = require('../models/Eventos')

const obtenerEventos = async (req, res = response) => {
  const eventos = await Evento.find().populate('user', 'name')

  res.status(200).json({
    ok: true,
    events: eventos,
  })
}
const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body)
  try {
    evento.user = req.uid

    const eventoGuardado = await evento.save()
    res.json({
      ok: true,
      evento: eventoGuardado,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    })
  }
}
const actualizarEvento = async (req, res = response) => {
  const eventoId = req.params.id
  const uid = req.uid

  try {
    const evento = await Evento.findById(eventoId)

    if (!evento) {
      res.status(404).json({
        ok: false,
        msg: 'El evento no existe por ese id',
      })
    }

    if (evento.user.toString() !== uid) {
      res.status(401).json({
        ok: false,
        msg: 'No esta autorizado para actualizar este evento',
      })
    }

    const nuevoEvento = {
      ...req.body,
      user: uid,
    }

    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventoId,
      nuevoEvento,
      { new: true }
    )

    res.json({
      ok: true,
      evento: eventoActualizado,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    })
  }
}
const eliminarEventos = async (req, res = response) => {
  const eventoId = req.params.id
  const uid = req.uid

  try {
    const evento = await Evento.findById(eventoId)

    if (!evento) {
      res.status(404).json({
        ok: false,
        msg: 'El evento no existe por ese id',
      })
    }

    if (evento.user.toString() !== uid) {
      res.status(401).json({
        ok: false,
        msg: 'No esta autorizado para actualizar este evento',
      })
    }

    const eventoEliminado = await Evento.findByIdAndDelete(eventoId)

    res.json({
      ok: true,
      evento: eventoEliminado,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    })
  }
}

module.exports = {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
  eliminarEventos,
}
