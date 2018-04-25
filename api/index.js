import express from 'express'

// Create express router
const router = express.Router()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shoppinglist')

const El = mongoose.model('element', { name: String })

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    El.find({}).then( arr => {
        let l=[]
        arr.forEach( v=> l.push(v.name))
        req.session.list=l
        res.json({ username: 'demo', list: l })
    })
  } else res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})


router.post('/proba', (req, res) => {
  const el = new El({ name: req.body.cucc })
  el.save().then( () => {
    req.session.list.push(req.body.cucc)
    res.json({ ok: true })
  } )
})

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
