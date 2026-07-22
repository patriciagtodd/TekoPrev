const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { initDatabase, ensureDefaultUser, validateUserCredentials } = require('./db');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '8h';

const app = express();

app.use(cors());
app.use(express.json());

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') && authHeader.slice(7);

    if (!token) {
        return res.status(401).json({ success: false, message: 'Token requerido' });
    }

    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Token inválido o expirado' });
        }
        req.user = payload;
        next();
    });
}

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    validateUserCredentials(username, password)
        .then((user) => {
            if (user) {
                const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
                res.json({ success: true, token });
                return;
            }

            res.status(401).json({ success: false, message: 'Credenciales inválidas' });
        })
        .catch(() => {
            res.status(500).json({ success: false, message: 'Error interno del servidor' });
        });
});

app.get('/api/verify', authenticateToken, (req, res) => {
    res.json({ success: true, message: 'Acceso autorizado', user: req.user });
});


async function startServer() {
    try {
        await initDatabase();
        await ensureDefaultUser();

        app.listen(3001, () => {
            console.log('Servidor ejecutándose en el puerto 3001');
        });
    } catch (error) {
        console.error('Error al inicializar la base de datos', error);
        process.exit(1);
    }
}

startServer();