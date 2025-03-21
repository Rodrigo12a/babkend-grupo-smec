import { Request, RequestHandler, Response } from "express";
import user, { Usuario } from "../models/usuario";
import { roles } from "../models/roles";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cotizacion } from "../models/cotizacion";

export const newUser = async (req: Request, res: Response) => {
    try {
        const { 
            estatus_usuario,
            nombre_usuario,
            ap_usuario,
            am_usuario,
            sexo_usuario, 
            email_usuario, 
            password_usuario,
            imagen_usuario,
            id_rol,
        } = req.body;

        // Crear usuario directamente sin validar existencia
        const nuevoUsuario = await Usuario.create({
            estatus_usuario,
            nombre_usuario,
            ap_usuario,
            am_usuario,
            sexo_usuario,
            email_usuario,
            password_usuario, // Contraseña sin hashear
            imagen_usuario,
            id_rol
        });

        res.status(201).json({
            msg: `Usuario ${email_usuario} creado exitosamente`,
            usuario: nuevoUsuario
        });

    } catch (error) {
        console.error("Error al crear usuario:", error);
        res.status(500).json({ msg: "Error interno del servidor" });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email_usuario, password_usuario } = req.body;

        const usuario: any = await Usuario.findOne({
            where: { email_usuario: email_usuario },
            attributes: ['nombre_usuario', 'password_usuario'] // Eliminé 'id'
        });

        if (!usuario) {
            res.status(400).json({ msg: "Credenciales incorrectas" });
            return;
        }

        // Validación simple de contraseña sin bcrypt
        if (password_usuario !== usuario.password_usuario) {
            res.status(400).json({ msg: "Credenciales incorrectas" });
            return;
        }

        // Respuesta exitosa sin incluir el id
        res.json({
            msg: "Acceso concedido",
            usuario: {
                nombre: usuario.nombre_usuario,
                email: email_usuario
            }
        });
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
};


export const newCotizacion = async (req: Request, res: Response) => {
    try {
        const { 
            mensaje_adicional,
            id_tipo_cotizacion,
            id_usuario
        } = req.body;

        // Validación básica de campos obligatorios
        if (!id_tipo_cotizacion || !id_usuario) {
            res.status(400).json({
                msg: "Los campos id_tipo_cotizacion e id_usuario son obligatorios"
            });
        }

        // Crear cotización en la base de datos
        const nuevaCotizacion = await cotizacion.create({
            mensaje_adicional,
            id_tipo_cotizacion,
            id_usuario
        });

        res.status(201).json({
            msg: "Cotización creada exitosamente",
            data: nuevaCotizacion // Opcional: devolver los datos creados
        });

    } catch (error) {
        console.error("Error al crear cotización:", error);
        res.status(500).json({ 
            msg: "Error interno del servidor",
            error: error instanceof Error ? error.message : "Unknown error" // Detalle del error
        });
    }
};



//CRUD USUARIOS

//obtener lista usuarios
export const getUsuarios = async (req: Request, res: Response) => {
    const listaUsuarios = await user.findAll(); 

    res.json({
        msg: "obtener usuario",
        listaUsuarios
    });
}
//obtener un usuario
export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await user.findByPk(id);
    
    if(usuario){
        res.json({
            msg: "obtener usuario",
            usuario
        });
    }else{
        res.status(404).json({
            msg: "usuario no encontrado",
            id
        });
    }
    
}
//eliminar un usuario
export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const Usuario = await user.findByPk(id);
    if(!Usuario){
        res.status(404).json({
            msg: "usuario no encontrado",
        });
    }else{
        await Usuario.destroy();
        res.json({
            msg: "usuario eliminado de manera exitosa"
        });
    }
}
//enviar un usuario
export const postUsuario = async (req: Request, res: Response) => {
    
    const { body } = req;

    try {
        
        const Usuario = await user.create(body);
        res.json({
            msg: "El usuario fue creado con exito"
        });
        
    } catch (error) {
        console.log(error);
        
    }
}
//actualizar un usuario
export const updateUsuario: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const {
        estatus_usuario,
        nombre_usuario,
        ap_usuario,
        am_usuario,
        sexo_usuario, 
        email_usuario, 
        password_usuario,
        imagen_usuario,
        id_rol,
    } = req.body;

    try {
        const usuario = await user.findByPk(id);

        if (!usuario) {
            res.status(404).json({ msg: "Usuario no encontrado" });
            return;
        }

        // Verificar si se está intentando actualizar el email a uno que ya exista
        if (email_usuario && email_usuario !== usuario.get('email_usuario')) {
            const emailExistente = await user.findOne({ where: { email_usuario } });
            if (emailExistente) {
              res.status(400).json({ msg: "El email ya está en uso" });
              return;
            }
          }
          

        // Construir los datos a actualizar
        const updatedData: any = {
            estatus_usuario,
            nombre_usuario,
            ap_usuario,
            am_usuario,
            sexo_usuario, 
            email_usuario, 
            imagen_usuario,
            id_rol,
        };

        // Si se proporciona una nueva contraseña, la hashea antes de actualizar
        if (password_usuario) {
            updatedData.password_usuario = await bcrypt.hash(password_usuario, 10);
        }

        await usuario.update(updatedData);
        res.json({ msg: "El usuario fue actualizado con éxito!" });
        
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar usuario", error });
    }
};



