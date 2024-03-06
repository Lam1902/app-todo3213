
// file này là để chia các hàm xử lí vào các url



const express = require('express')
const router = express.Router()
const {getHome, getLogin, postCreatePlayer, createPlayer, updatePage, postUpdatePlayer, postDeletePlayer} = require('../controllers/homeController')

router.get('/', getHome)

router.get('/abc', (req, res) => {
    res.send('check abc')
})

router.get('/login', getLogin)
router.get('/crplayer', createPlayer)
router.get('/update/:id', updatePage)
router.post('/add_player', postCreatePlayer)
router.post('/update_player', postUpdatePlayer)
router.post('/delete_player/:id', postDeletePlayer)

module.exports = router

