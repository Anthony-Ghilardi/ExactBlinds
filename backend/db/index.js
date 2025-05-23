require('dotenv').config();
const { Pool } = require ('pg');

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

// import * as db from '../db/index.js to require db adapter file rather than requring postgres directly
// within a route
const query = async(text, params) => {
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('executred query', { text, duration, rows: res.rowCount })
    return res
}

const getClient = async() => {
    const client = await pool.connect()
    const query = client.query
    const release = client.release

    const timeout = setTimeout(() => {
        console.error('A client has been checked out for more than 5 second!')
        console.error(`The last executed query on this client was: ${client.lastQuery}`)
    }, 5000)

    client.query = (...args) => {
        client.lastQuery = args
        return query.apply(client, args)
    }
    client.release = () => {
        clearTimeout(timeout)
        client.query = query
        client.release = release
        return release.apply(client)
    }
    return client
}

module.exports = {
    query,
    getClient,
};