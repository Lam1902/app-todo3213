
// file này là nơi định nghĩa các hàm xử lí

const connection = require('../config/database')
const { getAllPlayers, updatePlayerById , createPlayer2, deletePlayer} =require('../services/CRUDService')

const getHome = async (req,res) => {
    let results = await getAllPlayers()
    listplayer = JSON.stringify(results)
    res.render('home', {listplayer: results})
}

const getLogin = (req, res) => {
    res.send('trang login')
}

const createPlayer = (req, res) => {
    res.render('crplayer')
}

const postCreatePlayer = async (req, res) => {
    let name = req.body.name;
    let age = parseInt(req.body.age);
    let position = req.body.position;

    await createPlayer2(name, age, position)
    res.redirect('/')
  
};


const updatePage =  async (req,res) => {
    
    let id = req.params.id
    let [results , fields] = await connection.query(`SELECT * FROM players WHERE id = ?`, [id]);
    let player = results || results.length > 0 ? results[0] : {}
        res.render('edit', {playerEdit : player})
}

const postUpdatePlayer = async(req,res) => {
    let name = req.body.name;
    let age = parseInt(req.body.age);
    let position = req.body.position;
    let id = req.body.playerid;

    await updatePlayerById(name, age, position, id);
       res.redirect('/')
    
}
const postDeletePlayer = async(req,res) => {
    let id = req.params.id
    
    await deletePlayer(id)
    res.redirect('/')
    
}
module.exports = {
    getHome,
    getLogin,
    postCreatePlayer,
    createPlayer,
    updatePage,
    postUpdatePlayer,
    postDeletePlayer
}