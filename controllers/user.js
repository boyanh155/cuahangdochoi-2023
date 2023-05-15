const connect = require("../db/connect")
const pool = require("../db/connect")
module.exports = {
    login: (req, res, next) => {
        // Query 
        connect(`SELECT * FROM NHANVIEN WHERE IDS=${req.body.id} AND _password=${req.body.password}`)
            .then(data => {
                console.log(data.recordset)
                    // succeed
                if (data.recordsets.length < 1) return res.status(404).json({
                    succeed: false,
                    data: [],
                    message: "User not found"
                })
                res.status(200).json({
                    succeed: true,
                    data: data,
                    message: "Login successfully"
                })
            })
            .catch(e => {
                // error
                res.status(500).json({
                    succeed: false,
                    error: e,
                    message: "Login failed"
                })
            })

    }
}