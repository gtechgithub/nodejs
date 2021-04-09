
module.exports.opendatabase = () => {

    const sqlite3 = require('sqlite3').verbose();

    // open the database
    let db = new sqlite3.Database('C:\\Users\\gopalakrishnan.c\\sqlite\\test.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the chinook database.');
    });

    return db;

}

module.exports.closedatabase = (db) => {

    db.close(() => {
        console.log('Close the database connection.');
    });
}

module.exports.insert = (db, tradeDetails, res) => {
    db.run('insert into trades(local_settlement_account,local_cash_account,rec_amount,pay_amount, net_amount,security_trans,status,rms_code) values (?,?,?,?,?,?,?,?)'
        , [tradeDetails.local_settle_account, tradeDetails.local_cash_account, tradeDetails.rec_amount, tradeDetails.pay_amount, tradeDetails.net_amount, tradeDetails.sec_trans, tradeDetails.status, tradeDetails.rms_code
        ], (err) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: err });

            }
            else {
                return res.status(200).json({ success: 'Insert row success' });
            }
        });
}

module.exports.select = (db, res) => {
    let sql = `select * from trades`;
    var listarray = [];

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        let count = 0;

        //return res.status(200).json({ "data": rows });
        res.render("pages/retrieve.html", {
            pagetitle: 'Edit Announcements',
            datas: rows
        })
    });
}

module.exports.retriveUpdateDetails = (db, updateDetails, res) => {
    let sql = `select * from trades where local_settlement_account = ? limit 1`;


    var listarray = [];

    console.log("sql:" + sql);

    console.log("updateDetails.trackid:" + updateDetails.track_id);

    // first row only
    db.get(sql, [updateDetails.track_id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        let count = 0;

        console.log (row);
        //return res.status(200).json({ "data": rows });
        
        res.render("pages/update.html", {
            pagetitle: 'Edit Announcements', track_id: updateDetails.track_id,
            model: row
        })

    });

}



