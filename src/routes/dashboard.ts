// routes/dashboard.ts
import { Router } from 'express';
import { getDashboard } from '../controllers/dashboard';
import ValidateToken from './validate-token';

const router = Router();

// Ruta: GET /api/auth/Dashboard
router.get('/user', ValidateToken, getDashboard);

export default router;