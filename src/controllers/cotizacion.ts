import { Request, Response } from "express";
import db from "../db/connection";
import quote, { cotizacion } from "../models/cotizacion";
//obtener todas las cotizaciones
export const getCotizaciones = async (req: Request, res: Response) => {
    const listaCotizaciones = await  quote.findAll(); 
    res.json({
        msg: "Obtener cotizaciones",
        listaCotizaciones
    });
}
//obtener una cotizacion
export const getCotizacion = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const cotizacion = await quote.findByPk(id);
    
    if(cotizacion){
        res.json({
            msg: "obtener cotizacion",
            cotizacion});
        }else{
            res.status(404).json({
                msg: "cotizacion no encontrada",
                id
            });
        }

}
export const updateCotizacion = (req: Request, res: Response) => {
    
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "update cotizacion",
        id,
        body
    });
}
//eliminar una cotizacion
export const deleteCotizacion = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const cotizacion = await quote.findByPk(id);

    if(!cotizacion){
        res.status(404).json({
            msg: "cotizacion no encontrada",
        });
    }else{
        await cotizacion.destroy();
        res.json({
            msg: "cotizacion eliminada de manera exitosa"
        });
    }
}
//enviar una cotizacion
export const postCotizacion = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {
        
    const Cotizacion = await quote.create(body);
    res.json({
        msg: "La cotizacion fue creada con exito"
    });
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: "error al crear cotizacion"
        });
        
    }
   
}