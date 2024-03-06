const connection = require('../config/database')

const getAllPlayers = async() => {
    let [results, fields] = await connection.query(`SELECT * FROM players`);
    return results;
}

const createPlayer2 = async (name, age, position) => {
    await connection.query(
        `INSERT INTO players (name, age, position) VALUES (?, ?, ?)`,
        [name, age, position]
    );
}

const updatePlayerById = async (name, age, position, id) => {
 
       let [results, fields] =  await connection.query(
            `UPDATE players SET name = ?, age = ?, position = ? WHERE id = ?`,
            [name, age, position, id]
        );
}

const deletePlayer = async (id) => {
    await connection.query('DELETE FROM players WHERE id = ?', [id]);
}
module.exports = {
    getAllPlayers,
    updatePlayerById,
    createPlayer2,
    deletePlayer
}