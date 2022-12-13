const { Router } = require('express');
const dogsRoutes =require('./dogs.routes')
const temperantsRoutes=require('./temperamentos.routes')

// const fetch=require('fetch');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs',dogsRoutes)
router.use('/temperaments',temperantsRoutes)
// 


module.exports = router;
