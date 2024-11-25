const { db } = require('../DAL/Connection');

const autherizeRole = (...allowedRoles) => {
    return async (req, res, next) => {
        const role = await db.query(`select * from roles where id = $1`, [req.user.role]);
        console.log(role)
        if(!allowedRoles.includes((role[0]['role'])))
            return res.status(403).json({message : "access denied"})
        next()
    }
}

module.exports = autherizeRole