
import { Request, Response } from 'express';
import { Usuario } from '../models/usuario';


export const getDashboard = async (req: Request, res: Response) => {
    const listUsuarios = await Usuario.findAll();
  res.json({ listUsuarios });
};