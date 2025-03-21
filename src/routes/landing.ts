import {Router} from 'express';
import {getLanding} from '../controllers/landing';
import ValidateToken from './validate-token';

const router = Router();

router.get('/landing',ValidateToken, getLanding);
export default router;