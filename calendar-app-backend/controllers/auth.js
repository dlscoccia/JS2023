const { response, request } = require('express')
const bcrypt = require('bcryptjs')
const Usuario = require('../models/Usuario')
const { generarJWT } = require('../helpers/jwt')

const crearUsuario = async (req = request, res = response) => {
  try {
    const { name, email, password } = req.body
    let usuario = await Usuario.findOne({ email })

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario ya existe',
      })
    }

    usuario = new Usuario({ name, email, password })
    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password, salt)

    await usuario.save()

    // Token
    const token = await generarJWT(usuario.id, usuario.name)

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Por favor contacte al administrador',
    })
  }
}

const loginUsuario = async (req = request, res = response) => {
  const { email, password } = req.body

  try {
    const usuario = await Usuario.findOne({ email })

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario no existe',
      })
    }

    const validPassword = bcrypt.compareSync(password, usuario.password)
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'El password no existe',
      })
    }

    // Token
    const token = await generarJWT(usuario.id, usuario.name)

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Por favor contacte al administrador',
    })
  }
}

const revalidarToken = async (req = request, res = response) => {
  const { uid, name } = req

  const token = await generarJWT(uid, name)

  res.json({
    ok: true,
    uid,
    name,
    token,
  })
}

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
}
