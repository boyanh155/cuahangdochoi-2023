const sql = require('mssql');
const config = {
    user: 'sa',
    password: '1',
    server: 'LAPTOP-JH1L089Q',
    port: "1433",
    database: 'cuahangdochoidb',
    options: {
        trustedConnection: true,
        encrypt: true
    }
};

const pool = new sql.ConnectionPool(config);

pool.on('error', err => {
    console.error('SQL Server connection error:', err);
});
//  try to connect


const connect = async(query) => {
    try {
        // if(sql.isCo)
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config)
            // const result = await sql.query `select * from QuanlyKH `
            // console.log(result)
        const response = await sql.query(query)
        sql.close();
        return response;
    } catch (err) {
        console.log(err)
    }
}
module.exports = connect;