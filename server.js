import express from 'express';
import mysql from 'mysql';

const app = express();
const port = 3032;

app.get('/', (req, res) => {
    res.send('test api');
});

app.get('/customers', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'webuser',
        password: 'passpass',
        database: 'northwind'
    });
    connection.connect((err) => {
        if (err) throw err;
        const sql = 'SELECT company,last_name,first_name FROM customers';
        connection.query(sql, (err, records) => {
            if (err) throw err;
            res.send(records);
        });
    });
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
