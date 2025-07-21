const db=require('mysql2/promise');
const dotenv = require('dotenv');
require('dotenv').config();
 let pool;

function initials(){
    try{
        pool=db.createPool({
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database:process.env.DB_NAME,
            waitForConnections:true,
            connectionLimit:10,
            queueLimit:0,
        });
        console.log("database connected successfully")
    }
    catch(error){
          console.error("there is a error in the database",error.message);
        process.exit(1);
    }
}
initials();

module.exports=pool;