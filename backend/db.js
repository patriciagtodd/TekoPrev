const crypto = require('crypto');
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

async function initDatabase() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS usuario (
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            passwordhash TEXT NOT NULL
        );
    `);
}

async function getUserByUsername(username) {
    const result = await pool.query(
        'SELECT id, username, passwordhash FROM usuario WHERE username = $1',
        [username],
    );
    
    return result.rows[0] || null;
}

async function createUser(username, rawPassword) {
    const passwordhash = hashPassword(rawPassword);
    const result = await pool.query(
        'INSERT INTO usuario (username, passwordhash) VALUES ($1, $2) RETURNING id, username, passwordhash',
        [username, passwordhash],
    );

    return result.rows[0];
}

async function ensureDefaultUser() {
    const existingUser = await getUserByUsername('admin');
    if (!existingUser) {
        await createUser('admin', 'password');
    }
}

async function validateUserCredentials(username, rawPassword) {
    const user = await getUserByUsername(username);
    if (!user) {
        return null;
    }

    const inputHash = hashPassword(rawPassword);
    if (inputHash !== user.passwordhash) {
        return null;
    }

    return { id: user.id, username: user.username };
}

module.exports = {
    initDatabase,
    ensureDefaultUser,
    createUser,
    getUserByUsername,
    validateUserCredentials,
    pool,
};
