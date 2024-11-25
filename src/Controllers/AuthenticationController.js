const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { db } = require('../DAL/Connection');

const salt = parseInt(process.env.SALT, 10);

const register = async (req, res) => {
    try {
        const { userName, Password, Role_id } = req.body;
        const hashedPassword = await bcrypt.hash(Password, salt);
        
        const newUser = await db.query(`INSERT INTO users(
                                        user_name, password, role_id)
                                        VALUES ($1, $2, $3);`, [userName, hashedPassword, Role_id]);
        
        res.status(201).json({message : `user registerd ${newUser}`});
    } catch (error) {
        console.log(error)
        res.status(500).json({message : `some error has occurd`});
    }
};

const Login = async (req, res) => {
    try {
        const {userName, Password} = req.body;
        const user = await db.query(`SELECT * FROM users
                                WHERE user_name = $1;`, [userName]);

        if(!user){
          return res.status(400).json({message : `Invalid credentials`}); 
        }
        const isMatch = await bcrypt.compare(Password, user[0]['password'])
        if(!isMatch){
            return res.status(400).json({message : `Invalid credentials`}); 
        }
        const role = await db.query(`SELECT * FROM roles where id = $1`, [user[0]['role_id']]);

        const token = jwt.sign({id: user[0]['id'], role: user[0]['role_id']}, process.env.SECRET)
        res.status(200).json({token}); 
    } catch (error) {
        res.status(500).json({message : `some error has occurd`});
    }
};

module.exports = { register, Login }