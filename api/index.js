import express from 'express'
const router = express.Router()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shoppinglist')
const El = mongoose.model('element', { name: String })
var app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})
router.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    El.find({}).then( arr => {
        req.session.list=arr
        res.json({ username: 'demo', list: arr })
    })
  } else res.status(401).json({ message: 'x' })
})
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})
router.post('/felvesz', (req, res) => {
  const el = new El({ name: req.body.cucc })
  el.save().then( (db) => {
    req.session.list.push(db)
    res.json(db)
  } )
})
router.post('/torol', (req, res) => {
  El.find({_id:req.body.cucc}).remove( () => {
    El.find().then( arr => {
        req.session.list=arr
        res.json(arr)
    })
  })
})
export default {
  path: '/api',
  handler: router
}
