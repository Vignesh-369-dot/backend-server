const db = require('../db');

class userService{
    constructor(){}

    async getAllUsers() {
       try {
         const [rows] = await db.query('SELECT * FROM users');
         return rows;
       } catch (err) {
         throw new Error('Database query failed');
       }
    }
}



module.exports = userService;
