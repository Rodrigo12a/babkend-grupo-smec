import { Router } from 'express';
import { deleteCotizacion, getCotizacion, getCotizaciones, updateCotizacion, postCotizacion } from '../controllers/cotizacion';

const router = Router();

router.get('/', getCotizaciones);//ruta de todas las cotizaciones
router.get('/:id', getCotizacion);//ruta de una cotizacion
router.post('/', postCotizacion);//ruta para enviar una cotizacion
router.put('/:id', updateCotizacion);//ruta para actualizar una cotizacion
router.delete('/:id', deleteCotizacion);//ruta para eliminar una cotizacion
export default router; 