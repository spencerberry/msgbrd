let express = require('express')
let router = express.Router()

router.get('/', (req, res, next) => {
  res.render('form', {
    title: 'MSG BRD',
    action: {
      url: '/',
      label: "back"
    }
  })
})



module.exports = router
