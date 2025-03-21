import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { login, newUser, newCotizacion, getUsuario, deleteUsuario, postUsuario, updateUsuario, getUsuarios } from '../controllers/user';

const router = Router();

router.post('/register',  asyncHandler(newUser));
router.post('/login', login);
//router.post('/cotizacion', asyncHandler(newCotizacion));

//CRUD USUARIOS
router.get('/profile', getUsuarios);
router.get('/profile/:id', getUsuario);

router.delete('/profile/:id', deleteUsuario);
router.post('/profile', postUsuario);
router.put('/profile/:id', updateUsuario);
export default router; 